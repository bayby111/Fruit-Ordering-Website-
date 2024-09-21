using System;
using fruitsapp_backend.Models;

namespace fruitsapp_backend.Service.Interfaces
{
	public interface IPrice_ProductService
	{
        public Task<PriceProduct> CreatePriceAsync(PriceProduct model);
        public Task<List<PriceProduct>> GetListAsync(int pageNumber, int pageSize);
        public Task<PriceProduct> UpdatePriceAsync(PriceProduct model);
        public Task<PriceProduct> DetailsPriceAsync(int priceId);
        public Task<bool> DeletePriceAsync(int priceId, bool isDelete);
    }
}

