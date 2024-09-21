using System;
using fruitsapp_backend.Data;
using fruitsapp_backend.Models;
using fruitsapp_backend.Repository.Interfaces;

namespace fruitsapp_backend.Repository.Implementations
{
    public class CustomerRepository : ICustomerRepository
    {
        private readonly AppDbcontext _db;

        //constructor
        public CustomerRepository(AppDbcontext context)
        {
            _db = context;
        }
        public async Task<Customer> create(Customer model)
        {
            var result =  _db.customer.Add(model);

            await _db.SaveChangesAsync();

            if (result.Entity != null)
            {
                return result.Entity;
            }

            return null;
        }
    }
}

