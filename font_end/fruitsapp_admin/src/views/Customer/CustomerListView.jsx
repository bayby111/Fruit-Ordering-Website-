

import React, { useState } from 'react';
import Search from '../../component/Search/Search';
import Pagination from '../../component/Navigation/Pagination';
import { useNavigate } from 'react-router-dom';

const CustomerListView = () => {
    // Sample data for products
    const sampleCustomers = [
        {
            id: 1,
            name: "Jane Smith",
            email: "jane.smith@example.com",
            phone: "+987654321",
            address: "456 Orchard Lane, Greenfield, USA",
            membership: "Silver",
        },
        {
            id: 2,
            name: "John Doe",
            email: "john.doe@example.com",
            phone: "+123456789",
            address: "789 Maple Street, Springfield, USA",
            membership: "Gold",
        },
        {
            id: 3,
            name: "Alice Johnson",
            email: "alice.johnson@example.com",
            phone: "+234567890",
            address: "321 Pine Avenue, Riverdale, USA",
            membership: "Platinum",
        },
        {
            id: 4,
            name: "Robert Brown",
            email: "robert.brown@example.com",
            phone: "+345678901",
            address: "123 Oak Street, Greenville, USA",
            membership: "Silver",
        },
        {
            id: 5,
            name: "Emily Davis",
            email: "emily.davis@example.com",
            phone: "+456789012",
            address: "654 Cedar Road, Belmont, USA",
            membership: "Gold",
        }
    ];



    const [customers, setCustomers] = useState(sampleCustomers);
    const navigate = useNavigate();


    const [pageNumber, setPageNumber] = useState(1); // Current page
    const [pageSize, setPageSize] = useState(5); // Number of users per page
    const [searchTerm, setSearchTerm] = useState('');

    // Lọc danh sách user dựa trên searchTerm
    // Lọc danh sách sản phẩm dựa trên searchTerm, quantityFilter và statusFilter
    const filteredCustomers = customers.filter((customer) => {


        // Lọc theo từ khóa tìm kiếm
        if (searchTerm && !customer.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return false;
        }

        return true;
    });



    // Tính toán số lượng trang
    const totalPages = Math.ceil(filteredCustomers.length / pageSize);



    const CustomerRow = ({ propRow }) => {
        return (
            <tr className="hover:bg-gray-100 transition hover:text-blue-500 cursor-pointer hover:shadow-lg ">

                <td className="py-2 px-4">{propRow.id}</td>
                <td onClick={() => navigate('/product-details-view')} className="py-2 px-4">{propRow.name}</td>
                <td className="py-2 px-4">{propRow.email}</td>
                <td className="py-2 px-4">{propRow.phone}</td>
                <td className="py-2 px-4">{propRow.address}</td>
                <td className="py-2 px-4">{propRow.membership}</td>

                <td className="py-2 px-4">
                    <button className="text-blue-500 hover:text-blue-700 mr-2">Sửa</button>
                    <button className="text-red-500 hover:text-red-700">Xóa</button>
                </td>
            </tr>
        );
    };


    const CustomerTable = ({ propTable }) => {
        const startIndex = (pageNumber - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const paginatedCustomers = propTable.slice(startIndex, endIndex);

        return (
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border-collapse">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 text-left shadow">
                            <th className="py-2 px-4">Mã</th>
                            <th className="py-2 px-4">Tên Khách hàng</th>
                            <th className="py-2 px-4">Emaill</th>
                            <th className="py-2 px-4">SĐT</th>
                            <th className="py-2 px-4">Địa chỉ</th>
                            <th className="py-2 px-4">Member Ship</th>

                            <th className="py-2 px-4">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedCustomers.map((customer) => (
                            <CustomerRow key={customer.id} propRow={customer} />
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold mb-4">Quản lý Khách hàng</h1>

            <div className="flex justify-between mb-4">
                <Search
                    searchTerm={searchTerm}
                    handleSearchChange={(e) => {
                        setSearchTerm(e.target.value);
                        if (pageNumber !== 1) {
                            setPageNumber(1); // Chỉ thay đổi pageNumber khi cần thiết
                        }
                    }}
                    placeholder='Tìm kiếm tên khách hàng, ABC...'
                />

            </div>
            <CustomerTable propTable={filteredCustomers} />
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

export default CustomerListView;
