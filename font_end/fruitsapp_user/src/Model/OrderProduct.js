class OrderProduct {
    constructor({ id, order_id, product_id, quantity, unit_price, total_price, create_at, update_at }) {
        this.id = id;
        this.order_id = order_id;
        this.product_id = product_id;
        this.quantity = quantity;
        this.unit_price = unit_price;
        this.total_price = total_price || this.calculateTotalPrice(); // Tính tổng giá nếu chưa có
        this.create_at = create_at;
        this.update_at = update_at;
    }

    // Phương thức để tính tổng giá
    calculateTotalPrice() {
        return this.quantity * this.unit_price;
    }

    // Phương thức để lấy thông tin chi tiết của sản phẩm trong đơn hàng
    getOrderProductDetails() {
        return `
        Order Product ID: ${this.id}
        Order ID: ${this.order_id}
        Product ID: ${this.product_id}
        Quantity: ${this.quantity}
        Unit Price: $${this.unit_price.toFixed(2)}
        Total Price: $${this.total_price.toFixed(2)}
        Created At: ${this.create_at}
        Updated At: ${this.update_at}
        `;
    }
}

export default OrderProduct;
