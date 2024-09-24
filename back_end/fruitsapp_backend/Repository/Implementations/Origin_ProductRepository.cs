using System;
using fruitsapp_backend.Data;
using fruitsapp_backend.Models;
using fruitsapp_backend.Repository.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace fruitsapp_backend.Repository.Implementations
{
    public class Origin_ProductRepository : IOrigin_ProductRepository
    {
        private readonly AppDbcontext _db;

        public Origin_ProductRepository(AppDbcontext context)
        {
            _db = context;
        }

        public async Task SaveChangesAsync()
        {
            await _db.SaveChangesAsync();
        }
        public async Task<OriginProduct> CreateOriginAsync(OriginProduct model)
        {
         
            _db.origin_product.Add(model);
            await SaveChangesAsync();
            return model;
        }


        public async Task<OriginProduct> DetailsOriginAsync(int originId)
        {
            var origin = await _db.origin_product.FindAsync(originId);

            if (origin != null)
            {
                
                return origin;
            }

            return null;
        }

        public async Task<List<OriginProduct>> GetListAsync(int pageNumber, int pageSize)
        {
            var origin = await _db.origin_product.AsNoTracking()
                .Skip((pageNumber - 1) * pageSize)
                .Take(pageSize).ToListAsync();

            if (origin != null)
            {
                return origin;
            }

            return null;
        }


        public async Task<OriginProduct> UpdateOriginAsync(OriginProduct model)
        {
            var origin = await _db.origin_product.FindAsync(model.Id);
           

            if(origin != null)
            {
                origin.country = model.country;
                origin.province = model.province;
                origin.district = model.district;
                await SaveChangesAsync();
                return origin;
            }

            return null;
        }
    }
}

