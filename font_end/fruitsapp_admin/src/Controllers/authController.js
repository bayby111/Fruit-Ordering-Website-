
import AuthRequest from "API/AuthRequest/authRequest";
import User from "Models/User";
import ErrorHandler from "Utils/errorHandler";


const AuthController = {
    login: async (login_infor) => {
        try {
            const response = await AuthRequest.login(login_infor);
            const result = response.data;
            if (result.status === 'success') {
                return { success: true, token: result.token, message: result.message };
            } else {
                return { success: false, message: result.message };
            }
        } catch (error) {
            return ErrorHandler.handle(error);
        }
    },
    register: async (formData) => {
        try {
            const response = await AuthRequest.register(formData);
            const result = response.data;
            if (result.status === 'success') {
                return { success: true, data: result.data, message: result.message };
            } else {
                return { success: false, message: result.message };
            }
        } catch (error) {
            return ErrorHandler.handle(error);
        }
    },
    getProfileUser: async () => {
        try {
            const response = await AuthRequest.get_user();
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
                return { success: true, user: userData, message: result.message };
            } else {
                return { success: false, message: result.message };
            }
        } catch (error) {
            return ErrorHandler.handle(error);
        }
    },
    logout: async(token)=>{
        try{
            const response = await AuthRequest.logout(token);
            const result = response.data;
            if(result.status === 'success'){
                return { success: true, message: result.message };
            }else{
                return { success: false, message: result.message };
            }

        }catch(error){
            return ErrorHandler.handle(error);
        }
    },
    update: async(formData)=>{
        try{
            const response = await AuthRequest.update(formData);
            const result = response.data;
            if(result.status === 'success'){
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
                return { success: true, user: userData ,message: result.message };
            }else{
                return { success: false, message: result.message };
            }

        }catch(error){
            return ErrorHandler.handle(error);
        }
    },
    ChangePass: async(formData)=>{
        try{
            const response = await AuthRequest.change_password(formData);
            const result = response.data;
            if(result.status === 'success'){
                
                return { success: true ,message: result.message };
            }else{
                return { success: false, message: result.message };
            }

        }catch(error){
            return ErrorHandler.handle(error);
        }
    }
}

export default AuthController;