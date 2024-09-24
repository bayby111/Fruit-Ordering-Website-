import axios from "axios";

// Tạo một instance của Axios với các cấu hình mặc định
const configAxiosRequest = axios.create({
    baseURL: process.env.REACT_APP_URL_API,
    timeout: 10000,
    
});

// Cấu hình request interceptor
configAxiosRequest.interceptors.request.use(
    config => {
      // Làm gì đó trước khi request được gửi, ví dụ: thêm token vào headers
      const token = localStorage.getItem('ACCESS_TOKEN');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    error => {
      // Làm gì đó với lỗi request
      return Promise.reject(error);
    }
  );
  
  // Cấu hình response interceptor
  configAxiosRequest.interceptors.response.use(
    response => {
      // Làm gì đó với dữ liệu response
      return response;
    },
    error => {
      
      return Promise.reject(error);
    }
  );
  export default configAxiosRequest;
