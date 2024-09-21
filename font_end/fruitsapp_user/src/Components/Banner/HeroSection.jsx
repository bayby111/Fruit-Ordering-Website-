import React from 'react';
import Slider from "react-slick";

const HeroSection = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    "https://cdn.pixabay.com/photo/2016/01/05/13/58/fruit-1122537_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/01/05/13/58/fruit-1122537_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/01/05/13/58/fruit-1122537_1280.jpg"
  ];

  return (
    <div className="hero bg-green-500 text-white py-12 text-center">
      <div className="container mx-auto">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index}>
              <img src={img} alt={`Slide ${index + 1}`} className="mx-auto mb-4 w-full h-96 object-cover" />
            </div>
          ))}
        </Slider>
        <h1 className="text-5xl font-bold">Chào mừng đến với Cửa Hàng Trái Cây Tươi</h1>
        <p className="text-xl mt-4">Chúng tôi cung cấp các loại trái cây ngon nhất, đảm bảo chất lượng và độ tươi.</p>
        <button className="mt-6 bg-white text-green-500 px-6 py-2 rounded-full hover:bg-green-300">
          Mua ngay
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
