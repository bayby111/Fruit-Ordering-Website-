import React, { useState } from 'react';

const ProductSearch =({ onSearch = {}, onFilter = {} })=> {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState({
    priceRange: 'all',
    rating: 'all',
    category: 'all',
    stockStatus: 'all',
  });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
    onFilter({ ...filter, [name]: value });
  };

  return (
    <div className="search-filter-container mb-8">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Tìm kiếm sản phẩm..."
        className="border rounded-md px-4 py-2 w-full"
      />
      <div className="filters mt-4">
        <select name="priceRange" value={filter.priceRange} onChange={handleFilterChange}>
          <option value="all">Tất cả giá</option>
          <option value="lowToHigh">Giá từ thấp đến cao</option>
          <option value="highToLow">Giá từ cao đến thấp</option>
        </select>
        <select name="rating" value={filter.rating} onChange={handleFilterChange}>
          <option value="all">Tất cả đánh giá</option>
          <option value="5stars">5 sao</option>
          <option value="4stars">4 sao</option>
        </select>
        <select name="category" value={filter.category} onChange={handleFilterChange}>
          <option value="all">Tất cả loại trái cây</option>
          <option value="tropical">Trái cây nhiệt đới</option>
          <option value="seasonal">Trái cây theo mùa</option>
        </select>
        <select name="stockStatus" value={filter.stockStatus} onChange={handleFilterChange}>
          <option value="all">Tất cả tình trạng</option>
          <option value="inStock">Còn hàng</option>
          <option value="outOfStock">Hết hàng</option>
        </select>
      </div>
    </div>
  );
}

export default ProductSearch;
