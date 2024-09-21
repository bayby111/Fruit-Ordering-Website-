import React, { useState } from 'react';
import Search from '../../component/Search/Search';
import Pagination from '../../component/Navigation/Pagination';
import { useNavigate } from 'react-router-dom';




const OrderListView = () => {
    // Sample data for products
    const initOrders = [
        {
            id: '001',
            customerName: 'Nguyen Van A',
            orderDate: '2023-09-15',
            totalItems: 3,
            totalPrice: 1200000,
            status: 'Chưa xử lý'
        },
        {
            id: '002',
            customerName: 'Tran Thi B',
            orderDate: '2023-09-14',
            totalItems: 2,
            totalPrice: 800000,
            status: 'Đang giao'
        },
        // Thêm nhiều đơn hàng khác
    ];

    const [orders, setOrders] = useState(initOrders);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState(''); // Lọc trạng thái
    const [startDate, setStartDate] = useState(''); // Lọc theo khoảng thời gian
    const [endDate, setEndDate] = useState('');
    const [sortKey, setSortKey] = useState(''); // Sắp xếp theo
    const navigate = useNavigate();

    const [pageNumber, setPageNumber] = useState(1);
    const [pageSize, setPageSize] = useState(5);

    // Hàm lọc theo trạng thái, khoảng thời gian và tìm kiếm
    const filteredOrders = orders.filter((order) => {
        // Lọc theo từ khóa tìm kiếm (theo mã đơn hàng hoặc tên khách hàng)
        const searchText = searchTerm.toLowerCase();
        const matchesSearch = searchText === '' || order.customerName.toLowerCase().includes(searchText) || order.id.toLowerCase().includes(searchText);

        // Lọc theo trạng thái
        const matchesStatus = statusFilter === '' || order.status === statusFilter;

        // Lọc theo khoảng thời gian
        const matchesDate = (!startDate || new Date(order.orderDate) >= new Date(startDate)) &&
            (!endDate || new Date(order.orderDate) <= new Date(endDate));

        return matchesSearch && matchesStatus && matchesDate;
    });

    // Hàm sắp xếp theo các tiêu chí
    const sortedOrders = filteredOrders.sort((a, b) => {
        if (sortKey === 'totalPrice') {
            return b.totalPrice - a.totalPrice;
        }
        if (sortKey === 'totalItems') {
            return b.totalItems - a.totalItems;
        }
        if (sortKey === 'orderDate') {
            return new Date(b.orderDate) - new Date(a.orderDate);
        }
        return 0;
    });

    // Tính toán số lượng trang
    const totalPages = Math.ceil(sortedOrders.length / pageSize);

    const OrderRow = ({ propRow }) => {
        return (
            <tr className="hover:bg-gray-100 transition hover:text-blue-500 cursor-pointer hover:shadow-lg ">
                <td className="py-2 px-4">{propRow.id}</td>
                <td onClick={() => navigate('/order-details')} className="py-2 px-4">{propRow.customerName}</td>
                <td className="py-2 px-4">{propRow.orderDate}</td>
                <td className="py-2 px-4">{propRow.totalItems}</td>
                <td className="py-2 px-4">{propRow.totalPrice}</td>
                <td className="py-2 px-4">{propRow.status}</td>
                <td className="py-2 px-4">
                    <button className="text-blue-500 hover:text-blue-700 mr-2">Sửa</button>
                    <button className="text-red-500 hover:text-red-700">Huỷ</button>
                </td>
            </tr>
        );
    };

    const OrderTable = ({ propTable }) => {
        const startIndex = (pageNumber - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const paginatedOrders = propTable.slice(startIndex, endIndex);

        return (
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border-collapse">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 text-left shadow">
                            <th className="py-2 px-4">Mã Đơn Hàng</th>
                            <th className="py-2 px-4">Tên Khách Hàng</th>
                            <th className="py-2 px-4">Ngày Đặt Hàng</th>
                            <th className="py-2 px-4">Số Lượng Sản Phẩm</th>
                            <th className="py-2 px-4">Tổng Giá Trị</th>
                            <th className="py-2 px-4">Trạng Thái</th>
                            <th className="py-2 px-4">Hành Động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedOrders.map((order) => (
                            <OrderRow key={order.id} propRow={order} />
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold mb-4">Quản lý Đơn hàng của khách hàng</h1>
            <div className="flex justify-between mb-4">

                <Search
                    searchTerm={searchTerm}
                    handleSearchChange={(e) => {
                        setSearchTerm(e.target.value);
                        if (pageNumber !== 1) {
                            setPageNumber(1);
                        }
                    }}
                    placeholder='Tìm kiếm bằng mã code hoặc tên...'
                />
                <div className="flex space-x-4">
                    <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="p-2 border border-gray-300"
                    >
                        <option value="">Tất cả trạng thái</option>
                        <option value="Chưa xử lý">Chưa xử lý</option>
                        <option value="Đang giao">Đang giao</option>
                        <option value="Hoàn thành">Hoàn thành</option>
                        <option value="Đã hủy">Đã hủy</option>
                    </select>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="p-2 border border-gray-300"
                    />
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="p-2 border border-gray-300"
                    />
                    <select
                        value={sortKey}
                        onChange={(e) => setSortKey(e.target.value)}
                        className="p-2 border border-gray-300"
                    >
                        <option value="">Sắp xếp theo</option>
                        <option value="totalPrice">Tổng giá trị</option>
                        <option value="totalItems">Số lượng sản phẩm</option>
                        <option value="orderDate">Ngày đặt hàng</option>
                    </select>
                </div>
            </div>
            <OrderTable propTable={sortedOrders} />
            <Pagination
                pageSize={pageSize}
                pageNumber={pageNumber}
                handleItemsPerPageChange={(e) => {
                    setPageSize(Number(e.target.value));
                    setPageNumber(1); // Reset lại về trang đầu tiên khi thay đổi số lượng hiển thị
                }}
                setPageNumber={setPageNumber}
                totalPages={totalPages}
            />
            <div className="mt-10 space-x-6 ">
                <button
                      onClick={() => navigate('/excel-preview', { state: { orders } })}
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                >
                    Xuất Excel
                </button>
                <button
                    onClick={() => navigate('/pdf-preview', { state: { orders } })} 
                    className="bg-red-500 text-white py-2 px-4 rounded"
                >
                    Xuất PDF
                </button>
            </div>
        </div>
    );
};

export default OrderListView;


