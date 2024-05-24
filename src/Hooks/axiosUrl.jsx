import axios from "axios";


const axiosBase=axios.create({
    baseURL:'http://localhost:3000'
})

const axiosUrl = () => {
   return axiosBase
};

export default axiosUrl;