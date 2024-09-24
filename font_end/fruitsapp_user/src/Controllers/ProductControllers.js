
import ProductRequest from "API/ProductRequest/productRequest";
import ErrorHandler from "Utils/errorHandler";



const ProductController = {
    get_list: async (pageNumber, pageSize) => {
        try {
            const response = await ProductRequest.get_list(pageNumber, pageSize);
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
            const response = await ProductRequest.create(formData);
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

export default ProductController;