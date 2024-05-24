import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Bistro from "./Bistro";
import Category from "./Category";
import Features from "./Features";
import OurMenu from "./OurMenu";
import TESTIMONIALS from "./TESTIMONIALS";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Main Project || Home </title>
            </Helmet>
            <Banner/>
            <Category/>
            <Bistro/>
            <OurMenu/>
            <Features/>
            <TESTIMONIALS/>
        </div>
    );
};

export default Home;