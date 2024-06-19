import { useQuery } from "@tanstack/react-query";
import axiosSecoure from "../../Hooks/axiosSecoure";
import useAuth from "../../Hooks/useAuth";

const PaymentHistory = () => {
    const axiosURL = axiosSecoure();
    const { user } = useAuth()

    const { data = [] } = useQuery({
        queryKey: ['payment-history'],
        queryFn: async () => {
            const res = await axiosURL(`/payment/${user?.email}`)
            return res.data
        }
    })

    return (
        <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold text-center p-8">Total payment {data.length}</h1>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Email</th>
                                <th>Total price</th>
                                <th>transId</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map((payment,i)=><tr key={payment._id}>
                                <th>{i+1}</th>
                                <td>{payment?.email}</td>
                                <td>{payment?.price}</td>
                                <td>{payment?.tId}</td>
                                <td>{payment?.date}</td>
                            </tr>)}
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;