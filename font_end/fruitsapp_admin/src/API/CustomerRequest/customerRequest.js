import axiosInstance from "API/configAxiosRequest";

const End_Point_Customer = {
  
    Create: "/Customer/create-order-infor",
    GetAllCustomer: "/Customer/get-list-order", 
}

const CustomerRequest = {
    create: async(formData)=>{
        const response = await axiosInstance.post(End_Point_Customer.Create,{formData} );
        return response;
    },
    get_list: async(pageNumber, pageSize)=>{
        const response = await axiosInstance.get(End_Point_Customer.GetAllOrder,{
            params: {
            pageNumber: pageNumber,
            pageSize: pageSize
          }});
        return response;
    },
}

export default CustomerRequest;