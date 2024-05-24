import { useQuery } from "@tanstack/react-query";
import axiosSecoure from "../../Hooks/axiosSecoure";
import { FiTrash } from "react-icons/fi";
import Swal from "sweetalert2";
import axiosUrl from "../../Hooks/axiosUrl";
import { FaUser } from "react-icons/fa";

const AllUsers = () => {
    const axiosURL = axiosSecoure();
    const axiosBase=axiosUrl()

    const { data: users = [] , refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosURL.get('/users')
            return res.data
        }
    })


    function handleDelete(id){
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

                axiosBase.delete(`/users/${id}`)
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


    function handleAdmin(id){

        axiosURL.patch(`/users/${id}`)
        .then(()=>{
            Swal.fire('admin updated done');
            refetch()
        })
        .catch(error=>{
            console.log(error)
        })

    }
    




    return (
        <div>
            <div className="flex items-center justify-evenly my-8 gap-10">
                <h1 className="text-3xl font-bold">all-users</h1>
                <h1 className="text-3xl font-bold">total users: {users.length}</h1>
            </div>


            {/* users table */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>EMAIL</th>
                            <th>ROLE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* TODO: */}
                        {
                            users?.map((user,i) => <tr key={user._id}>
                                <th>{i+1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                  {user.role==='admin'?'admin':<button className="btn btn-ghost btn-xs" onClick={()=>handleAdmin(user?._id)}>
                                    <FaUser/>
                                  </button>}
                                </td>
                                <td>
                                <button className="btn btn-ghost btn-xs" onClick={() => {
                                        handleDelete(user?._id)
                                    }}><FiTrash /></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default AllUsers;