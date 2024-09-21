import axiosInstance from "../configAxiosRequest";

const End_Point_User = {
  
    GetAllUser: "/User/get-list-user",
    DisableUser: "/User/disable-acounnt-user",
    EditeUser: "/User/update-user",
    DetailsUser: "/User/details-infor-user",
    CheckEmail: "/User/check-email-user",
   
}

const UserRequest = {
    getAllUser: async(pageNumber, pageSize)=>{
    const response = await axiosInstance.get(End_Point_User.GetAllUser, {
      params: {
        pageNumber: pageNumber,
        pageSize: pageSize
      }
    });
    return response;
  },
  disableUser: async(userId, isDisable)=>{ 
    const response = await axiosInstance.post(End_Point_User.DisableUser,{
       userId,
       isDisable
    }, {
      headers: {
        'Content-Type': 'application/json', // Xác định là JSON
      },
    });
    return response;
  },
  detailsUser: async(userId)=>{ 
    const response = await axiosInstance.get(`${End_Point_User.DetailsUser}/${userId}`);
    return response;
  },
  editUser: async(userId)=>{ 
    const response = await axiosInstance.post(End_Point_User.EditeUser,userId, {
      headers: {
        'Content-Type': 'application/json', // Xác định là JSON
      },
    });
    return response;
  },
 
  

}

export default UserRequest;