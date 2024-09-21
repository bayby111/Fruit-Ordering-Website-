using System;
using fruitsapp_backend.Models;

namespace fruitsapp_backend.Repository.Interfaces
{
	public interface IOrder_ProductRepository
	{
		public Task<List<OrderProduct>> create(List<OrderProduct> model);
	}
}

