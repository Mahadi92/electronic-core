// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";


const imgData = [
    "home_hero_banner1.webp", "home_hero_banner2.webp", "home_hero_banner3.webp"
]

const HomeHeroSlider = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                speed={500}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    imgData.map((data, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <div>
                                    <Image src={`/static/banners/${data}`} layout="responsive"
                                        width={`100w`}
                                        height={25} alt="" />
                                </div>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </div >
    );
};

export default HomeHeroSlider;