import axiosInstance from "API/configAxiosRequest";

const End_Point_Price = {
  
    Create: "/Price/create-price-product",
   
   
}

const PriceProductRequest = {
    create: async(formData)=>{
        const response = await axiosInstance.post(End_Point_Price.Create,{formData} );
        return response;
    },
    get_list: async(pageNumber, pageSize)=>{
        const response = await axiosInstance.get(End_Point_Price.Create,{
            params: {
            pageNumber: pageNumber,
            pageSize: pageSize
          }});
        return response;
    },
}

export default PriceProductRequest;