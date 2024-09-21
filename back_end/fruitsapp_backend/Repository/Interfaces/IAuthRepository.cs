using System;
using fruitsapp_backend.Models;

namespace fruitsapp_backend.Repository.Interfaces
{
	public interface IAuthRepository
	{
       
        Task<User> login(Login model);
        Task<User> register_user(Register model);
        Task<User> getUser (int UserId, string Email, int RoleId);
        Task<User> update_profile(User model);
        Task<bool> reset_password(int id, string newPasswords);
        bool CheckPassword(int user_id, string passwords);
        bool CheckEmail(string email);
        bool CheckPhone(string phone);
        bool CheckRole(int roleId);
        

    }
}

