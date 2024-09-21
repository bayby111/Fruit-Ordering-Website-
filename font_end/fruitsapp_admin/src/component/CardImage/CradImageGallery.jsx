import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/swiper-bundle.css';
import ImageModal from './ImageModal';

const CradImageGallery = ({ images = [] }) => {
    const [isModalOpen, setIsModalOpen] = useState(false); // Quản lý trạng thái modal
    const [selectedImage, setSelectedImage] = useState(null); // Quản lý ảnh được chọn

    // Hàm mở modal
    const openModal = (image) => {
        setSelectedImage(image); // Lưu hình ảnh được chọn
        setIsModalOpen(true); // Mở modal
    };

    // Hàm đóng modal
    const closeModal = () => {
        setIsModalOpen(false); // Đóng modal
    };

    return (
        <div className="relative">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Hình ảnh sản phẩm</h2>
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination]} 
                className="rounded-lg overflow-hidden shadow-lg"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={image}
                            alt={`Hình ảnh sản phẩm ${index + 1}`}
                            className="w-full h-80 object-cover rounded-lg transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
                            onClick={() => openModal(image)} // Mở modal khi nhấn vào ảnh
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Hiển thị modal khi nhấn vào ảnh */}
            <ImageModal isOpen={isModalOpen} onClose={closeModal} image={selectedImage} />
        </div>
    );
};

export default CradImageGallery;
