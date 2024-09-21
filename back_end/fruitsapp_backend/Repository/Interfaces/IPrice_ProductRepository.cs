using System;
using fruitsapp_backend.Models;

namespace fruitsapp_backend.Repository.Interfaces
{
	public interface IPrice_ProductRepository
    {
        Task<PriceProduct> CreatePriceAsync(PriceProduct model);
        Task<List<PriceProduct>> GetListAsync(int pageNumber, int pageSize);
        Task<PriceProduct> UpdatePriceAsync(PriceProduct model);
        Task<PriceProduct> DetailsPriceAsync(int priceId);
        Task<bool> DeletePriceAsync(int priceId, bool isDelete);
        Task SaveChangesAsync();

    }
}

