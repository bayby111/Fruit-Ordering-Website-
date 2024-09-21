using System;
using fruitsapp_backend.Models;

namespace fruitsapp_backend.Service.Interfaces
{
	public interface IOrigin_ProductService
	{
        public Task<OriginProduct> CreateOriginAsync(OriginProduct model);
        public Task<List<OriginProduct>> GetListAsync(int pageNumber, int pageSize);
        public Task<OriginProduct> UpdateOriginAsync(OriginProduct model);
        public Task<OriginProduct> DetailsOriginAsync(int originId);
    }
}

