using System;
using fruitsapp_backend.Models;
using fruitsapp_backend.Models.DTOs;

namespace fruitsapp_backend.Service.Interfaces
{
	public interface IProductService
	{
		public Task<Product> CreateProductAsync(ProductRequest request);
        public Task<List<Product>> GetListAsync(int pageNumber, int pageSize);
        public Task<Product> UpdateProductAsync(Product model);
        public Task<Product> DetailsProductAsync(int productId);
        public Task<bool> DeleteProductAsync(int productId, bool isDelete);

    }
}

