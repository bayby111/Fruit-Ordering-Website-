using System;
using fruitsapp_backend.Models;
using fruitsapp_backend.Repository.Interfaces;
using fruitsapp_backend.Service.Interfaces;

namespace fruitsapp_backend.Service.Implementations
{
	public class Price_ProductService : IPrice_ProductService
    {
        private readonly IPrice_ProductRepository _price_ProductReposiroty;
		public Price_ProductService(IPrice_ProductRepository price_ProductReposiroty)
		{
            _price_ProductReposiroty = price_ProductReposiroty;
		}

        public async Task<PriceProduct> CreatePriceAsync(PriceProduct model)
        {
            try
            {
                var result = await _price_ProductReposiroty.CreatePriceAsync(model);
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

        public async Task<bool> DeletePriceAsync(int priceId, bool isDelete)
        {
            try
            {
                var result = await _price_ProductReposiroty.DeletePriceAsync(priceId, isDelete);

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

        public async Task<PriceProduct> DetailsPriceAsync(int priceId)
        {
            try
            {
                var result = await _price_ProductReposiroty.DetailsPriceAsync(priceId);
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

        public async Task<List<PriceProduct>> GetListAsync(int pageNumber, int pageSize)
        {
            try
            {
                var result = await _price_ProductReposiroty.GetListAsync(pageNumber, pageSize);
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

        public async Task<PriceProduct> UpdatePriceAsync(PriceProduct model)
        {
            try
            {
                var result = await _price_ProductReposiroty.UpdatePriceAsync(model);
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

