import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // For adding icons to navigation buttons

const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="w-full lg:sticky top-0 sm:flex flex-col items-center gap-6">
            {/* Main Image Display */}
            <div className="relative w-full max-w-lg h-80 bg-gray-100 rounded-lg shadow-lg overflow-hidden">
                <img 
                    src={images[currentIndex]} 
                    alt=''
                    className="w-full h-full object-cover transition-transform transform hover:scale-105 duration-500" 
                    style={{ objectFit: 'cover' }}
                />
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center space-x-6 mt-4">
                <button 
                    onClick={handlePrev} 
                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-sm font-semibold rounded-full transition duration-200 flex items-center">
                    <FaChevronLeft size={20} />
                </button>
                <button 
                    onClick={handleNext} 
                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-sm font-semibold rounded-full transition duration-200 flex items-center">
                    <FaChevronRight size={20} />
                </button>
            </div>

            {/* Thumbnail List */}
            <div className="flex mt-4 space-x-4 overflow-x-auto scrollbar-hide">
                {images.map((image, index) => (
                    <img 
                        key={index} 
                        src={image} 
                        alt={`Thumbnail ${index + 1}`} 
                        className={`w-16 h-16 rounded-md cursor-pointer border-2 transition-transform transform hover:scale-105 duration-300 
                        ${index === currentIndex ? 'border-green-600 shadow-lg' : 'border-gray-300'}`} 
                        onClick={() => setCurrentIndex(index)} 
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;
