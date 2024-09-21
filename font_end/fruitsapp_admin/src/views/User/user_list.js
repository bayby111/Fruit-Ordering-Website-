import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiOutlinePlusCircle, HiOutlineTrash, HiChevronDoubleDown } from 'react-icons/hi';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import UserController from '../../Controllers/userController';
import useLoading from '../../Hooks/useLoading';

function UserList() {
  const navigate = useNavigate();
  const [pageNumber, setPageNumber] = useState(1); // Current page
  const [pageSize, setPageSize] = useState(5); // Number of users per page
  const [user, setUser] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, startLoading, stopLoading] = useLoading();
  const [remove, setRemove] = useState([]);


  // Lọc danh sách user dựa trên searchTerm
  const searchUser = user.filter((u) =>
    u.name ? u.name.toLowerCase().includes(searchTerm.toLowerCase()) : false
  );



  // Pagination logic
  const totalPages = Math.ceil(searchUser.length / pageSize);

  useEffect(() => {
    const fetchUser = async () => {
      const result = await UserController.getAllUser(pageNumber, pageSize);
      if (result.success) {
        setUser(result.user);
      } else {
        console.log("failed:", result.message);
      }

    }
    fetchUser();
  }, [pageNumber, pageSize, searchTerm]);

  // Handle page change
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPageNumber(newPage);
    }
  };

  const HandleDelete = ()=>{

    console.log('remove user with id :', remove);

  }

  const HandleRemoveAll = () => {
    if (remove.length === searchUser.length) {
      setRemove([]); // Bỏ chọn tất cả
    } else {
      setRemove(searchUser.map((u) => u.id)); // Chọn tất cả
    }
  };

  const HandleChangeRemove = (userId)=>{
    setRemove((prevRemove) =>
      prevRemove.includes(userId)
        ? prevRemove.filter((id) => id !== userId) // Bỏ chọn
        : [...prevRemove, userId] // Chọn thêm
    );
  }


  return (
    <div className="p-6">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center justify-between px-4 py-4 bg-gray-100">
          <h1 className="text-3xl font-bold text-gray-800">User Registered Management</h1>
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              id="table-search-users"
              className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search for users"
            />
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 19L15 15M15 8A7 7 0 1 1 1 8A7 7 0 0 1 15 8Z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="px-4 py-4 flex items-center justify-between bg-white">
          <div className="relative">
            <Menu>
              <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm font-semibold text-white focus:outline-none">
                Action Options
                <HiChevronDoubleDown className="w-4 h-4 fill-white" />
              </MenuButton>
              <MenuItems className="absolute right-0 mt-2 w-40 bg-gray-100 rounded-lg shadow-md">
                <MenuItem>
                  <button
                    onClick={() => navigate('/create-user')}
                    className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 hover:bg-gray-200"
                  >
                    <HiOutlinePlusCircle className="w-4 h-4" />
                    Add New
                  </button>
                </MenuItem>
                <MenuItem>
                  <button onClick={HandleDelete} className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 hover:bg-gray-200">
                    <HiOutlineTrash className="w-4 h-4" />
                    Delete
                  </button>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>

        <table className="w-full text-sm text-left text-gray-500 bg-white">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="p-4">
                <input
                 checked={remove.length === searchUser.length}
                 onChange={HandleRemoveAll}
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
              </th>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">Position</th>
              <th scope="col" className="px-6 py-3">Status</th>
              <th scope="col" className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {searchUser.slice((pageNumber - 1) * pageSize, pageNumber * pageSize).map((u) => (
              <tr
                key={u.id}
                className="bg-white border-b hover:bg-gray-50 cursor-pointer"
              >
                <td className="p-4">
                  <input
                    type="checkbox"
                    checked={remove.includes(u.id)}
                    onChange={()=>HandleChangeRemove(u.id)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                </td>

                <td onClick={() => navigate(`/user-details/${u.id}`)} className="px-6 py-4 flex items-center">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://project-nerd.com/wp-content/uploads/2020/05/ang.jpeg"
                    alt="User avatar"
                  />
                  <div className="ml-3">
                    <div className="text-base font-semibold">{u.name}</div>
                    <div className="text-gray-500">{u.email}</div>
                  </div>
                </td>
                <td className="px-6 py-4">{u.role ? u.role.role_name : ''}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
                    ${u.disable ? 'bg-orange-100 text-orange-800' : 'bg-green-100 text-green-800'}`}
                  >
                    {u.disable ? 'Disabled' : 'Active'}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button
                    disabled={isLoading}
                    onClick={async () => {
                      startLoading();
                      let isDisable = !u.disable; // Đảo ngược trạng thái disable
                      var result = await UserController.disableUser(u.id, isDisable);
                      if (result.success) {
                        setUser((prevUser) =>
                          prevUser.map((userItem) =>
                            userItem.id === u.id ? { ...userItem, disable: isDisable } : userItem
                          )
                        );
                        console.log(result.message);
                      } else {
                        console.log(result.message);
                      }
                      stopLoading();
                    }}
                    className={`text-white font-bold py-2 px-4 rounded transition-all duration-300 
                              ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700'}
                              ${isLoading ? 'hover:bg-gray-400' : 'hover:underline'} no-underline hover:no-underline`}
                  >
                    {isLoading ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin h-5 w-5 mr-2 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8H4z"
                          ></path>
                        </svg>
                        Processing...
                      </span>
                    ) : u.disable ? 'Unlock user' : 'Lock user'}
                  </button>


                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between items-center p-4">
          {/* Page Size Selector */}
          <div className="flex items-center">
            <label htmlFor="pageSize" className="mr-2">Users per page:</label>
            <select
              id="pageSize"
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
              className="px-3 py-1.5 bg-gray-200 rounded-md"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center">
            <button
              onClick={() => handlePageChange(pageNumber - 1)}
              disabled={pageNumber === 1}
              className={`px-3 py-1.5 bg-gray-200 rounded-md ${pageNumber === 1 ? 'cursor-not-allowed opacity-50' : ''}`}
            >
              Previous
            </button>
            <span className="px-3">Page {pageNumber} of {totalPages}</span>
            <button
              onClick={() => handlePageChange(pageNumber + 1)}
              disabled={pageNumber === totalPages}
              className={`px-3 py-1.5 bg-gray-200 rounded-md ${pageNumber === totalPages ? 'cursor-not-allowed opacity-50' : ''}`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserList;
