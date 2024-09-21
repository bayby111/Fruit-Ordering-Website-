using System;
using System.IdentityModel.Tokens.Jwt;
using System.Net.Mail;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using fruitsapp_backend.Data;
using fruitsapp_backend.Models;
using fruitsapp_backend.Models.DTOs;
using fruitsapp_backend.Repository.Interfaces;
using fruitsapp_backend.Service.Interfaces;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace fruitsapp_backend.Service.Implementations
{
    public class AuthService : IAuthService
    {
        private readonly IAuthRepository _authRepository;
        private readonly IAuthenTokenRepository _authenTokenRepository;
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _webHostEnvironment;

        public AuthService(IAuthRepository authRepository,
            IAuthenTokenRepository authenTokenRepository,
            IConfiguration configuration,
            IWebHostEnvironment webHostEnvironment)
        {
            _authRepository = authRepository;
            _authenTokenRepository = authenTokenRepository;
            _configuration = configuration;
            _webHostEnvironment = webHostEnvironment;
        }

        public async Task<string> login(Login model)
        {
            try
            {
                if(model == null)
                {
                    throw new AggregateException("Dữ liệu đầu vào không hợp lệ.");
                }

                model.password = HashPassword(model.password);
               
                var user = await _authRepository.login(model);

                if(user == null)
                {
                    throw new ArgumentException("không tìm thấy người dùng!");

                }

                if (user.disable == true)
                {
                    throw new ArgumentException("tài khoản người dùng đã bị vô hiệu hoá!.");

                }
                DateTime expiration; //  ngày hết hạn của token
                var token = GenerateToken(user, out expiration);

                if (token == null)
                {
                    throw new ArgumentException("tạo token thất bại!.");

                }

                var authToken = new Authen_Token
                {
                    user_id = user.Id,
                    login_provider = "default my app",
                    name = "ACCESS TOKEN",
                    value = token,
                    expiration_date = expiration
                };

                var result_save_token = await _authenTokenRepository.SaveTokenAsync(authToken);

                if (result_save_token == null)
                {
                    throw new ArgumentException("lưu token thất bại!.");

                }

                return token;

            }catch(Exception e)
            {
                throw new ArgumentException("Lỗi khi đăng nhập người dùng: " + e.Message); 
            }
        }

        public async Task<User> register_user(Register model)
        {
            try
            {
                // Kiểm tra tính hợp lệ của dữ liệu đầu vào
                if (model == null)
                {
                    // Nếu dữ liệu không hợp lệ, ném ra một ngoại lệ và xử lý tương ứng
                    throw new ArgumentException("Dữ liệu đầu vào không hợp lệ.");
                }

                var check_email = _authRepository.CheckEmail(model.email);

                if(check_email == true)
                {
                    throw new ArgumentException(" Email đã tồn tại!.");
                }

                var check_phone = _authRepository.CheckPhone(model.phone);

                if (check_phone == true)
                {
                    throw new ArgumentException("số điện thoại được đăng ký rồi!.");
                }
                model.password = HashPassword(model.password);

                if (model.password == "")
                {
                    throw new ArgumentException("mã hoá mật khuẩu thất bại!.");
                }

                   return await _authRepository.register_user(model);
            }
            catch (Exception ex)
            {

                throw new ArgumentException("Lỗi khi đăng ký người dùng: " + ex.Message); ; 
            }
            
        }

        private string HashPassword(string password)
        {
            //byte[] salt = RandomNumberGenerator.GetBytes(128 / 8);
            byte[] DefaultSalt = new byte[] { 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0A };
            string hashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
            password: password!,
            salt: DefaultSalt,
            prf: KeyDerivationPrf.HMACSHA256,
            iterationCount: 100000,
            numBytesRequested: 256 / 8));
            return hashed;
        }

        private string GenerateToken(User user, out DateTime expiration)

        {
            // lấy jwt từ appsetting
            var jwtSettings = _configuration.GetSection("JwtSettings");
            var issuer = jwtSettings.GetValue<string>("Issuer");
            var audience = jwtSettings.GetValue<string>("Audience");
            var secretKey = jwtSettings.GetValue<string>("SecretKey");

            expiration = DateTime.UtcNow.AddDays(1);

            // tạo thông tin xác thực
            var claims = new List<Claim>
             {
               new Claim("UserId", user.Id.ToString()),
               new Claim(ClaimTypes.Email, user.email!),
               new Claim("RoleId", user.role_id.ToString()),
               new Claim(ClaimTypes.Role, user.Role!.role_name!)
             };

            // Tạo khóa ngẫu nhiên có kích thước (32 byte)

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey!));

            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var tokenOptions = new JwtSecurityToken
            (   issuer,
                audience,
                claims: claims,
                expires: expiration, // Thời gian hết hạn 1 giờ
                signingCredentials: credentials
            );

            var tokenString = new JwtSecurityTokenHandler().WriteToken(tokenOptions);
            return tokenString;

        }

        public async Task<User> getUser(int UserId, string Email, int RoleId)
        {
            try
            {
                if (UserId == null && Email == "" && RoleId == null) 
                {
                    throw new AggregateException("Dữ liệu đầu vào không hợp lệ.");
                }

                var user = await _authRepository.getUser(UserId, Email, RoleId);

                if(user == null)
                {
                    throw new AggregateException("Lấy thông tin người dùng thất bại! ");
                }

             
                return user;
            }
            catch(Exception e)
            {
                throw new ArgumentException("Lỗi người dùng: " + e.Message);
            }
        }

        public async Task<bool> Logout (string token)
        {
            try
            {
                if (token == null)
                {
                    throw new AggregateException("Dữ liệu đầu vào không hợp lệ.");
                }

                var result = await _authenTokenRepository.RemoveTokenAsync(token);

                if (!result)
                {
                    throw new AggregateException("logout thất bại.");
                }

                return result;

            }
            catch (Exception e)
            {
                throw new ArgumentException("Lỗi khi logout: " + e.Message);
                
            }
        }

        public async Task<User> update_profile(UserProfile model)
        {
            try
            {
                if (model == null)
                {
                    throw new AggregateException("Dữ liệu đầu vào không hợp lệ.");
                }
                var user = new User();
                user.Id = model.UserId;
                user.name = model.Name;
                user.email = model.Email;
                user.phone = model.Phone;
                
                if (model.Avatar != null && model.Avatar.Length > 0)
                {
                    var uniqueFileName = Guid.NewGuid().ToString() + "_" + model.Avatar.FileName;
                    var imgPath = Path.Combine(_webHostEnvironment.WebRootPath, "Images/avatar", uniqueFileName);
                    using (var stream = new FileStream(imgPath, FileMode.Create))
                    {
                        await model.Avatar.CopyToAsync(stream);

                    }
                     user.avatar_url = uniqueFileName;
                }
                var result = await _authRepository.update_profile(user);

                if (result == null)
                {
                    throw new AggregateException("cập nhật profile thất bại.");
                }

                return result;

            }
            catch (Exception e)
            {
                throw new ArgumentException("Lỗi khi cập nhật: " + e.Message);

            }
        }


        public async Task<bool> reset_password(int user_id, string oldPassword, string newPassword)
        {
            try
            {
                if (user_id <= 0)
                {
                    throw new ArgumentException("ID không hợp lệ.");
                }

                if (string.IsNullOrEmpty(newPassword))
                {
                    throw new ArgumentException("Mật khẩu mới không được để trống.");
                }
                var hash_oldpassword = HashPassword(oldPassword);
                var checkPass = _authRepository.CheckPassword(user_id, hash_oldpassword);
                if (!checkPass)
                {
                    throw new AggregateException("mật khẩu củ không trùng khớp.");
                }

                var hash_newpassword = HashPassword(newPassword);

                var result = await _authRepository.reset_password(user_id, hash_newpassword);

                if (!result)
                {
                    throw new AggregateException("thay đổi mật khẩu thất bại.");
                }

                return result;

            }
            catch (Exception e)
            {
                throw new ArgumentException("Lỗi khi thay đổi : " + e.Message);

            }
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="email"></param>
        /// <param name="resetToken"></param>
        /// <returns></returns>
        public async Task SendPasswordResetEmail(string email, string resetToken)
        {
            var resetUrl = $"https://your-app.com/reset-password?token={resetToken}";

            var message = new MailMessage("noreply@yourapp.com", email)
            {
                Subject = "Password Reset",
                Body = $"Click the link to reset your password: {resetUrl}",
                IsBodyHtml = true
            };

            using (var client = new SmtpClient("smtp.your-email-provider.com"))
            {
                await client.SendMailAsync(message);
            }
        }

    }
}

