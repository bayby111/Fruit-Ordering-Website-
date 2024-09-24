import React, { useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ProductController from 'Controllers/productController';
import Swal from 'sweetalert2';
import LocationSelector from 'component/Products/LocationSelector';

const initProduct = {
    title: '',
    description: '',
    quantity: 0 || '',
    image: "", // Sẽ lưu file hình ảnh chính
    listimage: [] ,
    origin: {
        province: "",
        district: "",
    }
}
const AddProductView = () => {

    const [product, setProduct] = useState(initProduct);
    const [errors, setErrors] = useState(initProduct);
    const quillRef = useRef(null);  // Tạo ref cho ReactQuill


    // Hàm để cập nhật dữ liệu của form
    const handleChange = (key, value) => {
        setProduct({ ...product, [key]: value });
    };

    const handleChangeOrigin = (newOrigin) => {
        setProduct({ ...product, origin: newOrigin  });
    }

    // Hàm để gửi dữ liệu khi nhấn Submit
    const handleSubmit = async () => {
        if (validateForm()) {
            
         console.log(product);
            const formData = new FormData();

            // Thêm các trường đơn giản vào formData
            formData.append("title", product.title);
            formData.append("description", product.description);
            formData.append("quantity", product.quantity);

            // Thêm ảnh đại diện vào formData (file gốc, không phải blob URL)
            formData.append("image", product.image);

            // Thêm danh sách hình ảnh vào formData
            product.listimage.forEach((img) => {
                formData.append(`listImage`, img);
            });

            // Thêm thông tin nguồn gốc vào formData
            formData.append("origin[province]", product.origin.province);
            formData.append("origin[district]", product.origin.district);

            // Log toàn bộ dữ liệu trong FormDat

            const result = await ProductController.create(formData);
            if (result.success) {
                Swal.fire({
                    title: 'Success!',
                    text: result.message,
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: result.message,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });

            }
        }
        // Thực hiện API call hoặc xử lý dữ liệu ở đây
    };

    const validateForm = () => {
        let newErrors = {};
        let isValid = true;

        // Kiểm tra tên sản phẩm
        if (!product.title.trim()) {
            newErrors.title = 'Tên sản phẩm không được để trống';
            isValid = false;
        }

        // Kiểm tra mô tả sản phẩm
        if (!product.description.trim()) {
            newErrors.description = 'Mô tả sản phẩm không được để trống';
            isValid = false;
        }

        // Kiểm tra số lượng sản phẩm
        if (product.quantity <= 0) {
            newErrors.quantity = 'Số lượng sản phẩm phải lớn hơn 0';
            isValid = false;
        }
        // Kiểm tra ảnh đại diện
        if (!product.image) {
            newErrors.image = 'Ảnh đại diện không được để trống';
            isValid = false;
        }

        // Kiểm tra danh sách ảnh
        if (product.listimage.length === 0) {
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
                            {!product.image && (
                                <p className="absolute text-gray-500">Click chọn ảnh để tải lên!</p>
                            )}
                            {product.image && (
                                <img
                                    src={product.image}
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
                                        // const imageUrl = URL.createObjectURL(selectedFile); // Tạo URL blob
                                        setProduct({
                                            ...product,
                                            image: selectedFile // Thêm URL gốc
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
                                value={product.title}
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
                                value={product.quantity}
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
                            ref={quillRef}
                            value={product.description}
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
                        <LocationSelector onLocationChange={handleChangeOrigin} />
                    </div>

                    {/* Hiển thị danh sách hình ảnh */}
                    <div className="col-span-2">
                        <label className="block text-lg font-medium text-gray-600 mb-2">Danh sách hình ảnh</label>
                        {/* input hình ảnh */}
                        <input type="file" className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                multiple  
                                onChange={(e) => {
                                const selectedFile = e.target.files[0];
                                if (selectedFile) {
                                    setProduct({
                                        ...product,
                                        listimage: [...product.listimage, selectedFile] // Thêm URL blob vào danh sách hình ảnh
                                    });
                                }
                            }} />
                        {errors.listimage && <p className="text-red-500 text-sm mt-1">{errors.listimage}</p>}
                        {/* Hiển thị danh sách hình đã dc chọn */}
                        <div className="grid grid-cols-4 gap-4 mt-6">
                            {product.listimage.map((image, index) => (
                                <div key={index} className="relative">
                                    <img src={image} alt="product" className="w-full h-32 object-cover rounded-lg" />
                                    <button
                                        onClick={() => {
                                            // xoá hình ảnh từ danh sách
                                            setProduct({
                                                ...product,
                                                listimage: product.listimage.filter((img) => img !== image)
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

