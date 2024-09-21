using System;
using System.Threading.Tasks;
using fruitsapp_backend.Models;


namespace fruitsapp_backend.Service.Interfaces
{
	public interface IAuthService
    {

      
        Task<string> login(Login model);
        Task<User> register_user(Register model);
        Task<User> getUser(int UserId, string Email, int RoleId);
        Task<bool> Logout(string token);
        Task<User> update_profile(UserProfile model);
        Task<bool> reset_password(int user_id, string oldPassword, string newPassword );

    }
}

