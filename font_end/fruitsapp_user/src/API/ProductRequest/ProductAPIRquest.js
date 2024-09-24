import configAxiosRequest from "API/configAxiosRequest";

const End_Point_Product = {
  
    Create: "/Product/product-create-infor",
    GetAllProduct: "/Product/get-list-product",

}

const ProductRequest = {
    create: async(formData)=>{
        const response = await configAxiosRequest.post(End_Point_Product.Create,formData );
        return response;
    },
    get_list: async(pageNumber, pageSize)=>{
        const response = await configAxiosRequest.get(End_Point_Product.GetAllProduct,{
            params: {
            pageNumber: pageNumber,
            pageSize: pageSize
          }});
        return response;
    },
}

export default ProductRequest;