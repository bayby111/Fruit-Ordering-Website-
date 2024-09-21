
import axiosInstance from "../configAxiosRequest";



const End_Point_Auth = {
  
    Login: "/Auth/login",
    Register: "/Auth/register-user",
    GetUser: "/Auth/get-user",
    Logout: "/Auth/user-logout",
    Update:"/Auth/update-profile-auth",
    ResetPass:"/Auth/reset-password"
   
}

const AuthRequest = {
  login: async(data)=>{
    const response = await axiosInstance.post(End_Point_Auth.Login, data);
    return response;
  },
  register: async(formData)=>{
 
    const response = await axiosInstance.post(End_Point_Auth.Register, formData);
    return response;
  },
  get_user: async()=>{
    const response = await axiosInstance.get(End_Point_Auth.GetUser);
    return response;
  },
  logout: async(token)=>{
    const response = await axiosInstance.post(End_Point_Auth.Logout, token);
    return response;
  },
  update: async(formData)=>{
    const response = await axiosInstance.post(End_Point_Auth.Update, formData);
    return response;
  },
  change_password: async(formData)=>{
    const response = await axiosInstance.post(End_Point_Auth.ResetPass, formData);
    return response;
  }
}

export default AuthRequest;