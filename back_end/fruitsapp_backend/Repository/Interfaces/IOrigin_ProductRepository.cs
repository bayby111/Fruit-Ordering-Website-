using System;
using fruitsapp_backend.Models;

namespace fruitsapp_backend.Repository.Interfaces
{
	public interface IOrigin_ProductRepository
	{
		Task<OriginProduct> CreateOriginAsync(OriginProduct model);
        Task<List<OriginProduct>> GetListAsync(int pageNumber, int pageSize);
        Task<OriginProduct> UpdateOriginAsync(OriginProduct model);
        Task<OriginProduct> DetailsOriginAsync(int originId);
        Task SaveChangesAsync();
    }
}

