import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import style from '../../styles/modules//dualSlider.module.scss';
import { BsFillStarFill } from "react-icons/bs";
import { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import dualsliderData from '../../data/home/dualsliderData.json';


const DualSlider = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isLoading, setIsLoading] = useState(true)


    const countDown = () => {
        const endDate = new Date("November 26, 2023 00:00:00").getTime();
        const today = new Date().getTime();

        const timeDiff = endDate - today;

        const seconds = 1000;
        const minutes = seconds * 60;
        const hours = minutes * 60;
        const days = hours * 24;

        let timeDays = Math.floor((timeDiff / days));
        let timeHours = Math.floor((timeDiff % days) / hours);
        let timeMinutes = Math.floor((timeDiff % hours) / minutes);
        let timeSeconds = Math.floor((timeDiff % minutes) / seconds);

        // timeHours = timeHours < 10 ? "0lll" + timeHours : timeHours;
        // timeMinutes = timeMinutes < 10 ? "0iii" + timeMinutes : timeMinutes;
        // timeSeconds = timeSeconds < 10 ? "0hhhh" + timeSeconds : timeSeconds;

        setDays(timeDays);
        setHours(timeHours);
        setMinutes(timeMinutes);
        setSeconds(timeSeconds);
        setIsLoading(false)

    }
    useEffect(() => {
        setInterval(countDown, 1000)
    })

    return (
        <div className={style.DualSlider_container}>
            <div className={style.left_div}>
                <div className="title_div">
                    <p>New Product</p>
                </div>

                {/* content */}
                <div className={style.product_card_container}>
                    {/* card */}
                    <div className={style.product_card}>
                        <div>
                            <Image src="/static/images/img1.webp" alt="" width={100} height={100} />
                        </div>
                        <div className={style.product_card_content}>
                            <p>Arcu Vitae Imperdiet</p>
                            <div>
                                <p>$100.00</p>
                                <span>$120.00</span>
                            </div>
                        </div>
                    </div>
                    <div className={style.product_card}>
                        <div>
                            <Image src="/static/images/img2.jpg" alt="" width={100} height={100} />
                        </div>
                        <div className={style.product_card_content}>
                            <p>Frankie Sweatshirt</p>
                            <div>
                                <p>$100.00</p>
                                <span>$120.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.right_div}>
                <div className="title_div">
                    <p>Deal Of The Day</p>
                    <div className="controller">
                        <button id="prevSlide"><FiChevronLeft /></button>
                        <span>|</span>
                        <button id="nextSlide"><FiChevronRight /></button>
                    </div>
                </div>

                {/* content */}
                <div className={style.dualSlider_container_content}>

                    <span className={style.ribbon}>
                        <span className={style.ribbon_inner_wrap}>
                            <span className={style.wdp_ribbon_border}></span>
                            <span className={style.ribbon_text}>Sale</span>
                        </span>
                    </span>

                    <Swiper
                        navigation={{
                            prevEl: "#prevSlide",
                            nextEl: "#nextSlide",
                        }}
                        modules={[Navigation]}
                        className="mySwiper">
                        {
                            dualsliderData.map((data, i) => {

                                const { img, heading, star, currentPrice, oldPrice, paragraph } = data;
                                return (
                                    <SwiperSlide key={i}>
                                        <div className={style.dualSlider_container_content_slider}>
                                            <div className={style.dualSlider_container_content_img}>
                                                <img src={img} alt="" />
                                            </div>
                                            <div className={style.dualSlider_container_content_box}>
                                                <h3 className={style.content_box_heading}>{heading}</h3>
                                                <div className={style.content_box_rating}>
                                                    <span><BsFillStarFill /></span>
                                                    <span><BsFillStarFill /></span>
                                                    <span><BsFillStarFill /></span>
                                                    <span><BsFillStarFill /></span>
                                                    <span><BsFillStarFill /></span>
                                                </div>
                                                <div>
                                                    <div className={style.content_box_price}>
                                                        <h3>{currentPrice}</h3>
                                                        <h3>{oldPrice}</h3>
                                                    </div>

                                                    <p>{paragraph}</p>

                                                    <div className={style.content_box_counter}>
                                                        <div>
                                                            <span>{days}</span>
                                                            <p>Days</p>
                                                        </div>
                                                        <div>
                                                            <span>{hours}</span>
                                                            <p>HRS</p>
                                                        </div>
                                                        <div>
                                                            <span>{minutes}</span>
                                                            <p>mins</p>
                                                        </div>
                                                        <div>
                                                            <span>{seconds}</span>
                                                            <p>secs</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }

                    </Swiper>

                </div>

            </div>
        </div>
    );
};

export default DualSlider;