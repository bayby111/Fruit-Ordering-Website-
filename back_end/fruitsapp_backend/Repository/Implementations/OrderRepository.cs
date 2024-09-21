using System;
using fruitsapp_backend.Data;
using fruitsapp_backend.Models;
using fruitsapp_backend.Repository.Interfaces;

namespace fruitsapp_backend.Repository.Implementations
{
    public class OrderRepository : IOrderRepository
    {
        private readonly AppDbcontext _db;

        //constructor
        public OrderRepository(AppDbcontext context)
        {
            _db = context;
        }
        public async Task<Order> create(Order model)
        {
            var newOrder = new Order
            {
                customer_id = model.customer_id,
                invoice_code = model.invoice_code,
                total_quantity_product = model.total_quantity_product,
                status_order = model.status_order,
                cancel_reason = model.cancel_reason,
                total_payment = model.total_payment
            };

            _db.order.Add(newOrder);

            await _db.SaveChangesAsync();

            return newOrder;

        }
    }
}

