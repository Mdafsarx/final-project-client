/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import useAuth from "./useAuth";



const axiosURL=axios.create({
    baseURL:'http://localhost:3000',
})

const axiosSecoure = () => { 

    // const nav=useNavigate();
    // const {logout}=useAuth();


    // axiosURL.interceptors.request.use(function (config) {
    //     const token=localStorage.getItem('token')
    //     config.headers.authorization =token
    //     return config;
    //   }, function (error) {
    //     return Promise.reject(error);
    //   });


    //   axiosURL.interceptors.response.use(function (response) {
    //     return response;
    //   },async function (error) {
    //     // TODO:
    //     const status=error.response.status;
    //     if(status===401||status===403){
    //        nav('/');
    //      await  logout();
    //     }
    //     return Promise.reject(error);
    //   });




    return axiosURL
};



export default axiosSecoure;