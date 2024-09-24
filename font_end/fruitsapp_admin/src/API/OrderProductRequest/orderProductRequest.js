import axiosInstance from "API/configAxiosRequest";

const End_Point_OrderPorduct = {
  
    Create: "/Customer/create-order-infor",
    GetAllOrderProduct: "/Customer/get-list-order", 
}

const OrderProductRequest = {
    create: async(formData)=>{
        const response = await axiosInstance.post(End_Point_OrderPorduct.Create,{formData} );
        return response;
    },
    get_list: async(pageNumber, pageSize)=>{
        const response = await axiosInstance.get(End_Point_OrderPorduct.GetAllOrderProduct,{
            params: {
            pageNumber: pageNumber,
            pageSize: pageSize
          }});
        return response;
    },
}

export default OrderProductRequest;