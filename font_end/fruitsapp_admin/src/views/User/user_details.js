import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UserController from '../../Controllers/userController';
import RoleController from '../../Controllers/roleController';
const avatarUrlBase = process.env.REACT_APP_AVATAR_URL;
function UserDetails() {
  const { id } = useParams(); // Lấy ID từ URL
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [selectRoles, setSelectRoles] = useState([]);


  useEffect(() => {
    const fetchUserDetail = async (userId) => {
      var result = await UserController.detailsUser(userId);
      if (result.success) {
        setUser(result.user);
      } else {
        console.log(result.message);
      }
    }
    const fetchedRoles = async () => {
      var result = await RoleController.get_list();
      if (result.success) {
        setSelectRoles(result.role);
      } else {
        console.log(result.message);
      }
    }
  
    fetchUserDetail(id);
    fetchedRoles();
  }, [id])

  const [isEditing, setIsEditing] = useState(false); // Trạng thái chỉnh sửa



  // Hàm xử lý thay đổi giá trị trong form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Hàm xử lý cập nhật thông tin người dùng
  const handleUpdate = () => {
    const formData = new FormData();
    formData.append('UserId', user.id);
    formData.append('Name', user.name);
    formData.append('Phone', user.phone);
    formData.append('RoleId', user.role_id);
    // Duyệt qua từng giá trị trong formData và in ra console
  formData.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });
    
   
  };

  // Hàm xử lý bật/tắt chế độ chỉnh sửa
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="max-w-4xl mx-auto py-6 px-4 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-6 text-gray-700">User Details</h1>

      {/* Thông tin người dùng */}
      {user ? (<div className="bg-white shadow-md rounded-lg p-8">
        <div className="flex flex-col items-center space-y-4 mb-8">
          <img
            src={user.avatar_url ? `${avatarUrlBase}/${user.avatar_url}` : 'https://via.placeholder.com/150'}
            alt="User Avatar"
            className="w-24 h-24 rounded-full border-2 border-gray-200 object-cover"
          />
          <h2 className="text-2xl font-semibold text-gray-800">{user.name ? user.name : ''}</h2>
          <p className="text-sm text-gray-500">{user.email ? user.email : ''}</p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="col-span-1">
            <label className="block text-gray-700 text-sm font-semibold mb-2">User ID</label>
            <p className="text-lg text-gray-900">{user.id}</p>
          </div>

          <div className="col-span-1">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Role Name</label>
            {isEditing ? (
              <div >
                <label htmlFor="role" className="block text-gray-700 text-sm font-bold mb-2">
                  Select Role
                </label>
                <select
                  name="role_id"
                  id="role_id"
                  value={user.role_id}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {selectRoles.map((role) => (
                      <option key={role.id} value={role.id}>{role.role_name}</option>
                  ))}

                </select>
              </div>
            ) : (
              <p className="text-lg text-gray-900">{user.role?.role_name ?? ""}</p>
            )}
          </div>

          <div className="col-span-1">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Phone</label>
            {isEditing ? (
              <input
                type="text"
                name="phone"
                value={user.phone}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            ) : (
              <p className="text-lg text-gray-900">{user.phone ? user.phone : null}</p>
            )}
          </div>

          <div className="col-span-1">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Create At</label>
            <p className="text-lg text-gray-900">{new Date(user.create_at).toLocaleString()}</p>
          </div>

          <div className="col-span-1">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Update At</label>
            <p className="text-lg text-gray-900">{new Date(user.update_at).toLocaleString()}</p>
          </div>

          <div className="col-span-1">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Account Status</label>
            {isEditing ? (
              <select
                name="disable"
                value={user.disable}
                onChange={handleInputChange}
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value={false}>Active</option>
                <option value={true}>Disabled</option>
              </select>
            ) : (
              <p className={`text-lg ${user.disable ? 'text-red-600' : 'text-green-600'}`}>
                {user.disable ? 'Disabled' : 'Active'}
              </p>
            )}
          </div>
        </div>

        {/* Nút chuyển đổi giữa chế độ xem và chỉnh sửa */}
        <div className="flex justify-center space-x-4 mt-8">
          {isEditing ? (
            <button
              onClick={handleUpdate}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Save Changes
            </button>
          ) : (
            <button
              onClick={toggleEdit}
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Edit
            </button>
          )}
          <button
            onClick={() => navigate('/user')}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Back to List
          </button>
        </div>
      </div>) : (<p className="text-red-500 text-center">No data available for this user.</p>)}

      {/* ----------------- */}

    </div>
  );
}

export default UserDetails;
