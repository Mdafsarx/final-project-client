import { Link } from "react-router-dom";
import Menu from "../Home/Menu";

const CategoryMenu = ({ items  , title }) => {

    return (
        <div>
            <div className="grid md:grid-cols-2 gap-7 py-20 max-w-7xl mx-auto">
                {items?.map(data => <Menu key={data._id} data={data} />)}
            </div>
            <Link to={`/ourShop/${title}`}>
                <button className="btn btn-outline text-black my-2 border-0 border-b-4">order now</button>
            </Link>
        </div>
    );
};

export default CategoryMenu;