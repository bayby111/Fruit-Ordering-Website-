import React from 'react';

const OrderDetailView = () => {
    // Dữ liệu mẫu cho đơn hàng
    const order = {
        id: '001',
        customerName: 'Nguyen Van A',
        orderDate: '2023-09-15',
        shippingAddress: '123 Đường ABC, TP.HCM',
        paymentMethod: 'Thanh toán khi nhận hàng',
        notes: 'Giao hàng vào buổi sáng',
        status: 'Đang xử lý',  // Trạng thái đơn hàng
        products: [
            { id: 'p1', name: 'Sản phẩm 1', quantity: 2, price: 500000, imageUrl: 'https://via.placeholder.com/50' },
            { id: 'p2', name: 'Sản phẩm 2', quantity: 1, price: 200000, imageUrl: 'https://via.placeholder.com/50' }
        ],
        totalProductsPrice: 1200000,  // Tổng tiền của các sản phẩm
        shippingFee: 50000,           // Phí vận chuyển
        discount: 100000              // Giảm giá (nếu có), không có thì để là 0
    };
    
    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg">
                <div className="p-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">Chi tiết đơn hàng</h1>

                    {/* Trạng thái đơn hàng */}
                    <div className="flex justify-between items-center mb-8">
                        <span className="text-xl font-semibold">Trạng thái đơn hàng:</span>
                        <span className={`px-4 py-2 rounded-full ${order.status === 'Đang xử lý' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'} font-semibold`}>
                            {order.status}
                        </span>
                    </div>

                    {/* Thông tin đơn hàng */}
                    <div className="grid grid-cols-2 gap-6 mb-8">
                        <div>
                            <p className="text-sm font-semibold text-gray-500">Mã Đơn Hàng</p>
                            <p className="text-lg text-gray-900 font-medium">{order.id}</p>
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-gray-500">Tên Khách Hàng</p>
                            <p className="text-lg text-gray-900 font-medium">{order.customerName}</p>
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-gray-500">Ngày Đặt Hàng</p>
                            <p className="text-lg text-gray-900 font-medium">{order.orderDate}</p>
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-gray-500">Địa Chỉ Giao Hàng</p>
                            <p className="text-lg text-gray-900 font-medium">{order.shippingAddress}</p>
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-gray-500">Phương Thức Thanh Toán</p>
                            <p className="text-lg text-gray-900 font-medium">{order.paymentMethod}</p>
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-gray-500">Ghi Chú</p>
                            <p className="text-lg text-gray-900 font-medium">{order.notes}</p>
                        </div>

                        {/* Phí vận chuyển */}
                        <div>
                            <p className="text-sm font-semibold text-gray-500">Phí Vận Chuyển</p>
                            <p className="text-lg text-gray-900 font-medium">{order.shippingFee.toLocaleString()} đ</p>
                        </div>

                        {/* Áp dụng giảm giá */}
                        <div>
                            <p className="text-sm font-semibold text-gray-500">Giảm Giá</p>
                            <p className="text-lg text-gray-900 font-medium">
                                {order.discount ? `${order.discount.toLocaleString()} đ` : 'Không có giảm giá'}
                            </p>
                        </div>
                    </div>

                    {/* Danh sách sản phẩm */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Sản phẩm</h2>
                        <ul className="space-y-6">
                            {order.products.map(product => (
                                <li key={product.id} className="flex items-center justify-between bg-gray-50 p-6 rounded-lg shadow-md">
                                    <div className="flex items-center space-x-6">
                                        <img src={product.imageUrl} alt={product.name} className="w-16 h-16 object-cover rounded-md" />
                                        <div>
                                            <p className="text-lg font-medium text-gray-700">{product.name}</p>
                                            <p className="text-sm text-gray-500">Số lượng: {product.quantity}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-lg font-semibold text-gray-700">{product.price.toLocaleString()} đ</p>
                                        <p className="text-sm text-gray-500">{product.quantity} x {product.price.toLocaleString()} đ</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tổng tiền, phí vận chuyển, và giảm giá */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Tổng kết đơn hàng</h2>
                        <div className="space-y-4 text-lg">
                            <div className="flex justify-between">
                                <span>Tổng tiền sản phẩm:</span>
                                <span>{order.totalProductsPrice.toLocaleString()} đ</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Phí vận chuyển:</span>
                                <span>{order.shippingFee.toLocaleString()} đ</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Giảm giá:</span>
                                <span>{order.discount ? `-${order.discount.toLocaleString()} đ` : '0 đ'}</span>
                            </div>
                            <div className="flex justify-between font-bold text-xl">
                                <span>Tổng thanh toán:</span>
                                <span>{(order.totalProductsPrice + order.shippingFee - order.discount).toLocaleString()} đ</span>
                            </div>
                        </div>
                    </div>

                    {/* Nút quay lại */}
                    <div className="text-right">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-md font-semibold">
                            Quay lại
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default OrderDetailView;
