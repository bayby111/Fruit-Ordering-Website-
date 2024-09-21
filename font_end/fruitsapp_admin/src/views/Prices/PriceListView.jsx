import React, { useState } from 'react';
import Pagination from '../../component/Navigation/Pagination';
import Search from '../../component/Search/Search';
import AddPriceModalView from './AddPriceModalView';

const PriceListView = () => {
    const initialPrices = [
        { id: 1, product: 'Xoài Cát Hòa Lộc', price: 50, currency: 'VND', date: '09/12/2024'},
        { id: 2, product: 'Chuối Laba', price: 20, currency: 'VND', date: '09/10/2024'},
        { id: 3, product: 'Thanh Long Ruột Đỏ', price: 30, currency: 'VND', date: '09/11/2024'},
        { id: 4, product: 'Sầu Riêng Ri6', price: 100, currency: 'VND', date: '09/09/2024'},
        { id: 5, product: 'Cam Sành', price: 25, currency: 'VND', date: '09/08/2024'},
    ];

    const [prices, setPrices] = useState(initialPrices);

    const [pageNumber, setPageNumber] = useState(1); // Current page
    const [pageSize, setPageSize] = useState(5); // Number of users per page
    const [searchTerm, setSearchTerm] = useState('');

    // Lọc danh sách user dựa trên searchTerm
    const searchPrice = prices.filter((p) =>
        p.product ? p.product.toLowerCase().includes(searchTerm.toLowerCase()) : false
    );

    // Tính toán số lượng trang
    const totalPages = Math.ceil(searchPrice.length / pageSize);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        if (pageNumber !== 1) {
            setPageNumber(1); // Chỉ thay đổi pageNumber khi cần thiết
        }
    };


    const PriceRow = ({ propRow }) => {
        return (
            <tr className="border-b">
                <td className="py-2 px-4 border">{propRow.id}</td>
                <td className="py-2 px-4 border">{propRow.product}</td>
                <td className="py-2 px-4 border">{propRow.price}</td>
                <td className="py-2 px-4 border">{propRow.currency}</td>
                <td className="py-2 px-4 border">{propRow.date}</td>
                <td className="py-2 px-4 border">{propRow.date}</td>
                <td className="py-2 px-4 border">
                    <button className="text-blue-500 hover:text-blue-700 mr-2">Sửa</button>
                    <button className="text-red-500 hover:text-red-700">Xóa</button>
                </td>
            </tr>
        );
    };

    const PriceTable = ({ propTable }) => {
        const startIndex = (pageNumber - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const paginatedPrices = propTable.slice(startIndex, endIndex);
        return (
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border-collapse border border-gray-200">
                    <thead>
                        <tr className="w-full bg-gray-200 text-gray-600">
                            <th className="py-2 px-4 border border-gray-300">Mã</th>
                            <th className="py-2 px-4 border border-gray-300">Tên trái cây</th>
                            <th className="py-2 px-4 border border-gray-300">Giá</th>
                            <th className="py-2 px-4 border border-gray-300">Đơn vị tiền tệ</th>
                            <th className="py-2 px-4 border border-gray-300">Ngày tạo</th>
                            <th className="py-2 px-4 border border-gray-300">Ngày cập nhật</th>
                            <th className="py-2 px-4 border border-gray-300">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedPrices.map((price) => (
                            <PriceRow key={price.id} propRow={price} />
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };
    const handleAddPrice = (newPrice) => {
         // Kiểm tra giá trị lấy được từ form
         console.log("Giá trị từ form:", newPrice); // 
        setPrices([...prices, { ...newPrice, id: prices.length + 1 }]);
    };



    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold mb-4">Quản lý Giá Bán Trái Cây</h1>
            <AddPriceModalView products={prices} onAddPrice={(p)=>handleAddPrice(p)}/>
            <div className="flex justify-between mb-4">
                <Search
                    searchTerm={searchTerm}
                    handleSearchChange={handleSearchChange}
                    placeholder='Tìm kiếm tên trái cây, sầu riêng...'
                />
                <div className="flex space-x-2">
                    <select className="border border-gray-300 rounded-lg p-2">
                        <option>Đơn vị tiền tệ: Tất cả</option>
                        <option>USD</option>
                        <option>VND</option>
                    </select>
                </div>
            </div>
            <PriceTable propTable={searchPrice} />
            <Pagination
                pageSize={pageSize}
                pageNumber={pageNumber}
                handleItemsPerPageChange={(e) => {
                    setPageSize(Number(e.target.value));
                    setPageNumber(1)// Reset lại về trang đầu tiên khi thay đổi số lượng hiển thị
                }}
                setPageNumber={setPageNumber}
                totalPages={totalPages}
            />
        </div>
    );
};

export default PriceListView;
