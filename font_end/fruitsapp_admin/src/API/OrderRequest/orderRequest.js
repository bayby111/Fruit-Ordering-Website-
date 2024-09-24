import axiosInstance from "API/configAxiosRequest";

const End_Point_Order = {
  
    Create: "/Order/create-order-infor",
    GetAllOrder: "/Order/get-list-order", 
}

const OrderRequest = {
    create: async(formData)=>{
        const response = await axiosInstance.post(End_Point_Order.Create,{formData} );
        return response;
    },
    get_list: async(pageNumber, pageSize)=>{
        const response = await axiosInstance.get(End_Point_Order.GetAllOrder,{
            params: {
            pageNumber: pageNumber,
            pageSize: pageSize
          }});
        return response;
    },
}

export default OrderRequest;