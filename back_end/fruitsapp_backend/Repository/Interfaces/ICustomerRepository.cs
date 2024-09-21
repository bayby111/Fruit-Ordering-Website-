using System;
using fruitsapp_backend.Models;

namespace fruitsapp_backend.Repository.Interfaces
{
	public interface ICustomerRepository
	{
		public Task<Customer> create(Customer model);
	}
}

