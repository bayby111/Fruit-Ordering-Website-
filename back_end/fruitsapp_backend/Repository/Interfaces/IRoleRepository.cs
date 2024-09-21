using System;
using fruitsapp_backend.Models;

namespace fruitsapp_backend.Repository.Interfaces
{
	public interface IRoleRepository
	{
        //Repository (Repository): Lớp tương tác với cơ sở dữ liệu để thực hiện thao tác tạo mới vai trò
        Task<Role> CreateRoleAsync(Role model);
        Task<List<Role>> GetListAsync();
        Task<Role> UpdateRoleAsync(Role model);
        Task<bool> DisableRoleAsync(int roleId);
        Task<bool> CheckRoleAsync(string roleCode, string roleName);
        Task SaveChangesAsync();


    }
}

