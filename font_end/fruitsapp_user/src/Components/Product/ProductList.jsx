import React from 'react';
import { useNavigate } from 'react-router-dom';

const products = [
    {
      id: 1,
      name: 'Xoài Cát Hòa Lộc',
      price: '200,000đ/kg',
      status: 'Còn hàng',
      description: 'Trái cây hữu cơ',
      rating: 4.5,
      image: 'https://cdn.pixabay.com/photo/2016/11/21/16/10/mango-1845779_1280.jpg'
    },
    {
      id: 2,
      name: 'Nho Đen Mỹ',
      price: '350,000đ/kg',
      status: 'Còn hàng',
      description: 'Nhập khẩu từ Mỹ',
      rating: 5.0,
      image: 'https://cdn.pixabay.com/photo/2017/09/26/22/23/fruits-2781229_1280.jpg'
    },
    {
      id: 3,
      name: 'Táo Fuji Nhật Bản',
      price: '300,000đ/kg',
      status: 'Còn hàng',
      description: 'Nhập khẩu từ Nhật Bản',
      rating: 4.8,
      image: 'https://cdn.pixabay.com/photo/2016/09/10/17/47/apple-1650132_1280.jpg'
    },
    {
      id: 4,
      name: 'Dưa Hấu',
      price: '80,000đ/kg',
      status: 'Còn hàng',
      description: 'Trái cây nhiệt đới',
      rating: 4.0,
      image: 'https://cdn.pixabay.com/photo/2016/01/19/17/49/watermelon-1143243_1280.jpg'
    },
    {
      id: 5,
      name: 'Cam Sành',
      price: '150,000đ/kg',
      status: 'Còn hàng',
      description: 'Trái cây hữu cơ',
      rating: 4.2,
      image: 'https://cdn.pixabay.com/photo/2017/01/20/15/06/oranges-1995056_1280.jpg'
    },
    {
      id: 6,
      name: 'Dâu Tây Đà Lạt',
      price: '400,000đ/kg',
      status: 'Còn hàng',
      description: 'Trái cây trong nước',
      rating: 4.7,
      image: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/strawberries-1238433_1280.jpg'
    },
    {
      id: 7,
      name: 'Chuối Laba Đà Lạt',
      price: '70,000đ/kg',
      status: 'Còn hàng',
      description: 'Trái cây hữu cơ',
      rating: 4.5,
      image: 'https://cdn.pixabay.com/photo/2018/08/30/12/07/bananas-3640934_1280.jpg'
    },
    {
      id: 8,
      name: 'Lê Hàn Quốc',
      price: '250,000đ/kg',
      status: 'Còn hàng',
      description: 'Nhập khẩu từ Hàn Quốc',
      rating: 4.6,
      image: 'https://cdn.pixabay.com/photo/2015/09/02/12/26/pear-918437_1280.jpg'
    },
    {
      id: 9,
      name: 'Bưởi Da Xanh',
      price: '120,000đ/kg',
      status: 'Còn hàng',
      description: 'Trái cây trong nước',
      rating: 4.3,
      image: 'https://cdn.pixabay.com/photo/2016/01/06/10/37/fruits-1127132_1280.jpg'
    },
    {
      id: 10,
      name: 'Dừa Xiêm',
      price: '40,000đ/quả',
      status: 'Còn hàng',
      description: 'Trái cây giải khát',
      rating: 4.8,
      image: 'https://cdn.pixabay.com/photo/2016/03/27/21/34/coconut-1284369_1280.jpg'
    }
  ];
  

const ProductList=({ onSelectProduct = [] })=> {
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate('/product-details')} className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-lg" />
          <h3 className="text-2xl font-semibold">{product.name}</h3>
          <p className="text-xl text-green-600 mb-2">{product.price}</p>
          <p className="text-sm text-gray-500">{product.status}</p>
          <p className="text-sm mb-4">{product.description}</p>
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.691h4.2c.969 0 1.371 1.24.588 1.81l-3.4 2.47a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.4-2.47a1 1 0 00-1.176 0l-3.4 2.47c-.784.57-1.838-.197-1.54-1.118l1.286-3.957a1 1 0 00-.364-1.118l-3.4-2.47c-.784-.57-.38-1.81.588-1.81h4.2a1 1 0 00.95-.691l1.286-3.957z" />
              </svg>
            ))}
          </div>
          <button
            className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-400"
            onClick={() => onSelectProduct(product)}
          >
            Mua ngay
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
