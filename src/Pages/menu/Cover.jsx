import { Parallax } from 'react-parallax';

const Cover = ({ img, title, des }) => {
    return (


        <Parallax
            blur={{ min: -55, max: 50 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div>
                <div className="hero min-h-[600px]">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className=" bg-black bg-opacity-40 px-40 py-8">
                            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                            <p className="mb-5">{des}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;