using System;
using fruitsapp_backend.Models;

namespace fruitsapp_backend.Service.Interfaces
{
	public interface IUserService
	{
        Task<List<User>> GetListAsync(int pageNumber, int pageSize);
        Task<User> DetailsUserAsync(int userId);
        Task<bool> DisableUserAsync(int userId, bool isDisable);
        Task<bool> DeleteUserAsync(List<int> userId);
    }
}

