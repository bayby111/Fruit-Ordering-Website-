using System;
using fruitsapp_backend.Data;
using fruitsapp_backend.Models;
using fruitsapp_backend.Repository.Interfaces;

namespace fruitsapp_backend.Repository.Implementations
{
    public class ImageRepository : IImageRepository
    {
        private readonly AppDbcontext _db;

        public ImageRepository(AppDbcontext context)
        {
            _db = context;
        }

        public async Task SaveChangesAsync()
        {
            await _db.SaveChangesAsync();
        }

        public async Task<ImageProduct> CreateImageProductAsync(ImageProduct model)
        {
            
           _db.image_product.Add(model);
           await SaveChangesAsync();
            return model;
        }
    }
}

