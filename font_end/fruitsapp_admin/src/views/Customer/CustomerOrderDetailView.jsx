import React from 'react';
import { useNavigate } from 'react-router-dom';

const CustomerOrderDetailView = () => {
    // Dữ liệu mẫu cho khách hàng và đơn hàng
    const customer = {
        name: 'Nguyen Van A',
        email: 'nguyenvana@example.com',
        phone: '+123456789',
        address: '123 Đường ABC, TP.HCM'
    };

    const orders = [
        { id: '001', date: '2023-09-01', status: 'Hoàn thành', total: 700000 },
        { id: '002', date: '2023-09-10', status: 'Đang xử lý', total: 500000 },
        { id: '003', date: '2023-09-15', status: 'Đã hủy', total: 300000 },
    ];

    const navigate = useNavigate();

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Thông tin chi tiết khách hàng</h1>
                
                {/* Thông tin khách hàng */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                        <p className="text-sm font-semibold text-gray-600">Tên Khách Hàng</p>
                        <p className="text-lg text-gray-800">{customer.name}</p>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-gray-600">Email</p>
                        <p className="text-lg text-gray-800">{customer.email}</p>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-gray-600">Số Điện Thoại</p>
                        <p className="text-lg text-gray-800">{customer.phone}</p>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-gray-600">Địa Chỉ</p>
                        <p className="text-lg text-gray-800">{customer.address}</p>
                    </div>
                </div>

                {/* Danh sách đơn hàng */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Danh sách đơn hàng</h2>
                <table className="min-w-full bg-white rounded-lg shadow-md">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Mã Đơn Hàng</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Ngày Đặt</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Trạng Thái</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Tổng Tiền</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Hành Động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key={order.id}>
                                <td className="px-4 py-2">{order.id}</td>
                                <td className="px-4 py-2">{order.date}</td>
                                <td className={`px-4 py-2 ${order.status === 'Hoàn thành' ? 'text-green-500' : order.status === 'Đang xử lý' ? 'text-yellow-500' : 'text-red-500'}`}>
                                    {order.status}
                                </td>
                                <td className="px-4 py-2">{order.total.toLocaleString()} đ</td>
                                <td className="px-4 py-2">
                                    <button onClick={()=>navigate('/order-details')} className="text-blue-600 hover:text-blue-800">Xem Chi Tiết</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CustomerOrderDetailView;
