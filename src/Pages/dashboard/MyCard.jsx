import { FiTrash } from "react-icons/fi";
import useCartData from "../../Hooks/useCartData";
import Swal from "sweetalert2";
import axiosUrl from "../../Hooks/axiosUrl";

const MyCard = () => {
    const [data,refetch] = useCartData()
    const totalPrice = data.reduce((p, c) => p + c.price, 0);
    const axiosBase = axiosUrl()

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosBase.delete(`/card/${id}`)
                    .then(result => {
                        console.log(result)
                        if (result.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
                    .catch(error => console.log(error))





            }
        });
    }



    return (
        <div>
            <div className="p-5 flex items-center justify-evenly gap-5">
                <h1 className="text-2xl font-bold">Item ({data.length})</h1>
                <h1 className="text-2xl font-bold">Total Price: ({totalPrice}$)</h1>
                <button className="btn btn-error text-white btn-sm">Pay</button>
            </div>


            {/* table */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}

                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            data?.map((card, i) => <tr key={i}>
                                <th>
                                    {i + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={card?.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <div className="font-bold">{card.name}</div>
                                    </div>
                                </td>
                                <td>{card?.price}$</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs" onClick={() => {
                                        handleDelete(card?._id)
                                    }}><FiTrash /></button>
                                </th>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>


        </div>
    );
};

export default MyCard;