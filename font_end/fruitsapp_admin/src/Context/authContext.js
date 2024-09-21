
import React, { createContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import AuthController from '../Controllers/authController';



const AuthContext = createContext();

const initialAuthState = {
    isAuthenticated: false,
    isInitialized: false,
    user: null

}
const AuthProvider = ({ children }) => {

    const [authState, setAuthState] = useState(initialAuthState);
    // console.log("userSate:", authState);

    useEffect(() => {
        const accessToken = localStorage.getItem("ACCESS_TOKEN");
        const check_Auth = () => {
            if (!accessToken || isTokenExpired(accessToken)) {
                // return true if Token đã hết hạn, thực hiện logout
                logout({token: accessToken});
            } else if (accessToken) {
                // Token còn hạn, tiến hành fetch user
                fetchUser();
            }
        }

        check_Auth();

    }, []);


    const fetchUser = async () => {
        const result = await AuthController.getProfileUser();
        if (result.success) {
            setAuthState({
                isAuthenticated: true,
                isInitialized: true,
                user: result.user
            })
        } else {
            console.log("fectch user failed:", result.message);
            setAuthState({
                isAuthenticated: false,
                isInitialized: true,
                user: null
            })
        }
    }



    const isTokenExpired = (token) => {
        if (!token) return true;
        try {
            const decoded = jwtDecode(token);
            const currentTime = Date.now() / 1000; // Lấy thời gian hiện tại tính bằng giây
            return decoded.exp < currentTime; // Trả về true nếu token đã hết hạn
        } catch (error) {
            console.error('Invalid token', error);
            return true; // Nếu có lỗi trong quá trình giải mã, coi như token đã hết hạn
        }
    };


    const login = async ({ token }) => {
        if (token) {
            await fetchUser();
        }

    }
    const logout = async ({ token }) => {
        if (token) {
            const result = await AuthController.logout(token);
            if (result.success) {
               
                console.log(result.message);
            } else {
                console.log(result.message);
            }
        }
        localStorage.removeItem('ACCESS_TOKEN');
        setAuthState({
            isAuthenticated: false,
            isInitialized: true,
            user: null
        });
    };

    return (
        <AuthContext.Provider value={{ ...authState, logout, login }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
