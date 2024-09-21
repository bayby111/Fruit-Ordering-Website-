using System;
using fruitsapp_backend.Models;

namespace fruitsapp_backend.Repository.Interfaces
{
	public interface IOrderRepository
	{
		public Task<Order> create(Order model);
	}
}

