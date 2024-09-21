const ProductSorting=({ onSort = {} })=> {
    return (
      <div className=" mb-4 space-y-6">
        <select onChange={(e) => onSort(e.target.value)}>
          <option value="popularity">Phổ biến nhất</option>
          <option value="priceLowToHigh">Giá từ thấp đến cao</option>
          <option value="priceHighToLow">Giá từ cao đến thấp</option>
          <option value="rating">Đánh giá cao nhất</option>
        </select>
      </div>
    );
  }
  
  export default ProductSorting;
  