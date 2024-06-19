/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import axiosSecoure from "../../Hooks/axiosSecoure";
import { FaUser } from "react-icons/fa";
import { GrOrderedList } from "react-icons/gr";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';



const AdminHome = () => {

    const axiosURL = axiosSecoure()

    const { data: stats = {}, isPending } = useQuery({
        queryKey: ['admin-stats'],
        // enabled:
        queryFn: async () => {
            const res = await axiosURL('/admin-stats')
            return res.data
        }
    })





    // order stats

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };
    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
    const { data: order = [] } = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const res = await axiosURL('/order-stats')
            return res.data
        }
    })


    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const newData=order.map(data=>{
        return {name:data.category,value:data.revenue}
    })





    return (
        <div className="p-10 space-y-5 w-full">

            <h2 className="text-3xl font-bold text-blue-600 text-center">This is Admin Home</h2>

            <div className="flex justify-center">
                <div className="stats shadow w-2/3">

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <div className="stat-title">Revenue</div>
                        <div className="stat-value">{stats?.revenue}</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaUser />
                        </div>
                        <div className="stat-title">Users</div>
                        <div className="stat-value">{stats?.users}</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                        </div>
                        <div className="stat-title">Products</div>
                        <div className="stat-value">{stats.menuItem}</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <GrOrderedList />
                        </div>
                        <div className="stat-title">Orders</div>
                        <div className="stat-value">{stats.orders}</div>
                    </div>

                </div>
            </div>


            {/* recharts */}
            <div className="flex">

                {/*  */}
                <div className="w-1/2">
                    <BarChart
                        width={500}
                        height={300}
                        data={order}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {order.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>

                {/* pie chart */}
                <div className="w-1/2">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={400} height={400}>
                            <Pie
                                data={newData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {newData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>

            </div>

        </div>
    );
};

export default AdminHome;