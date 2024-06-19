import { useQuery } from "@tanstack/react-query";
import axiosUrl from "./axiosUrl";
// import { useState } from "react";
import useAuth from "./useAuth";

const useCartData = () => {
    const axiosBase = axiosUrl();
    // const [carts, setCarts] = useState([]);
    const { user } = useAuth();

    const { refetch , data : carts=[]} = useQuery({
        queryKey: ['card',user?.email],
        queryFn: async() => {
            const res= await axiosBase.get(`/card?email=${user?.email}`)
            return res.data
        }
    })
   

    return [carts, refetch]
};

export default useCartData;