

import React, { useState } from 'react';
import Search from '../../component/Search/Search';
import Pagination from '../../component/Navigation/Pagination';
import { useNavigate } from 'react-router-dom';

const ProductListView = () => {
    // Sample data for products
    const sampleProducts = [
        {
            id: 1,
            title: "Mangoes",
            image: "https://upload.wikimedia.org/wikipedia/commons/9/90/Hapus_Mango.jpg",
            description: "Fresh mangoes from Australia",
            quantity: 100,
            status: "còn hàng",
            create_at: "2023-08-01T12:00:00",
            update_at: "2023-09-01T12:00:00"
        },
        {
            id: 2,
            title: "Apples",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg",
            description: "Crisp and juicy apples from New Zealand",
            quantity: 150,
            status: "hết hàng",
            create_at: "2023-08-10T12:00:00",
            update_at: "2023-09-05T12:00:00"
        },
        {
            id: 3,
            title: "Bananas",
            image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg",
            description: "Sweet bananas from Thailand",
            quantity: 200,
            status: "còn hàng",
            create_at: "2023-07-15T12:00:00",
            update_at: "2023-08-30T12:00:00"
        }
    ];

    const [products, setProducts] = useState(sampleProducts);
    const navigate = useNavigate();


    const [pageNumber, setPageNumber] = useState(1); // Current page
    const [pageSize, setPageSize] = useState(5); // Number of users per page
    const [searchTerm, setSearchTerm] = useState('');
    const [quantityFilter, setQuantityFilter] = useState('');
    const [statusFilter, setStatusFilter] = useState('');

    // Lọc danh sách user dựa trên searchTerm
    // Lọc danh sách sản phẩm dựa trên searchTerm, quantityFilter và statusFilter
    const filteredProducts = products.filter((product) => {
        // Lọc theo trạng thái sản phẩm
        if (statusFilter === "available" && product.status.toLowerCase() !== "Còn hàng") {
            return false;
        }
        if (statusFilter === "unavailable" && product.status !== "Hết hàng") {
            return false;
        }

        // Lọc theo số lượng sản phẩm
        if (quantityFilter === "low" && product.quantity > 10) {
            return false;
        }
        if (quantityFilter === "out" && product.quantity !== 0) {
            return false;
        }
        if (quantityFilter === "in" && product.quantity === 0) {
            return false;
        }

        // Lọc theo từ khóa tìm kiếm
        if (searchTerm && !product.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return false;
        }

        return true;
    });



    // Tính toán số lượng trang
    const totalPages = Math.ceil(filteredProducts.length / pageSize);



    const ProductRow = ({ propRow }) => {
        return (
            <tr className="hover:bg-gray-100 transition hover:text-blue-500 cursor-pointer hover:shadow-lg ">
                
                <td className="py-2 px-4">{propRow.id}</td>
                <td onClick={()=>navigate('/product-details-view')} className="py-2 px-4 hover:scale-150">
                    <img
                        src={propRow.image}
                        alt={propRow.title}
                        className="h-16 w-16 object-cover rounded"
                    />
                </td>
                <td onClick={()=>navigate('/product-details-view')} className="py-2 px-4">{propRow.title}</td>
                <td className="py-2 px-4">{propRow.quantity}</td>
                <td className="py-2 px-4">{propRow.status}</td>
                <td className="py-2 px-4">{propRow.create_at}</td>
                <td className="py-2 px-4">{propRow.update_at}</td>
                <td className="py-2 px-4">
                    <button className="text-blue-500 hover:text-blue-700 mr-2">Sửa</button>
                    <button className="text-red-500 hover:text-red-700">Xóa</button>
                </td>
            </tr>
        );
    };
    

    const ProductTable = ({ propTable }) => {
        const startIndex = (pageNumber - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const paginatedProducts = propTable.slice(startIndex, endIndex);
        
        return (
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border-collapse">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 text-left shadow">
                            <th className="py-2 px-4">Mã</th>
                            <th className="py-2 px-4">Hình ảnh</th>
                            <th className="py-2 px-4">Tên trái cây</th>
                            <th className="py-2 px-4">Số lượng</th>
                            <th className="py-2 px-4">Trạng thái</th>
                            <th className="py-2 px-4">Ngày tạo</th>
                            <th className="py-2 px-4">Ngày cập nhật</th>
                            <th className="py-2 px-4">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedProducts.map((product) => (
                            <ProductRow key={product.id} propRow={product} />
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };
    


    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold mb-4">Quản lý Sản Phẩm Trái Cây</h1>
            <button
                onClick={() => navigate('/add-product')}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-60 mb-6"
            >
                Thêm mới sẩn phẩm
            </button>

            <div className="flex justify-between mb-4">
                <Search
                    searchTerm={searchTerm}
                    handleSearchChange={(e) => {
                        setSearchTerm(e.target.value);
                        if (pageNumber !== 1) {
                            setPageNumber(1); // Chỉ thay đổi pageNumber khi cần thiết
                        }
                    }}
                    placeholder='Tìm kiếm tên trái cây, sầu riêng...'
                />
                <di className="flex space-x-2">
                    {/* Bộ lọc theo Số lượng trong kho */}
                    <select
                        className="border border-gray-300 rounded-lg p-2"
                        onChange={(e) => {
                            setQuantityFilter(e.target.value);
                            if (pageNumber !== 1) setPageNumber(1); // Chuyển về trang đầu nếu thay đổi bộ lọc
                        }}
                    >
                        <option value="">Số lượng trong kho: Tất cả</option>
                        <option value="low">Sắp hết hàng</option>
                        <option value="out">Hết hàng</option>
                        <option value="in">Còn hàng</option>
                    </select>

                    {/* Bộ lọc theo Trạng thái sản phẩm */}
                    <select
                        className="border border-gray-300 rounded-lg p-2"
                        onChange={(e) => {
                            setStatusFilter(e.target.value);
                            if (pageNumber !== 1) setPageNumber(1); // Chuyển về trang đầu nếu thay đổi bộ lọc
                        }}
                    >
                        <option value="">Trạng thái sản phẩm: Tất cả</option>
                        <option value="available">Còn hàng</option>
                        <option value="unavailable">Hết hàng</option>
                    </select>
                </di>
            </div>
            <ProductTable propTable={filteredProducts} />
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

export default ProductListView;
