import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { convertDate } from "../../Utils/convertDate";
import AuthController from "../../Controllers/authController";
import useLoading from "../../Hooks/useLoading";
import ButtonWithLoader from "../../component/Button/ButtonWithLoader";
import Swal from "sweetalert2";

const avatarUrlBase = process.env.REACT_APP_AVATAR_URL;

function Profile() {
  const [name, setName] = useState('Nguyễn Văn A');
  const [email, setEmail] = useState('not yet');
  const [phone, setPhone] = useState('not yet');
  const [image, setImage] = useState('https://via.placeholder.com/150');
  const [imageFile, setImageFile] = useState(null);
  const [userInfor, setUserInfor] = useState({});
  const [isLoading, startLoading, stopLoading] = useLoading();
  const naviagte = useNavigate();


  useEffect(() => {
    const fetchUser = async () => {
      var result = await AuthController.getProfileUser();
      if (result.success) {
        const user = result.user;
        setUserInfor(user);
        setName(user.name);
        setEmail(user.email);
        setPhone(user.phone);
        setImage(user.avatar_url ? `${avatarUrlBase}/${user.avatar_url}` : 'https://via.placeholder.com/150');
      } else {
        console.log(result.message);
      }
    }
    fetchUser();
  }, [])

  const handleUpdate = async (e) => {
    e.preventDefault();
    startLoading();
    // Logic để cập nhật thông tin tài khoản, như gọi API để lưu dữ liệu.
    const formData = new FormData();
    formData.append('UserId', userInfor.id);
    formData.append('Name', name);
    formData.append('Email', email);
    formData.append('Phone', phone);
    if (imageFile) {
      formData.append('Avatar', imageFile);  // Chỉ thêm ảnh nếu có ảnh được chọn
    }
    const result = await AuthController.update(formData);
    if (result.success) {
      const updatedUser = result.user;
      setUserInfor(updatedUser);  // Cập nhật lại toàn bộ thông tin người dùng
      setName(updatedUser.name);  // Cập nhật lại các trường cụ thể
      setEmail(updatedUser.email);
      setPhone(updatedUser.phone);
      setImage(updatedUser.avatar_url ? `${avatarUrlBase}/${updatedUser.avatar_url}` : 'https://via.placeholder.com/150');
      Swal.fire({
        title: 'Success!',
        text: result.message,
        icon: 'success',
        confirmButtonText: 'OK'
      });
    } else {
      Swal.fire({
        title: 'Error!',
        text: result.message,
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
    stopLoading();

  };

  if (!userInfor) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8">

      {/* Nút Quay Lại Dashboard */}
      <div className="mb-6">
        <Link to="/" className="text-blue-500 underline">← Quay lại Dashboard</Link>
      </div>
      {/* Thông Tin Cá Nhân */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-6">Thông Tin Cá Nhân</h2>
        <div className="flex items-center mb-6">
          <img
            src={image}
            alt="Avatar"
            className="w-32 h-32 rounded-full mr-6"
          />
          <div>
            <p className="text-xl font-bold">{userInfor ? userInfor.name : 'not yet'}</p>
            <p className="text-gray-600">Quản trị viên hệ thống</p>
            <p className="text-gray-600">Email: {userInfor ? userInfor.email : null}</p>
            <p className="text-gray-600">Số điện thoại: {userInfor ? userInfor.phone : null}</p>
          </div>
        </div>
        <form onSubmit={handleUpdate}>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700">Tên đầy đủ:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Số điện thoại:</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Cập nhật hình ảnh:</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setImageFile(file);
                    const imageUrl = URL.createObjectURL(file);
                    setImage(imageUrl);
                  }
                }}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            {/* <button disabled={isLoading} type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md">
              Cập nhật thông tin
            </button> */}
            <ButtonWithLoader className='w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 inline-flex items-center' isLoading={isLoading} >
              Cập nhật thông tin
            </ButtonWithLoader>
          </div>
        </form>
      </div>

      {/* Thông Tin Công Việc */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-6">Thông Tin Công Việc</h2>
        <div className="space-y-4">
          <p><strong>Ngày tham gia:</strong> {userInfor ? convertDate(userInfor.create_at) : 'not yet'}</p>
          <p><strong>Trạng thái tài khoản:</strong>{userInfor.disable ? 'disable' : 'active'} </p>
          <p><strong>Vai trò và quyền hạn:</strong> Quản lý người dùng, Quản lý nội dung, Báo cáo</p>
        </div>
      </div>

      {/* Cấu Hình Tài Khoản */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-6">Cấu Hình Tài Khoản</h2>
        <div className="flex space-x-4">
          <div>
            <button onClick={() => naviagte('/change-password')} className="bg-blue-500 text-white px-4 py-2 rounded-md">Đổi mật khẩu</button>
          </div>

          <div>

            <button onClick={() => naviagte("/sercurity-settings")} className="bg-blue-500 text-white px-4 py-2 rounded-md">Cài đặt bảo mật</button>
          </div>
          <div>
            <button onClick={() => naviagte('/notification-settings')} className="bg-blue-500 text-white px-4 py-2 rounded-md">Quản lý thông báo</button>
          </div>

        </div>
      </div>

      {/* Lịch Sử Hoạt Động */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-6">Lịch Sử Hoạt Động</h2>
        <div className="space-y-4">
          <p><strong>Nhật ký hoạt động:</strong></p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Cập nhật dữ liệu vào ngày 20/08/2024</li>
            <li>Phê duyệt yêu cầu vào ngày 19/08/2024</li>
            <li>Thay đổi cấu hình hệ thống vào ngày 18/08/2024</li>
          </ul>
          <p><strong>Lịch sử đăng nhập:</strong></p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Đăng nhập từ Hà Nội vào ngày 20/08/2024</li>
            <li>Đăng nhập từ TP.HCM vào ngày 19/08/2024</li>
          </ul>
        </div>
      </div>

      {/* Quản Lý Tài Liệu và Hỗ Trợ */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-6">Quản Lý Tài Liệu và Hỗ Trợ</h2>
        <div className="space-y-4">
          <Link to="/documentation-management" className="text-blue-500 underline">Tài liệu hướng dẫn và Hỗ trợ kỹ thuật</Link>

        </div>
      </div>
    </div>
  );

}

export default Profile;