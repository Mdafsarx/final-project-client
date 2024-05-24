import { Helmet } from "react-helmet-async";
import Cover from "./Cover";
import bg from "../../assets/menu/banner3.jpg"
import bg2 from "../../assets/menu/dessert-bg.jpeg"
import bg3 from "../../assets/menu/pizza-bg.jpg"
import bg4 from "../../assets/menu/salad-bg.jpg"
import bg5 from "../../assets/menu/soup-bg.jpg"
import useMenu from "../../Hooks/useMenu";
import Title from "../Home/Title";
import CategoryMenu from "./CategoryMenu";
const OurMenu = () => {
    const [menu] = useMenu();
    const offer = menu.filter(data => data.category === 'offered')
    const dessert = menu.filter(data => data.category === 'dessert')
    const pizza = menu.filter(data => data.category === 'pizza')
    const salad = menu.filter(data => data.category === 'salad')
    const soup = menu.filter(data => data.category === 'soup')


    return (
        <div>
            <Helmet>
                <title>Main Project || menu </title>
            </Helmet>

            <Cover img={bg} title={'OUR MENU'} des={'Would you like to try a dish?'} />


            <Title subTitle={"Don't miss"} mainTitle={"TODAY'S OFFER"} />

            <CategoryMenu items={offer}  title={'offer'}/>

            <Cover img={bg2} title={'DESSERTS'} des={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />

            <CategoryMenu items={dessert} title={'dessert'}/>

            <Cover img={bg3} title={'PIZZA'} des={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />

            <CategoryMenu items={pizza} title={'pizza'}/>

            <Cover img={bg4} title={'SALADS'} des={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />

            <CategoryMenu items={salad} title={'salad'}/>

            <Cover img={bg5} title={'SOUPS'} des={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />

            <CategoryMenu items={soup} title={'soup'}/>




        </div>
    );
};

export default OurMenu;