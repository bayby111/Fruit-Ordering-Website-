import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RoleController from 'Controllers/roleController';
import Swal from 'sweetalert2';
import AuthController from 'Controllers/authController';

const CreateUser = () => {
    const navigate = useNavigate();

    // State to manage form data
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        phone: null,
        role_id: null, // Default is 'admin'
    });
    const [selectRoles, setSelectRoles] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    useEffect(() => {
        const fetchedRoles = async () => {
            var result = await RoleController.get_list();
            if (result.success) {
                setSelectRoles(result.role);
            } else {
                console.log(result.message);
            }
        }
        fetchedRoles();

    }, []);
    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

    };

    // Handle form submission
    const handleSubmit = async(e) => {
        e.preventDefault(); // Prevent default form behavior
        if (validateUer()) {
            const formData = new FormData();
            formData.append('name', userData.name);
            formData.append('email', userData.email);
            formData.append('password', userData.password);
            formData.append('phone', userData.phone);
            formData.append('role_id', userData.role_id);
           var result = await AuthController.register(formData);
           if(result.success){
            Swal.fire({
                title: 'Success!',
                text: result.message,
                icon: 'success',
                confirmButtonText: 'OK'
            });
           }else{
            Swal.fire({
                title: 'Error!',
                text: result.message,
                icon: 'error',
                confirmButtonText: 'OK'
            });

           }
        }

    };


    const validateUer = () => {
        const minLength = 6;
        const hasUpperCase = /[A-Z]/.test(userData.password);
        const hasLowerCase = /[a-z]/.test(userData.password);
        const hasNumbers = /[0-9]/.test(userData.password);
        const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(userData.password);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression to validate email
        const phoneRegex = /^[0-9]{10}$/; // Simple regex for 10 digit phone numbers
        // Check if any field is empty
        if (!userData.name || !userData.email || !userData.phone || !userData.password) {
            setErrorMessage('All fields are required.');
            return false;
        }
        // Check if role is selected
        if (!userData.role_id) {
            setErrorMessage('Please select a role.');
            return false;
        }
        if (!emailRegex.test(userData.email)) {
            setErrorMessage('Invalid email format.');
            return false;
        }

        // Check if phone number is valid
        if (!phoneRegex.test(userData.phone)) {
            setErrorMessage('Phone number must be a 10-digit number.');
            return false;
        }

        if (userData.password.length < minLength) {
            setErrorMessage('Password must be at least 8 characters long.');
            return false;
        }
        if (!hasUpperCase) {
            setErrorMessage('Password must contain at least one uppercase letter.');
            return false;
        }
        if (!hasLowerCase) {
            setErrorMessage('Password must contain at least one lowercase letter.');
            return false;
        }
        if (!hasNumbers) {
            setErrorMessage('Password must contain at least one number.');
            return false;
        }
        if (!hasSpecialChars) {
            setErrorMessage('Password must contain at least one special character.');
            return false;
        }

        setErrorMessage('');
        return true;
    };

    return (
        <div className="max-w-lg mx-auto mt-10 bg-white p-10 rounded-lg shadow-md">
            <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Create New Admin/Manager</h1>

            {/* Description */}
            <p className="text-gray-600 mb-6 text-center">
                Please fill out the form below to create a new Admin or Manager account. Make sure to assign the appropriate role
                based on the user's responsibilities.
            </p>
            <form onSubmit={handleSubmit}>
                {/* Name Input */}
                <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                        Full Name
                    </label>
                    <input
                        maxLength={100}
                        type="text"
                        name="name"
                        id="name"
                        value={userData.name}
                        onChange={handleInputChange}
                        placeholder="Enter full name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        autoComplete='name'
                    />
                </div>

                {/* Email Input */}
                <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                        Email Address
                    </label>
                    <input
                        maxLength={100}
                        type="email"
                        name="email"
                        id="email"
                        value={userData.email}
                        onChange={handleInputChange}
                        placeholder="Enter email address"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        autoComplete='email'
                    />
                </div>
                {/* Phone Number Input */}
                <div className="mb-6">
                    <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                        Phone Number
                    </label>
                    <input
                        maxLength={10}
                        type="text"
                        name="phone"
                        id="phone"
                        value={userData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        autoComplete='phone'
                    />
                </div>


                {/* Password Input */}
                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                    </label>
                    <input
                        maxLength={100}
                        type="password"
                        name="password"
                        id="password"
                        value={userData.password}
                        onChange={handleInputChange}
                        placeholder="Enter a strong password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

                    />
                </div>


                {/* Role Selection */}
                <div className="mb-6">
                    <label htmlFor="role" className="block text-gray-700 text-sm font-bold mb-2">
                        Select Role
                    </label>
                    <select
                        name="role_id"
                        id="role_id"
                        value={userData.role_id}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        {selectRoles.map((role) => (
                            <option key={role.id} value={role.id}>{role.role_name}</option>
                        ))}

                    </select>
                </div>
                {errorMessage && (
                    <div className="text-red-500 text-sm mb-4">
                        {errorMessage}
                    </div>
                )}

                {/* Submit Button */}
                <div className="flex justify-center mt-8">
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Create User
                    </button>
                </div>
            </form>

            {/* Back to List Button */}
            <div className="mt-6 flex justify-center">
                <button
                    onClick={() => navigate('/admin/users')}
                    className="w-full bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                    Back to User List
                </button>
            </div>
        </div>
    );
};

export default CreateUser;


