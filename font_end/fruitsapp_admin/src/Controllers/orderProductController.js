
import OrderProductRequest from "API/OrderProductRequest/orderProductRequest";
import ErrorHandler from "Utils/errorHandler";

const OrderController = {
    get_list: async () => {
        try {
            const response = await OrderProductRequest.get_list();
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
            const response = await OrderProductRequest.create(formData);
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

export default OrderController;