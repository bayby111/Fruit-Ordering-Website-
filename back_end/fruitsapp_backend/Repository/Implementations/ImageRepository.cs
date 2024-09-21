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

        public async Task<List<ImageProduct>> create(List<ImageProduct> model)
        {
            var imagesAdded = new List<ImageProduct>();
            

            foreach(var img in model)
            {
                var newImage = new ImageProduct
                {
                    product_id = img.product_id,
                    image_url = img.image_url,
                  
                };

                _db.image_product.Add(newImage);
                imagesAdded.Add(newImage);

            }
            
            await _db.SaveChangesAsync();

            if(imagesAdded != null)
            {
                return imagesAdded;
            }

            return null;
        }
    }
}

