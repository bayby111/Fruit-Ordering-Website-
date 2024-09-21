using System;
using fruitsapp_backend.Models;

namespace fruitsapp_backend.Service.Interfaces
{
	public interface IProductService
	{
		public Task<Product> CreateProductAsync(Product model, IFormFile featuredImage, List<IFormFile> galleryImages);
        public Task<List<Product>> GetListAsync(int pageNumber, int pageSize);
        public Task<Product> UpdateProductAsync(Product model);
        public Task<Product> DetailsProductAsync(int productId);
        public Task<bool> DeleteProductAsync(int productId, bool isDelete);

    }
}

