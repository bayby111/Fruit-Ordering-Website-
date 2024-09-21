using System;
using fruitsapp_backend.Data;
using fruitsapp_backend.Models;
using fruitsapp_backend.Repository.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace fruitsapp_backend.Repository.Implementations
{
    public class AuthRepository : IAuthRepository
    {
        private readonly AppDbcontext _db;

        //constructor
        public AuthRepository(AppDbcontext context)
        {
            _db = context;
        }

        public async Task<User> login(Login model)
        {

            var user =  await _db.user
                .Include(u=>u.Role)
                .FirstOrDefaultAsync(u => u.email.ToLower() == model.email.ToLower()
                && u.password == model.password
                && u.role_id == model.role_id);


            if (user != null)
            {
                return user;
            }

            return null;
           

        }


        public async Task<User> register_user(Register model)
        {


            var user = new User
            {
                role_id = model.role_id,
                name = model.name,
                email = model.email,
                phone = model.phone,
                password = model.password,
            };

            if (user == null)
            {
                return null;
            }

            _db.user.Add(user);
            await _db.SaveChangesAsync();
            return user;

        }

        public bool CheckEmail(string email)
        {
            var exist = _db.user.Where(u => u.email == email).FirstOrDefault();

            if (exist != null)
            {
                return true;

            }
            else if (exist == null)
            {
                return false;
            }


            return false;
        }

        public bool CheckPhone(string phone)
        {
            var exist = _db.user.Where(u => u.phone == phone).FirstOrDefault();

            if (exist != null)
            {
                return true;

            }
            else if (exist == null)
            {
                return false;
            }


            return false;
        }

      

        public async Task<User> getUser(int UserId, string Email, int RoleId)
        {
            var user = await _db.user.FirstOrDefaultAsync( u => u.Id == UserId && u.email.ToLower() == Email.ToLower() && u.role_id == RoleId);

            if(user != null)
            {
                return user;
            }

            return null;
        }

      

        public async Task<User> update_profile(User model)
        {
            var user = await _db.user.FindAsync(model.Id);

            if(user == null)
            {
                return null;
            }
           
            user.name = model.name;
            user.email = model.email;
            user.phone = model.phone;

            if (model.avatar_url != null && model.avatar_url.Length > 0)
            {
                user.avatar_url = model.avatar_url;
            }

            await SaveChangesAsync();

            return user;

        }

        public async Task<bool> reset_password(int id, string newPasswords)
        {
            var user = await _db.user.FindAsync(id);

            if (user == null)
            {
                return false ;
            }

            user.password = newPasswords;
            

            await SaveChangesAsync();

            return true;

        }

        public async Task SaveChangesAsync()
        {
            await _db.SaveChangesAsync();
        }

        public bool CheckPassword(int user_id, string passwords)
        {
            var user =  _db.user.Find(user_id);

            if(user?.password == passwords)
            {
                return true;
            }

            return false;
        }

        public bool CheckRole(int roleId)
        {
            throw new NotImplementedException();
        }
    }
}

