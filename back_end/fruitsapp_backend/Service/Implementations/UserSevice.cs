using System;
using fruitsapp_backend.Models;
using fruitsapp_backend.Repository.Interfaces;
using fruitsapp_backend.Service.Interfaces;

namespace fruitsapp_backend.Service.Implementations
{
	public class UserSevice : IUserService
    {
        private readonly IUserRepository _userRepository;
        public UserSevice(IUserRepository userRepository)
		{
            _userRepository = userRepository;

        }

        public async Task<bool> DeleteUserAsync(List<int> userId)
        {
            try
            {
                if (userId == null || userId.Count <= 0 )
                {
                    throw new AggregateException("Dữ liệu đầu vào không hợp lệ.");
                }

                var result = await _userRepository.DeleteUserAsync(userId);

                if (!result)
                {
                    throw new Exception("Xóa người dùng thất bại do lỗi hệ thống.");

                }

                return result;

            }
            catch (ArgumentException argEx)
            {
                // Xử lý lỗi liên quan đến tham số không hợp lệ
                throw new ArgumentException("Lỗi người dùng: " + argEx.Message);
            }
            catch (Exception ex)
            {
                // Xử lý lỗi chung
                throw new Exception("Lỗi hệ thống: " + ex.Message);
            }
        }

        public async Task<User> DetailsUserAsync(int userId)
        {
            try
            {
                if (userId <= 0)
                {
                    throw new AggregateException("Dữ liệu đầu vào không hợp lệ.");
                }

                var result = await _userRepository.DetailsUserAsync(userId);

                if (result == null)
                {
                    throw new ArgumentException("xem chi tiết thất bại!");

                }

                return result;

            }
            catch (Exception e)
            {
                throw new ArgumentException("Lỗi người dùng: " + e.Message);
            }
        }

        public async Task<bool> DisableUserAsync(int userId, bool isDisable)
        {
            try
            {
                if(userId <= 0)
                {
                    throw new AggregateException("Dữ liệu đầu vào không hợp lệ.");
                }

                var result = await _userRepository.DisableUserAsync(userId, isDisable);

                if (!result)
                {
                    throw new ArgumentException("disable  người dùng thất bại!");

                }

                return result;

            }
            catch (Exception e)
            {
                throw new ArgumentException("Lỗi người dùng: " + e.Message);
            }
        }

        public async Task<List<User>> GetListAsync(int pageNumber, int pageSize)
        {
            try
            {
                
                var result = await _userRepository.GetListAsync(pageNumber, pageSize);
                if(result == null)
                {
                    throw new ArgumentException("không lấy được danh sách người dùng.");

                }

                return result;

            }catch(Exception e)
            {
                throw new ArgumentException("Lỗi người dùng: " + e.Message);
            }
        }
    }
}

