import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import { BsFillCartPlusFill } from "react-icons/bs";
import useCartData from "../Hooks/useCartData";


const Navbar = () => {

    const { user, logout } = useContext(AuthContext);
    const [data]=useCartData();



    const navOption = <>
        <Link to={'/'}>Home</Link>
        <Link to={'/menu'}>Our menu</Link>
        <Link to={'/ourShop/salad'}>Our shop</Link>
        <Link to={'/dashboard/myCard'} className="btn gap-0"><BsFillCartPlusFill /><span>({data?.length})</span></Link>
        {
            user ?
                <button className="hover:animate-pulse" onClick={() => {
                    logout()
                }}>Logout</button>
                :
                <>
                    <Link to={'/login'}>Login</Link>
                    <Link to={'/register'}>Register</Link>
                </>
        }
    </>

    return (
        <div>
            <div className="navbar fixed z-50 bg-black opacity-80 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOption}
                        </ul>
                    </div>
                    <a className="text-xl uppercase font-semibold">BISTRO BOSS <br />Restaurant</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex items-center gap-4">
                        {navOption}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;