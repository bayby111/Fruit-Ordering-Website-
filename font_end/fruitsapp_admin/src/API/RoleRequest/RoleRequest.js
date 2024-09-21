
import axiosInstance from "../configAxiosRequest";

const End_Point_Role = {

    GetList: "/Role/get-list-role",
    Create: "/Role/create-role",
    Update: "/Role/update-role",
    Disable: "/Role/disable-role",

}

const RoleRequest = {
    get_list: async () => {
        const response = await axiosInstance.get(End_Point_Role.GetList);
        return response;
    },
    create: async (formdata) => {
        const response = await axiosInstance.post(End_Point_Role.Create, formdata);
        return response;
    },
    update: async (formdata) => {
        const response = await axiosInstance.post(End_Point_Role.Update, formdata);
        return response;
    },
    disable: async (id) => {
        const response = await axiosInstance.post(End_Point_Role.Disable, id, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response;
    },
}

export default RoleRequest;