import UserRequest from "API/UserRequest/userRequest";
import User from "Models/User";
import ErrorHandler from "Utils/errorHandler";

const UserController = {
    getAllUser: async (pageNumber, pageSize) => {
        try {
            const response = await UserRequest.getAllUser(pageNumber, pageSize);
            const result = response.data;
            if (result.status === 'success') {
                // Chuyển đổi mỗi object trong danh sách thành một instance của User
                const users = result.user.map(u => new User(
                    u.id, 
                    u.role_id, 
                    u.name, 
                    u.avatar_url, 
                    u.email, 
                    u.phone, 
                    u.create_at, 
                    u.update_at, 
                    u.disable, 
                    u.role
                ));
                return { success: true, user: users, message: result.message };
            } else {
                return { success: false, message: result.message };
            }
        } catch (error) {
            return ErrorHandler.handle(error);
        }
    },
    disableUser: async (userId, isDisable) => {
        try {
            const response = await UserRequest.disableUser(userId, isDisable);
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
    detailsUser: async (userId) => {
        try {
            const response = await UserRequest.detailsUser(userId);
            const result = response.data;
            if (result.status === 'success') {
                const userData = new User(
                    result.user.id,
                    result.user.role_id,
                    result.user.name,
                    result.user.avatar_url,
                    result.user.email,
                    result.user.phone,
                    result.user.create_at,
                    result.user.update_at,
                    result.user.disable,
                    result.user.role);
                return { success: true, user: userData,  message: result.message };
            } else {
                return { success: false, message: result.message };
            }
        } catch (error) {
            return ErrorHandler.handle(error);
        }
    },
    editUser: async (userId) => {
        try {
            const response = await UserRequest.editUser(userId);
            const result = response.data;
            if (result.status === 'success') {
                const userData = new User(
                    result.data.id,
                    result.data.role_id,
                    result.data.name,
                    result.data.avatar_url,
                    result.data.email,
                    result.data.phone,
                    result.data.create_at,
                    result.data.update_at,
                    result.data.disable,
                    result.data.role);
                return { success: true, user: userData,  message: result.message };
            } else {
                return { success: false, message: result.message };
            }
        } catch (error) {
            return ErrorHandler.handle(error);
        }
    },
   
    
    
}

export default UserController;