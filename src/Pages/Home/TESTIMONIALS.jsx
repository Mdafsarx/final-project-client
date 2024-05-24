import Title from "./Title";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import img from "../../assets/icon/Group (1).png"


/* eslint-disable react-refresh/only-export-components */
const TESTIMONIALS = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/review')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div className="max-w-7xl mx-auto my-24">

            <Title subTitle={'What Our Clients Say'} mainTitle={'TESTIMONIALS'} />

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
                {
                    data.map(test => <div key={test._id}>

                        <SwiperSlide>
                            <div className="flex flex-col items-center justify-center gap-5 ">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={test.rating}
                                    readOnly
                                />
                                <img src={img} alt="" />
                                <p className="text-center text-balance">Various version have evolved over the years, sometimes by accident, <br /> sometimes on purpose (injected humour and the like). It is <br /> a long established fact that a reader will be distracted <br /> by the readable content of a page when looking at its layout.</p>
                                <h1 className="text-3xl font-bold text-orange-400">{test.name}</h1>
                            </div>
                        </SwiperSlide>

                    </div>)
                }
            </Swiper>


        </div>
    );
};

export default TESTIMONIALS;