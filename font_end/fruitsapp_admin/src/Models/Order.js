class Order {
    constructor(id, customer_id, invoice_code, total_quantity_product, total_payment, payment_method, status_order, notes, shipping_fee, cancel_reason, create_at, update_at) {
        this.id = id;
        this.customer_id = customer_id;
        this.invoice_code = invoice_code;
        this.total_quantity_product = total_quantity_product;
        this.total_payment = total_payment;
        this.payment_method = payment_method;
        this.status_order = status_order;
        this.notes = notes;
        this.shipping_fee = shipping_fee;
        this.cancel_reason = cancel_reason;
        this.create_at = create_at;
        this.update_at = update_at;
    }

    // Phương thức để tính tổng tiền sau khi thêm phí vận chuyển
    calculateTotalWithShipping() {
        return this.total_payment + this.shipping_fee;
    }

    // Phương thức để hiển thị thông tin đơn hàng
    getOrderDetails() {
        return `
        Order ID: ${this.id}
        Invoice Code: ${this.invoice_code}
        Customer ID: ${this.customer_id}
        Total Products: ${this.total_quantity_product}
        Total Payment: $${this.total_payment}
        Payment Method: ${this.payment_method}
        Status: ${this.status_order}
        Notes: ${this.notes ? this.notes : 'No notes'}
        Shipping Fee: $${this.shipping_fee}
        Cancel Reason: ${this.cancel_reason ? this.cancel_reason : 'No cancellation'}
        Created At: ${this.create_at}
        Updated At: ${this.update_at}
        `;
    }

    // Phương thức để kiểm tra xem đơn hàng có bị hủy không
    isCancelled() {
        return this.status_order === 'cancelled';
    }
}

export default Order;
