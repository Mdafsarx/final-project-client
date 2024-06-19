import { AiFillDelete } from "react-icons/ai";
import useMenu from "../../Hooks/useMenu";
import Title from "../Home/Title";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import axiosSecoure from "../../Hooks/axiosSecoure";
import { Link } from "react-router-dom";

const ManageItem = () => {
    const [menu,setReload,reload] = useMenu();
    const axiosURL = axiosSecoure();

    async function handleDelete(id) {
        console.log("Deleting ID:", id); // Log the ID being deleted
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {


                try {
                    const res = await axiosURL.delete(`/menu/${id}`);
                    console.log("Delete Response:", res.data)
                    if (res.data.deletedCount > 0) {
                        setReload(!reload)
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    } else {
                        Swal.fire({
                            title: "Error!",
                            text: "No file was deleted. Please check the ID and try again.",
                            icon: "error"
                        });
                    }
                } 


                catch (error) {
                    console.error("There was an error deleting the item:", error);
                    Swal.fire({
                        title: "Error!",
                        text: "There was a problem deleting your file.",
                        icon: "error"
                    });
                }
            }
        });
    }

    return (
        <div>
            <Title subTitle={'Hurry up!'} mainTitle={'MANAGE ALL ITEMS'}></Title>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>ITEM IMAGE</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>ACTION</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {menu?.map((item, i) => (
                                <tr key={item._id}>
                                    <th>{i + 1}</th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item?.image} />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p>{item?.name}</p>
                                    </td>
                                    <td>{item?.price}$</td>
                                    <td>
                                       <Link to={`/dashboard/Update/${item._id}`}><button className="btn btn-ghost btn-xs bg-orange-400"><FaEdit /></button></Link>
                                    </td>
                                    <td>
                                        <button className="btn btn-ghost btn-xs" onClick={() => handleDelete(item._id)}><AiFillDelete /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItem;
