import React from 'react';

const ProductFilters =()=> {
  return (
    <div className="flex justify-center mb-8 ">
      <button className="mx-2 bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300">Tất cả sản phẩm</button>
      <button className="mx-2 bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300">Trái cây nhiệt đới</button>
      <button className="mx-2 bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300">Trái cây theo mùa</button>
      <button className="mx-2 bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300">Trái cây nhập khẩu</button>
      <button className="mx-2 bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300">Trái cây hữu cơ</button>
    </div>
  );
}

export default ProductFilters;
