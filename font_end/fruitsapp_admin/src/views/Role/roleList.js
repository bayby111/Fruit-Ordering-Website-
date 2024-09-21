
import React, { useState, useEffect } from 'react';
import RoleController from '../../Controllers/roleController';
import Swal from 'sweetalert2';
import { convertDate } from '../../Utils/convertDate';

const RoleList = () => {
    const [roles, setRoles] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isAddingRole, setIsAddingRole] = useState(false);
    const [newRole, setNewRole] = useState({ roleName: '', roleCode: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const [editingRole, setEditingRole] = useState(null);
    

    useEffect(() => {
        const fetchedRoles = async () => {
            var result = await RoleController.get_list();
            if (result.success) {
                setRoles(result.role);
            } else {
                return <><div>loading......</div></>
            }
        }
        fetchedRoles();

    }, []);

    const handleAddRole = async () => {
        if (validateRole()) {
            var formData = new FormData();
            formData.append('role_code', newRole.roleCode);
            formData.append('role_name', newRole.roleName);
            var result = await RoleController.create(formData);
            if (result.success) {
                // Thêm một vai trò mới vào cuối danh sách 
                setRoles((prevRoles) => [...prevRoles, result.role]);
                Swal.fire({
                    icon: 'Success',
                    title: 'Thành Công',
                    text: result.message
                });
            } else {
                Swal.fire({
                    icon: 'Error',
                    title: 'Lỗi',
                    text: result.message
                });
            }
        }
        setNewRole({ roleName: '', roleCode: '' });
        setIsAddingRole(false);
    };

    
    const handleSaveEdit = async (editedRole) => {
        const formData = new FormData();
        formData.append('Id', editedRole.id,);
        formData.append('role_code', editedRole.role_code);
        formData.append('role_name', editedRole.role_name);
        const result = await RoleController.update(formData);
        if (result.success) {
            //Cập nhật một phần tử trong mảng roles
            setRoles((prevRoles) => prevRoles.map(role => 
                role.id === editedRole.id ? { ...role, ...editedRole } : role
            ));
            Swal.fire({
                icon: 'Success',
                title: 'Updated',
                text: 'Role has been updated successfully.'
            });
        } else {
            Swal.fire({
                icon: 'Error',
                title: 'Lỗi',
                text: result.message
            });
        }
        setEditingRole(null); // Kết thúc chế độ chỉnh sửa
    };
    

    const handleDisable = async(role_id) => {
        if (role_id) {
            const result = await Swal.fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!",
            });
        
            if (result.isConfirmed) {
              var response = await RoleController.disable(role_id);       
              if(response.success){
                //nêu như backend thực hiện thành công lấy role id hiện tại xoá ra khởi danh sách roles trên fontend để cập nhật lại state
                setRoles((prevRoles) => prevRoles.filter(role => role.id !== role_id))
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                  });
              }else{
                Swal.fire({
                    title: "thất bại!",
                    text: "vai trò chưa được vô hiệu hoá.",
                    icon: "error",
                  });
              }
            
            }
          }
    }

    const filteredRoles = roles.filter((role) =>
        role.role_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        role.role_code.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const validateRole = () => {
        const maxLength = 20;
        let error = '';
        // Kiểm tra Role Name không được để trống và có độ dài tối thiểu
        if (!newRole.roleName || newRole.roleName.trim().length === 0) {
            error = 'Tên Role không được để trống.';
        } else if (newRole.roleName.length >= maxLength) {
            error = `Tên Role có nhiều nhất ${maxLength} ký tự.`;
        }
        // Kiểm tra Role Code không được để trống và có độ dài tối thiểu
        if (!newRole.roleCode || newRole.roleCode.trim().length === 0) {
            error = 'Code Role không được để trống.';
        } else if (newRole.roleCode.length >= maxLength) {
            error = `Code Role có nhiều nhất ${maxLength} ký tự.`;
        }
        // Nếu có lỗi, đặt lỗi và trả về false
        if (error) {
            setErrorMessage(error);
            Swal.fire({
                icon: 'error',
                title: 'Lỗi',
                text: error
            });
            return false;
        }
        // Không có lỗi
        setErrorMessage('');
        return true;
    };

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold mb-6">Quản lý Role của User</h2>
            <div className="flex items-center justify-between mb-6">
                <button
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                    onClick={() => setIsAddingRole(!isAddingRole)}
                >
                    {isAddingRole ? 'Hủy' : 'Thêm Role'}
                </button>
                <input
                    type="text"
                    placeholder="Tìm kiếm..."
                    className="px-4 py-2 border rounded-lg"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {isAddingRole && (
                <div className="mb-6 bg-gray-100 p-4 rounded-lg shadow-md">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Code Role</label>
                        <input
                            type="text"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                            value={newRole.roleCode}
                            onChange={(e) => setNewRole({ ...newRole, roleCode: e.target.value })}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Tên Role</label>
                        <input
                            type="text"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                            value={newRole.roleName}
                            onChange={(e) => setNewRole({ ...newRole, roleName: e.target.value })}
                        />
                    </div>
                    {errorMessage && (
                        <div className="text-red-500 text-sm mb-4">
                            {errorMessage}
                        </div>
                    )}

                    <button
                        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                        onClick={handleAddRole}
                    >
                        Lưu Role
                    </button>
                </div>
            )}

            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">#</th>
                        <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Role Code</th>
                        <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Role Name</th>
                        <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Ngày tạo</th>
                        <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Ngày cập nhật</th>
                        <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {filteredRoles.map((role, index) => (
                        <tr key={role.id} className="hover:bg-gray-100">
                        <td className="py-3 px-6">{index + 1}</td>
            
                        {/* Kiểm tra nếu vai trò đang được chỉnh sửa */}
                        {editingRole?.id === role.id ? (
                            <>
                                <td className="py-3 px-6">
                                    <input 
                                        type="text" 
                                        className="border px-2 py-1" 
                                        value={editingRole.role_code}
                                        onChange={(e) => setEditingRole({ ...editingRole, role_code: e.target.value })}
                                    />
                                </td>
                                <td className="py-3 px-6">
                                    <input 
                                        type="text" 
                                        className="border px-2 py-1" 
                                        value={editingRole.role_name}
                                        onChange={(e) => setEditingRole({ ...editingRole, role_name: e.target.value })}
                                    />
                                </td>
                                <td className="py-3 px-6">{convertDate(role.create_at)}</td>
                                <td className="py-3 px-6">{convertDate(role.update_at)}</td>
                                <td className="py-3 px-6">
                                    <button 
                                        className="text-green-500 hover:underline mr-4" 
                                        onClick={() => handleSaveEdit(editingRole)}
                                    >
                                        Save
                                    </button>
                                    <button 
                                        className="text-red-500 hover:underline" 
                                        onClick={() => setEditingRole(null)}
                                    >
                                        Cancel
                                    </button>
                                </td>
                            </>
                        ) : (
                            <>
                                <td className="py-3 px-6">{role.role_code}</td>
                                <td className="py-3 px-6">{role.role_name}</td>
                                <td className="py-3 px-6">{convertDate(role.create_at)}</td>
                                <td className="py-3 px-6">{convertDate(role.update_at)}</td>
                                <td className="py-3 px-6">
                                    <button 
                                        className="text-blue-500 hover:underline mr-4" 
                                        onClick={() => setEditingRole(role)}
                                    >
                                        Edit
                                    </button>
                                    <button 
                                        onClick={() => handleDisable(role.id)} 
                                        className="text-red-500 hover:underline"
                                    >
                                        Disable
                                    </button>
                                </td>
                            </>
                        )}
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RoleList;


