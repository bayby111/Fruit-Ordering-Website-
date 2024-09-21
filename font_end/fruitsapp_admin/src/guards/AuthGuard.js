import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth"
import Loading from "../component/loading";


const AuthGuard = ({ children }) => {
   const { isAuthenticated, isInitialized } = useAuth();
   if(!isInitialized) return <Loading/>
   if (!isAuthenticated) return <Navigate to='/login' replace />

   return <>{children}</>
}

export default AuthGuard;
