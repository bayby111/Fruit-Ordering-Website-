import React from 'react';

const ProductSection = ()=> {
  return (
    <div className="product-section py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Sản phẩm nổi bật</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sản phẩm 1 */}
          <div className="bg-white p-4 shadow-lg">
            <img src="product1.jpg" alt="Product 1" className="w-full h-64 object-cover mb-4" />
            <h3 className="text-2xl font-semibold">Xoài Cát Hòa Lộc</h3>
            <p className="text-xl text-green-600">200,000đ/kg</p>
            <p className="text-sm text-red-500">Ưu đãi: Giảm 10% khi mua 2kg trở lên</p>
          </div>
          {/* Sản phẩm 2 */}
          <div className="bg-white p-4 shadow-lg">
            <img src="product2.jpg" alt="Product 2" className="w-full h-64 object-cover mb-4" />
            <h3 className="text-2xl font-semibold">Nhãn Hương Chi</h3>
            <p className="text-xl text-green-600">150,000đ/kg</p>
            <p className="text-sm text-red-500">Ưu đãi: Miễn phí vận chuyển khi mua 3kg</p>
          </div>
          {/* Sản phẩm 3 */}
          <div className="bg-white p-4 shadow-lg">
            <img src="product3.jpg" alt="Product 3" className="w-full h-64 object-cover mb-4" />
            <h3 className="text-2xl font-semibold">Chôm Chôm</h3>
            <p className="text-xl text-green-600">100,000đ/kg</p>
            <p className="text-sm text-red-500">Ưu đãi: Giảm 5% cho thành viên VIP</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSection;
