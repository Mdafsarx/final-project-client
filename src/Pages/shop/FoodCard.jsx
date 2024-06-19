/* eslint-disable no-unused-vars */

import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useCartData from "../../Hooks/useCartData";

const FoodCard = ({ item }) => {
    const { name, recipe, image, price , _id} = item || {};
    const { user } = useAuth();
    const nav=useNavigate();
    const location=useLocation();
    const [,refetch]=useCartData()

    const handleAdd = (data) => {
        if (user && user.email) {
            const CardData={menuId:_id , email:user?.email,name,recipe,image,price:parseInt(price)}
            axios.post('http://localhost:3000/card',CardData)
            .then(data=>{
                console.log(data.data)
                refetch()
            })
            .catch(error=>console.log(error))
        }
        else {
            Swal.fire({
                title: "you are not login",
                text: "You want to login first!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes login"
            }).then((result) => {
                if (result.isConfirmed) {
                    nav('/login',{state:location.pathname})
                }
            });
        }

    }





    return (
        <div>
            <div className="card bg-base-100 shadow-xl h-[420px]">
                <p className="bg-gray-900 p-2 text-white absolute right-12 rounded top-12 ">${price}</p>
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions">
                        <button className="btn btn-outline text-black my-2 border-0 border-b-4 border-orange-400 bg-slate-100" onClick={() => {
                            handleAdd(item)
                        }}>Add to card</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;