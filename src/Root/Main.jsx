import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Main = () => {
    const location = useLocation();
    const hidden = location.pathname.includes('login') || location.pathname.includes('register');
    return (
        <div>
            {hidden || <Navbar />}
            <Outlet />
            {hidden || <Footer />}
        </div>
    );
};

export default Main;