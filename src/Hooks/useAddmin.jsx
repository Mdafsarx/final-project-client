import { useQuery } from "@tanstack/react-query";
import axiosSecoure from "./axiosSecoure";
import useAuth from "./useAuth";

const useAdmin = () => {
    const axiosURL=axiosSecoure()
    const {user}=useAuth()
    const {data:isAdmin , isPending}=useQuery({
        queryKey:['admin',user?.email],
        queryFn:async()=>{
        const res = await axiosURL(`/user/${user?.email}`)
        return res?.data?.admin
        
        }
    })



    return [isAdmin,isPending]
};

export default useAdmin;