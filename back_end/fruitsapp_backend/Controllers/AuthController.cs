using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using fruitsapp_backend.Models;
using fruitsapp_backend.Models.DTOs;
using fruitsapp_backend.Service.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using static System.Runtime.InteropServices.JavaScript.JSType;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace fruitsapp_backend.Controllers
{
    [Route("api/[controller]")]
    public class AuthController : Controller
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }


        // login
        [AllowAnonymous]
        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] Login model)
        {
            try
            {
                var result =   await _authService.login(model);
                return Ok(new { status = "success", message = "Login successfully!", token = result });

            }
            catch (ArgumentException e)
            {
                // Bắt lỗi ArgumentException và trả về phản hồi BadRequest với thông điệp lỗi
                return BadRequest(new { status = "error", message = e.Message });
            }
            catch (Exception e)
            {
                return StatusCode(500, new { status = "error", message = "An error occurred while processing your request", error = e.Message});
            }
        }

        // resgiter
        [HttpPost]
        [Route("register-user")]
        public async Task<IActionResult> Register([FromForm] Register model)
        {
            try
            {
                var result =  await _authService.register_user(model);

                return Ok(new { status = "success", message = " Registered successfully", data = result });

            }
            catch (ArgumentException ex)
            {
                // Bắt lỗi ArgumentException và trả về phản hồi BadRequest với thông điệp lỗi
                return BadRequest(new { status = "error", message = ex.Message });
            }
            catch (Exception e)
            {
                return StatusCode(500, new { status = "error", message = "An error occurred while processing your request", error = e.Message, stackTrace = e.StackTrace });
            }
        }

        [HttpGet]
        [Route("get-user")]
        [Authorize(Policy = "AdminOrUser")] // Httpcontext.Request.Headers["Authorization"] to get token
        public  async Task<IActionResult> GetUser()
        {
            try
            {
                var userData = await GetCurrentUser();
                return Ok(new { status = "success", message = " Authenticated! successfully", user = userData });
            }
            catch(ArgumentException e)
            {
                return BadRequest(new { status = "error", message = e.Message });
            }
            catch (UnauthorizedAccessException)
            {
                return Unauthorized(new { status = "error", message = "Unauthorized access. Please check your credentials and try again." });
            }
            catch (Exception e)
            {
                return StatusCode(500, new { status = "error", message = "An error occurred while processing your request", error = e.Message, stackTrace = e.StackTrace });
            }
        }

        private async Task <User> GetCurrentUser()
        {
            var identity =  HttpContext.User.Identity as ClaimsIdentity;

            if (identity != null)
            {
                var useridClaim = identity.Claims.FirstOrDefault(x => x.Type == "UserId")!.Value;
                var emailClaim = identity.Claims.FirstOrDefault(x => x.Type == ClaimTypes.Email)!.Value;
                var roleidClaim = identity.Claims.FirstOrDefault(x => x.Type == "RoleId")!.Value;
                var roleClaim = identity.Claims.FirstOrDefault(x => x.Type == ClaimTypes.Role)!.Value;

                if (emailClaim != null && roleClaim != null)
                {
                    var user = await _authService.getUser(int.Parse(useridClaim), emailClaim, int.Parse(roleidClaim));
                   
                    return user;
                }
            }

            return null;
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("user-logout")]
        public async Task<IActionResult> Logout([FromBody] string token)
        {
            try
            {
                var result = await _authService.Logout(token);

                return Ok(new { status = "success", message = "Logout successfully!"});

            }
            catch (ArgumentException e)
            {
                // Bắt lỗi ArgumentException và trả về phản hồi BadRequest với thông điệp lỗi
                return BadRequest(new { status = "error", message = e.Message });
            }
            catch (Exception e)
            {
                return StatusCode(500, new { status = "error", message = "An error occurred while processing your request", error = e.Message });
            }
        }

       

        [HttpPost]
        [Route("update-profile-auth")]

        public async Task<IActionResult> UpdateProfile([FromForm] UserProfile modelRequest)
        {
            try
            {
                
                var result = await _authService.update_profile(modelRequest);

                return Ok(new { status = "success", message = "update successfully!", user = result });

            }
            catch (ArgumentException e)
            {
                // Bắt lỗi ArgumentException và trả về phản hồi BadRequest với thông điệp lỗi
                return BadRequest(new { status = "error", message = e.Message });
            }
            catch (Exception e)
            {
                return StatusCode(500, new { status = "error", message = "An error occurred while processing your request", error = e.Message });
            }
        }


        [HttpPost]
        [Route("reset-password")]

        public async Task<IActionResult> ResetPassword([FromForm] int user_id, string oldPassword, string newPassword)
        {
            try
            {
                var result = await _authService.reset_password(user_id, oldPassword, newPassword);

                if (!result)
                {
                    return BadRequest(new { status = "error", message = "Thay đổi mật khẩu thất bại." });
                }

                return Ok(new { status = "success", message = "Reset successfully!" });

            }
            catch (ArgumentException e)
            {
                // Bắt lỗi ArgumentException và trả về phản hồi BadRequest với thông điệp lỗi
                return BadRequest(new { status = "error", message = e.Message });
            }
            catch (Exception e)
            {
                return StatusCode(500, new { status = "error", message = "An error occurred while processing your request", error = e.Message });
            }
        }



    }
}

