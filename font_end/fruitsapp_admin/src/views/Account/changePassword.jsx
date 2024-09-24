import React, { useState } from 'react';
import Swal from 'sweetalert2';
import AuthController from 'Controllers/authController';
import { Link } from 'react-router-dom';
import useAuth from 'Hooks/useAuth';

const ChangePassword = () => {
    const {user} = useAuth();
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChangePassword = async (e) => {
        e.preventDefault();


        if (validatePassword()) {
            const formData = new FormData();
            const user_id = user.id ? user.id : 0;
            formData.append('user_id', user_id );
            formData.append('oldPassword', currentPassword);
            formData.append('newPassword', newPassword);
            var result = await AuthController.ChangePass(formData);
            if (result.success) {
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

        }
    };

    const validatePassword = () => {
        const minLength = 6;
        const hasUpperCase = /[A-Z]/.test(newPassword);
        const hasLowerCase = /[a-z]/.test(newPassword);
        const hasNumbers = /[0-9]/.test(newPassword);
        const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(newPassword);

        if (newPassword.length < minLength) {
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
        if (newPassword !== confirmPassword) {
            setErrorMessage('Passwords do not match.');
            return false;
        }

        setErrorMessage('');
        return true;
    };


    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-6">Change Password</h2>
                <form onSubmit={handleChangePassword}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="currentPassword">
                            Current Password
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="currentPassword"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="newPassword">
                            New Password
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="confirmPassword">
                            Confirm New Password
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="flex items-center mb-4">
                        <input
                            type="checkbox"
                            id="showPassword"
                            checked={showPassword}
                            onChange={() => setShowPassword(!showPassword)}
                            className="mr-2"
                        />
                        <label htmlFor="showPassword" className="text-gray-700">Show Passwords</label>
                    </div>
                    {errorMessage && (
                        <div className="text-red-500 text-sm mb-4">
                            {errorMessage}
                        </div>
                    )}
                    <div className="mb-6">
                        <Link to="/" className="text-blue-500 underline">← Quay lại Dashboard</Link>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                    >
                        Change Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ChangePassword;
