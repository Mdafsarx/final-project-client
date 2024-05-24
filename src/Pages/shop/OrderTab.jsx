import FoodCard from "./FoodCard";

const OrderTab = ({items}) => {
    return (
        <div className="grid md:grid-cols-4 gap-5">
            {
                items?.map(data => <FoodCard key={data._id} item={data} />)
            }
        </div>
    );
};

export default OrderTab;