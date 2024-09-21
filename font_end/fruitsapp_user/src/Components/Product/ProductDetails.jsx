import React from 'react';

const ProductDetails =({ product = [], onBack = {} })=> {
  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <button onClick={onBack} className="text-green-500 hover:underline mb-4">
        Quay lại
      </button>
      <img src={product.image} alt={product.name} className="w-full h-96 object-cover mb-4" />
      <h3 className="text-3xl font-bold">{product.name}</h3>
      <p className="text-2xl text-green-600">{product.price}</p>
      <p className="text-lg mb-4">{product.description}</p>
      <div className="mb-4">
        <p className="text-md">Nguồn gốc: Hữu cơ, không hóa chất</p>
        <p className="text-md">Cách bảo quản: Bảo quản trong tủ lạnh ở nhiệt độ dưới 4°C</p>
        <p className="text-md">Lợi ích: Giàu vitamin, tốt cho sức khỏe tim mạch</p>
      </div>
      <div className="flex items-center mb-4">
        <input type="number" min="1" defaultValue="1" className="w-16 p-2 border rounded-lg mr-4" />
        <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-400">
          Thêm vào giỏ hàng
        </button>
      </div>
      <div className="mt-4">
        <h4 className="text-xl font-semibold">Đánh giá của khách hàng</h4>
        <p className="mt-2">"Sản phẩm rất tươi ngon, giao hàng nhanh!" - Khách hàng A</p>
        <p className="mt-2">"Chất lượng trái cây tuyệt vời, mình sẽ quay lại mua!" - Khách hàng B</p>
      </div>
    </div>
  );
}

export default ProductDetails;
