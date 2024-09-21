using System;
using System.Data;
using System.Net.NetworkInformation;
using Azure;
using fruitsapp_backend.Data;
using fruitsapp_backend.Models;
using fruitsapp_backend.Repository.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace fruitsapp_backend.Repository.Implementations
{
	public class RoleRepository : IRoleRepository
	{
		private readonly AppDbcontext _db;
		public RoleRepository(AppDbcontext context)
		{
			_db = context;

        }

        public async Task<bool> CheckRoleAsync(string roleCode, string roleName)
        {
            var check = await _db.role
                .FirstOrDefaultAsync(r => r.role_code.ToLower() == roleCode.ToLower() && r.role_name.ToLower() == roleName.ToLower());
            if(check != null)
            {
                return true;
            }
            return false;
        }


        public async Task<Role> CreateRoleAsync(Role model)
        {        
                _db.role.Add(model);
                await SaveChangesAsync();
                return model;           
        }

        public async Task<bool> DisableRoleAsync(int roleId)
        {
            var role = await _db.role.FindAsync(roleId);

            if(role != null)
            {
                role.isDelete = true;
                await SaveChangesAsync();
                return true;
            }

            return false;
        }

        public async Task<List<Role>> GetListAsync()
        {
            var role = await _db.role.Where(r=> r.isDelete == false).ToListAsync();
            if (role != null)
            {
                return role;
            }

            return null;
        }

        

        public async Task<Role> UpdateRoleAsync(Role model)
        {
            var role = await _db.role.FindAsync(model.Id);

            if(role != null)
            {
                role.role_name = model.role_name;
                role.role_code = model.role_code;
                role.update_at = DateTime.Now;
                await SaveChangesAsync();
                return role;
            }

            return null;
        }

        public async Task SaveChangesAsync()
        {
            await _db.SaveChangesAsync();
        }
    }
}

