using System;
using fruitsapp_backend.Models;
using fruitsapp_backend.Repository.Interfaces;
using fruitsapp_backend.Service.Interfaces;

namespace fruitsapp_backend.Service.Implementations
{
	public class Origin_ProductService : IOrigin_ProductService
	{
        private readonly IOrigin_ProductRepository _origin_ProductRepository;

        public Origin_ProductService(IOrigin_ProductRepository origin_ProductRepository)
		{
            _origin_ProductRepository = origin_ProductRepository;
		}

        public async Task<OriginProduct> CreateOriginAsync(OriginProduct model)
        {
            try
            {
                var result = await _origin_ProductRepository.CreateOriginAsync(model);
                return result;
            }
            catch (AggregateException argEx)
            {
                // Xử lý lỗi liên quan đến tham số không hợp lệ
                throw new ArgumentException("Lỗi người dùng: " + argEx.Message);
            }
            catch (Exception e)
            {
                // Xử lý lỗi chung
                throw new Exception("Lỗi hệ thống: " + e.Message);
            }
        }

        public async Task<OriginProduct> DetailsOriginAsync(int originId)
        {
            try
            {
                var result = await _origin_ProductRepository.DetailsOriginAsync(originId);
                return result;
            }
            catch (AggregateException argEx)
            {
                // Xử lý lỗi liên quan đến tham số không hợp lệ
                throw new ArgumentException("Lỗi người dùng: " + argEx.Message);
            }
            catch (Exception e)
            {
                // Xử lý lỗi chung
                throw new Exception("Lỗi hệ thống: " + e.Message);
            }
        }

        public async Task<List<OriginProduct>> GetListAsync(int pageNumber, int pageSize)
        {
            try
            {
                var result = await _origin_ProductRepository.GetListAsync(pageNumber, pageSize);
                return result;
            }
            catch (AggregateException argEx)
            {
                // Xử lý lỗi liên quan đến tham số không hợp lệ
                throw new ArgumentException("Lỗi người dùng: " + argEx.Message);
            }
            catch (Exception e)
            {
                // Xử lý lỗi chung
                throw new Exception("Lỗi hệ thống: " + e.Message);
            }
        }

        public async Task<OriginProduct> UpdateOriginAsync(OriginProduct model)
        {
            try
            {
                var result = await _origin_ProductRepository.UpdateOriginAsync(model);
                return result;
            }
            catch (AggregateException argEx)
            {
                // Xử lý lỗi liên quan đến tham số không hợp lệ
                throw new ArgumentException("Lỗi người dùng: " + argEx.Message);
            }
            catch (Exception e)
            {
                // Xử lý lỗi chung
                throw new Exception("Lỗi hệ thống: " + e.Message);
            }
        }
    }
}

