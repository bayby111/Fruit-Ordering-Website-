using System;
using fruitsapp_backend.Models;

namespace fruitsapp_backend.Service.Interfaces
{
	public interface IRoleService
	{
        //Service (Service): Lớp trung gian giữa Controller và Repository để xử lý logic kinh doanh nếu 
        Task<Role> CreateRoleAsync(Role model);
        Task<List<Role>> GetListAsync();
        Task<Role> UpdateRoleAsync(Role model);
        Task<bool> DisableRoleAsync(int roleId);
     

    }
}

