

import CustomerRequest from "API/CustomerRequest/customerRequest";
import ErrorHandler from "Utils/errorHandler";
const CustomerController = {
    get_list: async () => {
        try {
            const response = await CustomerRequest.get_list();
            const result = response.data;
            if (result.status === 'success') {
                return { success: true, products: result.product, message: result.message };
            } else {
                return { success: false, message: result.message };
            }
        } catch (error) {
            return ErrorHandler.handle(error);
        }
    },
    create: async (formData) => {
        try {
            const response = await CustomerRequest.create(formData);
            const result = response.data;
            if (result.status === 'success') {
                return { success: true,  message: result.message };
            } else {
                return { success: false, message: result.message };
            }
        } catch (error) {
            return ErrorHandler.handle(error);
        }
    },
   
   
    
}

export default CustomerController;