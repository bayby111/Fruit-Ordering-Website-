
import RoleRequest from "../API/RoleRequest/RoleRequest";
import ErrorHandler from "../Utils/errorHandler";


const RoleController = {
    get_list: async () => {
        try {
            const response = await RoleRequest.get_list();
            const result = response.data;
            if (result.status === 'success') {
                return { success: true, role: result.role, message: result.message };
            } else {
                return { success: false, message: result.message };
            }
        } catch (error) {
            return ErrorHandler.handle(error);
        }
    },
    create: async (formData) => {
        try {
            const response = await RoleRequest.create(formData);
            const result = response.data;
            if (result.status === 'success') {
                return { success: true, role: result.role, message: result.message };
            } else {
                return { success: false, message: result.message };
            }
        } catch (error) {
            return ErrorHandler.handle(error);
        }
    },
    update: async (formData) => {
        try {
            const response = await RoleRequest.update(formData);
            const result = response.data;
            if (result.status === 'success') {
                return { success: true, role: result.role, message: result.message };
            } else {
                return { success: false, message: result.message };
            }
        } catch (error) {
            return ErrorHandler.handle(error);
        }
    },
    disable: async (id) => {
        try {
            const response = await RoleRequest.disable(id);
            const result = response.data;
            if (result.status === 'success') {
                return { success: true, message: result.message };
            } else {
                return { success: false, message: result.message };
            }
        } catch (error) {
            return ErrorHandler.handle(error);
        }
    },
    
}

export default RoleController;