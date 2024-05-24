import Title from "./Title";
import Menu from "./Menu";
import useMenu from "../../Hooks/useMenu";

const OurMenu = () => {
    const [menu]=useMenu();
    const popular=menu.filter(data=>data.category==='popular')



    return (
        <div className="max-w-7xl mx-auto">

            <Title subTitle={'Check it out'} mainTitle={'FROM OUR MENU'} />

            <div className="grid md:grid-cols-2 gap-7 my-10">
                {popular?.map(data => <Menu key={data._id} data={data} />)}
            </div>

        </div>
    );
};

export default OurMenu;