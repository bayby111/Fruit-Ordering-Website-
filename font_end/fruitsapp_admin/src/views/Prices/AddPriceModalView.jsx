import React, { useState } from 'react';
import Select from 'react-select';
import Modal from 'react-modal';

const AddPriceModalView = ({ products, onAddPrice }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [currency, setCurrency] = useState('VND');
    const [error, setError] = useState(''); // State để hiển thị lỗi

    const productOptions = products.map(product => ({
        value: product.id,
        label: product.product,
    }));

    // Hàm kiểm tra dữ liệu đầu vào
    const validateForm = () => {
        if (!selectedProduct) {
            setError('Bạn phải chọn sản phẩm');
            return false;
        }
        if (!price || isNaN(price) || price <= 0) {
            setError('Giá sản phẩm phải là một số dương');
            return false;
        }
        if (!description) {
            setError('Bạn phải nhập mô tả giá');
            return false;
        }
        return true;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            // Nếu dữ liệu hợp lệ, thêm mới giá
            onAddPrice({
                product: selectedProduct ? selectedProduct.label : null,
                price,
                description,
                currency,
            });
            setIsOpen(false); // Đóng modal sau khi gửi
            setError(''); // Xóa lỗi nếu có
        }
    };

    return (
        <>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mb-6"
                onClick={() => setIsOpen(true)}
            >
                Thêm mới giá
            </button>

            <Modal
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                className="p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto"
                overlayClassName="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center"
            >
                <h2 className="text-xl font-semibold mb-4">Thêm mới giá</h2>

                {error && <p className="text-red-500 mb-4">{error}</p>}

                <div className="my-4">
                    <Select
                        options={productOptions}
                        onChange={(selectedValue) =>{
                            setSelectedProduct(selectedValue)
                        }}
                        placeholder="Tìm kiếm sản phẩm..."
                        isSearchable={true}
                        className="w-full mb-4"
                    />
                </div>

                <input
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Giá sản phẩm"
                    className="border border-gray-300 rounded-lg w-full p-2 mb-4"
                />

                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Mô tả giá"
                    className="border border-gray-300 rounded-lg w-full p-2 mb-4"
                    rows="4" // Điều chỉnh số dòng của textarea
                />

                <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="border border-gray-300 rounded-lg w-full p-2 mb-4"
                >
                    <option value="VND">VND</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                </select>

                <button
                    onClick={handleSubmit}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full"
                >
                    Thêm mới giá
                </button>
            </Modal>
        </>
    );
};

export default AddPriceModalView;

