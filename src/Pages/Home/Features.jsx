import Title from "./Title";
import img from "../../assets/home/featured.jpg"
import "./feature.css"

const Features = () => {
    return (
        <div className="my-20 featureItem bg-fixed">

            <div className="bg-gradient-to-r from-[#000000AC] to-[#00000066] text-white">
                <div className="max-w-5xl mx-auto py-16">
                    <Title subTitle={'Check it out'} mainTitle={'FROM OUR MENU'} />

                    <div className="flex items-center gap-10">

                        <div>
                            <img src={img} alt="" />
                        </div>

                        <div className="space-y-1">
                            <h1 className="text-xl">March 20, 2023</h1>
                            <h2 className="text-xl">WHERE CAN I GET SOME?</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                            <button className="btn btn-outline text-white border-0 border-b-4">Read more</button>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default Features;