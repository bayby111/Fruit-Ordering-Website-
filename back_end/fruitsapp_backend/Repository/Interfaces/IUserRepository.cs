using System;
using fruitsapp_backend.Models;

namespace fruitsapp_backend.Repository.Interfaces
{
	public interface IUserRepository
	{

        Task<User> CreateUserAsync(User model);
        Task<List<User>> GetListAsync(int pageNumber, int pageSize);
        Task<User> UpdateUserAsync(User model);
        Task<User> DetailsUserAsync(int userId);
        Task<bool> DisableUserAsync(int userId, bool isDisable);
        Task<bool> DeleteUserAsync(List<int> userId);
        Task SaveChangesAsync();

    }
}

