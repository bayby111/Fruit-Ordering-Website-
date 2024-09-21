import { useState} from 'react';
import Logo from '../../asset/img/logo.jpeg';
import DialogMessage from '../../component/Dialog/dialog_message';
import ButtonWithLoader from '../../component/Button/ButtonWithLoader';
import useAuth from '../../Hooks/useAuth';
import AuthController from '../../Controllers/authController';
// import axios from 'axios';




function Login() {
    const [email, setEmail] = useState("");
    const  role_id = 2;
  
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogMessage, setDialogMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false); 
    const {login} = useAuth();
   

    const handleDialogClose = () => {
        setDialogOpen(false);
       
    };

    const handleLogin = async()=>{
        const validationErrors = validate(email, password);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return; // Dừng thực hiện nếu có lỗi
        }
      setIsLoading(true);
      const login_data = {email,password,role_id};
      const result = await AuthController.login(login_data);
      setIsLoading(false); // Kết thúc loading
      if (result.success) {
          localStorage.setItem('ACCESS_TOKEN', result.token);
          login({token: result.token});
          setIsSuccess(true); 
          setDialogMessage('Login successful! Welcome');
      } else {
          setIsSuccess(false);
          console.error('Login failed:', result.message);
          setDialogMessage('Login failed: ' + result.message);
      }
      setDialogOpen(true);
    }

    const validate = (email, password) => {
        const errors = {};
    
        if (!email) {
            errors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Email address is invalid.";
        }
    
        if (!password) {
            errors.password = "Password is required.";
        } else if (password.length < 6) {
            errors.password = "Password must be at least 6 characters.";
        }
    
        return errors;
    };

    return (
        <div>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-20 w-auto "
                        src={Logo}
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Log in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="space-y-6">
                    <div>
                            <div className="mt-2">
                                <input
                                    value={role_id}
                                    type="hidden"
                                    maxLength={50}
                                    disabled
                                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    placeholder='nhập email người dùng'
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                    type="email"
                                    autoComplete="email"
                                    maxLength={50}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm">{errors.email}</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Password
                                </label>

                            </div>
                            <div className="mt-2">
                                <input
                                    placeholder='nhập mật khẩu'
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                    type="password"
                                    maxLength={20}
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.password && (
                                    <p className="text-red-500 text-sm">{errors.password}</p>
                                )}
                            </div>
                        </div>

                        <div>
                       
                            <ButtonWithLoader
                                className='w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 inline-flex items-center'
                                isLoading={isLoading}
                                onClick={handleLogin}
                            >
                                Log in
                            </ButtonWithLoader>
                            
                        </div>
                    </div>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Use accoount provided by owner?{' '}
                    </p>
                </div>
            </div>
            <DialogMessage
                isOpen={dialogOpen}
                message={dialogMessage}
                isSuccess={isSuccess}
                onClose={handleDialogClose}
            />
        </div>
    );
}

export default Login;