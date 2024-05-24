import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { TbFidgetSpinner } from "react-icons/tb";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation()

    if (loading) {
        return <div><span className="text-7xl animate-spin"><TbFidgetSpinner /></span></div>
    }

    if (user) {
        return children
    }

    return <Navigate to={'/login'} state={location.pathname}></Navigate>
};

export default PrivateRoute;