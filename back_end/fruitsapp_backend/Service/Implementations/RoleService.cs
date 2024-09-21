using System;
using fruitsapp_backend.Models;
using fruitsapp_backend.Repository.Interfaces;
using fruitsapp_backend.Service.Interfaces;

namespace fruitsapp_backend.Service.Implementations
{
	public class RoleService : IRoleService
	{

		private readonly IRoleRepository _roleRepository;

		public RoleService(IRoleRepository roleRepository)
		{
            _roleRepository = roleRepository;
        }

        public async Task<Role> CreateRoleAsync(Role model)
        {
            try
            {
                if (model == null)
                {
                    throw new AggregateException("Dữ liệu đầu vào không hợp lệ.");
                }

                var check_role = await _roleRepository.CheckRoleAsync(model?.role_code, model.role_name);

                if (check_role)
                {
                    throw new AggregateException("role name or role code đã tồn tại!");
                }
                model.create_at = DateTime.Now;
                model.update_at = DateTime.Now;
                var result = await _roleRepository.CreateRoleAsync(model);
                if (result == null)
                {
                    throw new AggregateException("tạo role thất bại!");
                }

                return result;


            }
            catch (Exception e)
            {
                throw new ArgumentException("Lỗi khi tạo role: " + e.Message);
            }
              

        }

        public async Task<bool> DisableRoleAsync(int roleId)
        {
            try
            {
                if (roleId <=0 )
                {
                    throw new AggregateException("Dữ liệu đầu vào không hợp lệ.");
                }

             
                var result = await _roleRepository.DisableRoleAsync(roleId);
                if (!result)
                {
                    throw new AggregateException("vô hiệu hoá thất bại!");
                }

                return result;


            }
            catch (Exception e)
            {
                throw new ArgumentException("Lỗi khi vô hiệu hoá thất bại " + e.Message);
            }
        }

        public async Task<List<Role>> GetListAsync()
        {
            try
            {
               
                var result = await _roleRepository.GetListAsync();
                if (result == null)
                {
                    throw new AggregateException("lấy danh sách thất bại!");
                }

                return result;


            }
            catch (Exception e)
            {
                throw new ArgumentException("Lỗi khi lấy danh sách " + e.Message);
            }
        }

        public async Task<Role> UpdateRoleAsync(Role model)
        {
            try
            {

                var result = await _roleRepository.UpdateRoleAsync(model);
                if (result == null)
                {
                    throw new AggregateException("lấy danh sách thất bại!");
                }

                return result;

            }
            catch (Exception e)
            {
                throw new ArgumentException("Lỗi khi lấy danh sách " + e.Message);
            }
        }
    }
}

