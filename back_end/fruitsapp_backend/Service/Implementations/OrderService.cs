using System;
using System.Collections.Generic;
using fruitsapp_backend.Models;
using fruitsapp_backend.Repository.Interfaces;
using fruitsapp_backend.Service.Interfaces;

namespace fruitsapp_backend.Service.Implementations
{
    public class OrderService : IOrderService
    {
       
        private readonly IOrderRepository _orderRepository;
        private readonly ICustomerRepository _customerRepository;
        private readonly IOrder_ProductRepository _orderProductRepository;

        //constructor
        public OrderService(
            IOrderRepository orderRepository,
            ICustomerRepository customerRepository,
            IOrder_ProductRepository orderProductRepository)
        {
          
            _orderRepository = orderRepository;
            _customerRepository = customerRepository;
            _orderProductRepository = orderProductRepository;
        }

        public async Task<Order> create(Order order)
        {
            try
            {
                if (order == null || order.Customer == null || order.OrderProduct.Count == 0)
                {
                    throw new AggregateException("Dữ liệu đầu vào không hợp lệ.");
                }

                var result_customer = await _customerRepository.create(order.Customer);

                if (result_customer == null)
                {
                    throw new AggregateException("Tạo thông tin khách hàng thất bại!.");
                }

                order.customer_id = result_customer.Id;
              
                var result_order = await _orderRepository.create(order);

                if (result_order == null)
                {
                    throw new AggregateException("Tạo thông tin đơn hàng thất bại!.");
                }

                var newListProduct = new List<OrderProduct>();

                foreach (var items in order.OrderProduct)
                {
                    var newOrderProduct = new OrderProduct
                    {
                        order_id = result_order.Id,
                        product_id = items.product_id,
                        quantity = items.quantity,
                        unit_price = items.unit_price
                    };
                    newListProduct.Add(newOrderProduct);
                }
                
                var result_listProduct = await _orderProductRepository.create(newListProduct);

                if (result_listProduct.Count <= 0)
                {
                    throw new AggregateException("Tạo danh sách thông tin sẩn phẩm cho đơn hàng thất bại!.");
                }
                //result_order.Customer = result_customer;
                //result_order.OrderProduct = result_listProduct;

                return result_order;
            }
            catch(Exception e) {

                throw new ArgumentException("Lỗi khi đặt hàng: " + e.Message, e.StackTrace);
            }
        }
    }
}

