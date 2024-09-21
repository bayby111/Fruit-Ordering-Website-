import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import LocationSelector from './LocationSelector';

const AddProductView = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        quantity: 0,
        origin_id: '',
        image: "", // Sẽ lưu file hình ảnh chính
        listimage: [] // Lưu danh sách các hình ảnh khác
    });

    const [errors, setErrors] = useState({
        title: '',
        description: '',
        quantity: '',
        origin_id: '',
        image: '',
        listimage: ''
    });


    // Hàm để cập nhật dữ liệu của form
    const handleChange = (key, value) => {
        setFormData({ ...formData, [key]: value });
    };


    // Hàm để gửi dữ liệu khi nhấn Submit
    const handleSubmit = () => {

        if(validateForm()){
            console.log('Submit data:', formData);
        }
    
        // Thực hiện API call hoặc xử lý dữ liệu ở đây
    };

    const validateForm = () => {
        let newErrors = {};
        let isValid = true;
        
        // Kiểm tra tên sản phẩm
        if (!formData.title.trim()) {
            newErrors.title = 'Tên sản phẩm không được để trống';
            isValid = false;
        }
    
        // Kiểm tra mô tả sản phẩm
        if (!formData.description.trim()) {
            newErrors.description = 'Mô tả sản phẩm không được để trống';
            isValid = false;
        }
    
        // Kiểm tra số lượng sản phẩm
        if (formData.quantity <= 0) {
            newErrors.quantity = 'Số lượng sản phẩm phải lớn hơn 0';
            isValid = false;
        }
    
        // Kiểm tra nguồn gốc sản phẩm
        if (!formData.origin_id.trim()) {
            newErrors.origin_id = 'Nguồn gốc sản phẩm không được để trống';
            isValid = false;
        }
    
        // Kiểm tra ảnh đại diện
        if (!formData.image) {
            newErrors.image = 'Ảnh đại diện không được để trống';
            isValid = false;
        }
    
        // Kiểm tra danh sách ảnh
        if (formData.listimage.length === 0) {
            newErrors.listimage = 'Danh sách hình ảnh không được để trống';
            isValid = false;
        }
    
        setErrors(newErrors);
        return isValid;
    };
    



    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-2xl font-bold text-gray-700 mb-6 text-center">Thêm mới sẩn phẩm trái cây</h1>

                <div className="grid grid-cols-2 gap-6">
                    {/* input hình ảnh */}
                    <div>
                        <h3 className="text-center mb-2 font-medium">Ảnh Đại diện</h3>
                        <div className="border-2 border-dashed border-green-500 p-2 h-64 flex items-center justify-center relative">
                            {!formData.image && (
                                <p className="absolute text-gray-500">Click chọn ảnh để tải lên!</p>
                            )}
                            {formData.image && (
                                <img
                                    src={formData.image}
                                    alt="Original"
                                    className="w-full h-full object-contain"
                                />
                            )}
                            <input
                                type="file"
                                className="absolute w-full h-full opacity-0 cursor-pointer"
                                onChange={(e) => {
                                    const selectedFile = e.target.files[0];
                                    if (selectedFile) {
                                        const imageUrl = URL.createObjectURL(selectedFile); // Tạo URL blob
                                        setFormData({
                                            ...formData,
                                            image: imageUrl // Thêm URL blob vào danh sách hình ảnh
                                        });
                                    }
                                }}
                            />
                              
                        </div>
                        {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        {/* Tên sản phẩm */}
                        <div>
                            <label className="block text-lg font-medium text-gray-600 mb-2">Tên Sản Phẩm</label>
                            <input
                                type="text"
                                value={formData.title}
                                onChange={(e) => handleChange('title', e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Nhập tên của sẩn phẩm..."
                            />
                            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
                        </div>

                        {/* Số lượng */}
                        <div>
                            <label className="block text-lg font-medium text-gray-600 mb-2">Số lượng sản phẩm</label>
                            <input
                                type="number"
                                min="0"
                                value={formData.quantity}
                                onChange={(e) => handleChange('quantity', parseInt(e.target.value))}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Nhập số lượng của sẩn phẩm"
                            />
                            {errors.quantity && <p className="text-red-500 text-sm mt-1">{errors.quantity}</p>}
                        </div>
                    </div>


                    {/* Mô tả sản phẩm */}
                    <div className="col-span-2">
                        <label className="block text-lg font-medium text-gray-600 mb-2">Mô tả sẩn phẩm</label>
                        <ReactQuill
                            value={formData.description}
                            onChange={(value) => handleChange('description', value)}
                            className="bg-white"
                            theme="snow" // Giao diện chuẩn của quill
                            placeholder="Nhập mô tả sản phẩm..."
                        />
                        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
                    </div>



                    {/* Nguồn gốc */}
                    <div className="col-span-1">
                        <label className="block text-lg font-medium text-gray-600 mb-2">Nguồn gốc sẩn phẩm</label>
                        <LocationSelector onLocationChange={()=>{}} />
                    </div>


                    {/* Hiển thị danh sách hình ảnh */}
                    <div className="col-span-2">
                        <label className="block text-lg font-medium text-gray-600 mb-2">Danh sách hình ảnh</label>
                        {/* input hình ảnh */}
                        <input type="file" className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            onChange={(e) => {
                                const selectedFile = e.target.files[0];
                                if (selectedFile) {
                                    const imageUrl = URL.createObjectURL(selectedFile); // Tạo URL blob
                                    setFormData({
                                        ...formData,
                                        listimage: [...formData.listimage, imageUrl] // Thêm URL blob vào danh sách hình ảnh
                                    });
                                }
                            }} />
                            {errors.listimage && <p className="text-red-500 text-sm mt-1">{errors.listimage}</p>}
                        {/* Hiển thị danh sách hình đã dc chọn */}
                        <div className="grid grid-cols-4 gap-4 mt-6">
                            {formData.listimage.map((image, index) => (
                                <div key={index} className="relative">
                                    <img src={image} alt="product" className="w-full h-32 object-cover rounded-lg" />
                                    <button
                                        onClick={() => {
                                            // xoá hình ảnh từ danh sách
                                            setFormData({
                                                ...formData,
                                                listimage: formData.listimage.filter((img) => img !== image)
                                            });
                                        }}
                                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                                    >
                                        X
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Nút submit */}
                <div className="flex justify-center mt-8">
                    <button
                        className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition transform duration-300 ease-in-out hover:scale-105"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddProductView;

