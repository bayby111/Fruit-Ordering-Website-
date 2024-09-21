using System;
using fruitsapp_backend.Data;
using fruitsapp_backend.Models;
using fruitsapp_backend.Repository.Interfaces;

namespace fruitsapp_backend.Repository.Implementations
{
    public class Order_ProductRepository : IOrder_ProductRepository
    {
        private readonly AppDbcontext _db;

        //constructor
        public Order_ProductRepository(AppDbcontext context)
        {
            _db = context;
        }
        public async Task<List<OrderProduct>> create(List<OrderProduct> model)
        {
            var listOrderProduct = new List<OrderProduct>();


            foreach (var items in model)
            {
                var newOrderProduct = new OrderProduct
                {
                    order_id = items.order_id,
                    product_id = items.product_id,
                    quantity = items.quantity,
                    price_id = items.price_id
                };

                _db.order_product.Add(newOrderProduct);
                listOrderProduct.Add(newOrderProduct);
            }
             
            await _db.SaveChangesAsync();

            if(listOrderProduct != null)
            {
                return listOrderProduct;
            }

            return null;
        }
    }
}

