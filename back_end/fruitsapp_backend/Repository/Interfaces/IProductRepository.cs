using System;
using fruitsapp_backend.Models;

namespace fruitsapp_backend.Repository.Interfaces
{
	public interface IProductRepository
	{
		Task<Product> CreateProductAsync(Product model);
        Task<List<Product>> GetListAsync(int pageNumber, int pageSize);
        Task<Product> UpdateProductAsync(Product model);
        Task<Product> DetailsProductAsync(int productId);
        Task<bool> DeleteProductAsync(int productId, bool isDelete);
        Task SaveChangesAsync();
    }
}

