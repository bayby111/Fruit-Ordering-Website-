
import ProductFilters from 'Components/Product/ProductFilters';
import ProductList from 'Components/Product/ProductList';
import ProductSearch from 'Components/Product/ProductSearch';
import ProductSorting from 'Components/Product/ProductSorting';



const ProductView = ()=> {
  
  return (
    <div >
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center mb-6">Danh sách sản phẩm</h1>
        <ProductSearch/>
        <ProductSorting/>
        <ProductFilters />
        <ProductList/>
      
      </div>
    </div>
  );
}

export default ProductView;
