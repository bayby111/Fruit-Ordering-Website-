using System;
using fruitsapp_backend.Data;
using fruitsapp_backend.Models;
using fruitsapp_backend.Repository.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace fruitsapp_backend.Repository.Implementations
{
    public class ProductRepository : IProductRepository
    {
        private readonly AppDbcontext _db;

        public ProductRepository(AppDbcontext context)
        {
            _db = context;
        }

        public async Task SaveChangesAsync()
        {
            await _db.SaveChangesAsync();
        }

        public async Task<Product> CreateProductAsync(Product model)
        {
          
            _db.product.Add(model);
            await SaveChangesAsync();
            return model;
            
        }

        public async Task<bool> DeleteProductAsync(int productId, bool isDelete)
        {
            var product = await _db.product.FindAsync(productId);
            if(product != null)
            {
                product.isDelete = isDelete;
                await SaveChangesAsync();
                return true;
            }

            return false;
        }

        public async Task<Product> DetailsProductAsync(int productId)
        {
            var product = await _db.product.FindAsync(productId);
            if(product != null)
            {
                return product;
            }
            return null;
        }

        public async Task<List<Product>> GetListAsync(int pageNumber, int pageSize)
        {
            var product = await _db.product.AsNoTracking().Skip((pageNumber - 1) * pageSize).Take(pageSize).ToListAsync();
            if(product != null)
            {
                return product;
            }
            return null;
            
        }

       

        public async Task<Product> UpdateProductAsync(Product model)
        {
            var product = await _db.product.FindAsync(model.Id);     

            if(product != null)
            {
                product.title = model.title;
                product.image = model.image;
                product.description = model.description;
                product.quantity = model.quantity;
                product.isDelete = model.isDelete;

                await SaveChangesAsync();

                return product;
            }

            return null;

        }
    }
}

