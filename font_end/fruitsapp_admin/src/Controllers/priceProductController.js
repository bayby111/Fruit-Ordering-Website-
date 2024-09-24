
import PriceProductRequest from "API/PriceProductRequest/priceProductRequest";
import ErrorHandler from "Utils/errorHandler";


const PriceProductController = {
    get_list: async () => {
        try {
            const response = await PriceProductRequest.get_list();
            const result = response.data;
            if (result.status === 'success') {
                return { success: true, price: result.price, message: result.message };
            } else {
                return { success: false, message: result.message };
            }
        } catch (error) {
            return ErrorHandler.handle(error);
        }
    },
    create: async (formData) => {
        try {
            const response = await PriceProductRequest.create(formData);
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

export default PriceProductController;