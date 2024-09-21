using System;
using fruitsapp_backend.Data;
using fruitsapp_backend.Models;
using fruitsapp_backend.Repository.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace fruitsapp_backend.Repository.Implementations
{
    public class Price_ProductRepository : IPrice_ProductRepository
    {
        private readonly AppDbcontext _db;

        public Price_ProductRepository(AppDbcontext context)
        {
            _db = context;
        }

        public async Task SaveChangesAsync()
        {
            await _db.SaveChangesAsync();
        }

        public async Task<PriceProduct> CreatePriceAsync(PriceProduct model)
        {
          
            _db.price_product.Add(model);
            await _db.SaveChangesAsync();

          
            return model;
        }

        public async Task<bool> DeletePriceAsync(int priceId, bool isDelete)
        {
            var price = await _db.price_product.FirstOrDefaultAsync(p => p.Id == priceId);

            if(price != null)
            {
                price.isDelete = isDelete;
                await SaveChangesAsync();
                return true;
            }

            return false;
        }

        public async Task<PriceProduct> DetailsPriceAsync(int priceId)
        {
            var price = await _db.price_product.FindAsync(priceId);

            if(price != null)
            {
                return price;
            }
            return null;

        }

        public async Task<List<PriceProduct>> GetListAsync(int pageNumber, int pageSize)
        {
            var price = await _db.price_product.AsNoTracking()
                .Skip((pageNumber - 1) * pageSize)
                .Take(pageSize).ToListAsync();

            if(price != null)
            {
                return price;
            }

            return null;
        }

        

        public async Task<PriceProduct> UpdatePriceAsync(PriceProduct model)
        {
            var price = await _db.price_product.FindAsync(model.Id);
         

            if(price != null)
            {
                price.price = model.price;
                price.price = model.product_id;
                price.currency = model.currency;
                price.description = model.description;
                await SaveChangesAsync();
                return price;
            }

            return null;
        }
    }
}

