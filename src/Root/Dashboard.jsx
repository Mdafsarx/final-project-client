import { BiBookmark, BiHome, BiMenu, BiUser } from "react-icons/bi";
import { FaHome, FaStreetView } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { GiBookCover, GiForkKnifeSpoon, GiPayMoney } from "react-icons/gi";
import { IoMenu } from "react-icons/io5";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAddmin";

const Dashboard = () => {

    const [admin] = useAdmin();

    return (
        <div>
            <div className="flex gap-5">
                <div className="w-auto min-h-screen bg-slate-200 p-4 space-y-6">

                    {
                        admin
                            ?
                            <>
                                <Link className="flex items-center  font-bold gap-2" to={'/dashboard/adminHome'}><FaHome />Admin Home</Link>
                                <Link className="flex items-center  font-bold gap-2" to={'/dashboard/addItem'}><GiForkKnifeSpoon /> Add item</Link>
                                <Link className="flex items-center  font-bold gap-2" to={'/dashboard/manageItem'}><IoMenu />Manage item</Link>
                                <Link className="flex items-center  font-bold gap-2"><GiBookCover />Manage Booking</Link>
                                <Link className="flex items-center  font-bold gap-2" to={'/dashboard/users'}><BiUser />All users</Link>

                            </>
                            :
                            <>
                                <Link className="flex items-center  font-bold gap-2" to={'/dashboard/myCard'}><FaCartShopping /> My Card</Link>
                                <Link className="flex items-center  font-bold gap-2" to={'/dashboard/userHome'}><FaHome />user Home</Link>
                                <Link className="flex items-center  font-bold gap-2" to={'/dashboard/history'}><GiPayMoney />Payment history</Link>
                                <Link className="flex items-center  font-bold gap-2"><FaStreetView />review</Link>
                                <Link className="flex items-center  font-bold gap-2"><BiBookmark />Booking</Link>
                            </>
                    }
                    <div className="divider"></div>
                    <Link className="flex items-center  font-bold gap-2" to={'/'}><BiHome />Home</Link>
                    <Link className="flex items-center  font-bold gap-2" to={'/menu'}><BiMenu />Menu</Link>

                </div>

                <div className="flex-1">
                    <Outlet />
                </div>

            </div>
        </div>
    );
};

export default Dashboard;