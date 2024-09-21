using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace fruitsapp_backend.Models
{
	public class Order
	{
        [Key]
        public int Id { set; get; }
        public int? customer_id { set; get; }
        public string? invoice_code { set; get; }
        public int? total_quantity_product { set; get; }
        public string? total_payment { set; get; } //Tổng giá trị đơn hàng (sau khi áp dụng giảm giá và phí vận chuyển)
        public string? payment_method { set; get; }
        public OrderStatus? status_order { set; get; }
        public string? notes { set; get; }
        public int? shipping_fee { set; get; }
        public string? cancel_reason { set; get; } // Lý do huỷ đơn hàng
        public DateTime create_at { set; get; }
        public DateTime update_at { set; get; }
        public bool isDelete { set; get; }


        public Customer? Customer { set; get; }

    }


    // Định nghĩa enum cho trạng thái của đơn hàng
    public enum OrderStatus
    {
        Pending,    // Đơn hàng đang chờ xử lý
        Processing, // Đơn hàng đang được xử lý
        Shipped,    // Đơn hàng đã được gửi đi
        Completed,  // Đơn hàng đã hoàn thành
        Canceled    // Đơn hàng đã bị hủy
    }
}

