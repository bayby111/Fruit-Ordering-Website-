import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as XLSX from 'xlsx';

const ExcelPreview = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { orders } = location.state || { orders: [] };

    // Hàm tải xuống Excel
    const exportToExcel = (orders) => {
        const worksheet = XLSX.utils.json_to_sheet(orders);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Orders');
        XLSX.writeFile(workbook, 'orders_preview.xlsx');
    };

    // Hàm in bảng HTML
    const printTable = () => {
        const printContent = document.getElementById('orderTable').outerHTML;
        const originalContent = document.body.innerHTML;
        document.body.innerHTML = printContent;
        window.print();
        document.body.innerHTML = originalContent;
        window.location.reload(); // Load lại trang để khôi phục lại nội dung gốc
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold mb-4">Xem trước Excel</h1>
            {/* Hiển thị dữ liệu dưới dạng bảng */}
            <table id="orderTable" className="min-w-full bg-white border-collapse">
                <thead>
                    <tr className="bg-gray-200 text-gray-600 text-left shadow">
                        <th className="py-2 px-4">Mã Đơn Hàng</th>
                        <th className="py-2 px-4">Tên Khách Hàng</th>
                        <th className="py-2 px-4">Ngày Đặt Hàng</th>
                        <th className="py-2 px-4">Số Lượng Sản Phẩm</th>
                        <th className="py-2 px-4">Tổng Giá Trị</th>
                        <th className="py-2 px-4">Trạng Thái</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id}>
                            <td className="py-2 px-4">{order.id}</td>
                            <td className="py-2 px-4">{order.customerName}</td>
                            <td className="py-2 px-4">{order.orderDate}</td>
                            <td className="py-2 px-4">{order.totalItems}</td>
                            <td className="py-2 px-4">{order.totalPrice}</td>
                            <td className="py-2 px-4">{order.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
            {/* Nút tải xuống Excel và nút in */}
            <div className="mt-6 space-x-4">
                <button
                    onClick={() => exportToExcel(orders)}
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                >
                    Tải xuống Excel
                </button>
                <button
                    onClick={printTable}
                    className="bg-green-500 text-white py-2 px-4 rounded"
                >
                    In bảng
                </button>
                {/* Nút quay lại */}
                <button
                    onClick={() => navigate(-1)}
                    className="bg-gray-500 text-white py-2 px-4 rounded"
                >
                    Quay lại
                </button>
            </div>
        </div>
    );
};

export default ExcelPreview;
