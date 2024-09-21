import React, { useState } from 'react';
import 'swiper/swiper-bundle.css';
import CradImageGallery from '../../component/CardImage/CradImageGallery';


const ProductDetailView = () => {
    // Dữ liệu sản phẩm mẫu
    const product = {
        title: 'Xoài Cát Hòa Lộc',
        price: '150,000',
        quantity: 20,
        description:
            'Xoài cát Hòa Lộc là loại xoài nổi tiếng với vị ngọt thanh, mùi thơm và thịt chắc, rất được ưa chuộng trên thị trường. Chúng tôi cam kết cung cấp sản phẩm chất lượng cao, đảm bảo vệ sinh an toàn thực phẩm.',
        origin: 'Đồng Tháp, Việt Nam',
        listimage: [
            'https://upload.wikimedia.org/wikipedia/commons/9/90/Hapus_Mango.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg',
        ],
    };
   

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                    {product.title}
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Card hiển thị hình ảnh sản phẩm */}
                    <div >
                       <CradImageGallery images={product.listimage}/>
                    </div>

                    {/* Thông tin chi tiết sản phẩm */}
                    <div className="flex flex-col space-y-4">
                        <div>
                            <h2 className="text-lg font-semibold text-gray-600">Giá cả</h2>
                            <p className="text-2xl font-bold text-green-600">{product.price} VND</p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-gray-600">Số lượng còn lại</h2>
                            <p className="text-lg">{product.quantity} sản phẩm</p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-gray-600">Nguồn gốc sản phẩm</h2>
                            <p className="text-gray-700">{product.origin}</p>
                        </div>
                    </div>
                </div>
              
                {/* Mô tả sản phẩm dài */}
                <div className="mt-10">
                    <h2 className="text-lg font-semibold text-gray-600 mb-4">Mô tả sản phẩm</h2>
                    <p className="text-gray-600 leading-relaxed">{product.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailView;
