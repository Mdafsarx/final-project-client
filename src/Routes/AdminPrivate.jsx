import { TbFidgetSpinner } from "react-icons/tb";
import useAuth from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAddmin";

const AdminPrivate = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    const [admin, isPending] = useAdmin();





    if (user && admin) {
        return children
    }
    if (loading || isPending) {
        return <div><span className="text-7xl animate-spin"><TbFidgetSpinner /></span></div>
    }
    return <Navigate to={'/'} state={location.pathname} />



};

export default AdminPrivate;