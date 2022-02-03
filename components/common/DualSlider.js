import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import style from '../../styles/modules//dualDiv.module.scss';
import { BsFillStarFill } from "react-icons/bs";
import { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";


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
                <div className={style.title_div}>
                    <p>New Product</p>
                    <div className={style.controller}>
                        <button><FiChevronLeft /></button>
                        <span>|</span>
                        <button><FiChevronRight /></button>
                    </div>
                </div>

                {/* content */}
                <div className={style.product_card_container}>
                    {/* card */}
                    <div className={style.product_card}>
                        <div>
                            <Image src="/static/images/img1.webp" alt="" width={100} height={100} />
                        </div>
                        <div className={style.product_card_content}>
                            <p>Lorem, ipsum dolor.</p>
                            <div>
                                <p>$100.00</p>
                                <span>$120.00</span>
                            </div>
                        </div>
                    </div>
                    <div className={style.product_card}>
                        <div>
                            <Image src="/static/images/img1.webp" alt="" width={100} height={100} />
                        </div>
                        <div className={style.product_card_content}>
                            <p>Lorem, ipsum dolor.</p>
                            <div>
                                <p>$100.00</p>
                                <span>$120.00</span>
                            </div>
                        </div>
                    </div>
                    <div className={style.product_card}>
                        <div>
                            <Image src="/static/images/img1.webp" alt="" width={100} height={100} />
                        </div>
                        <div className={style.product_card_content}>
                            <p>Lorem, ipsum dolor.</p>
                            <div>
                                <p>$100.00</p>
                                <span>$120.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.right_div}>
                <div className={style.title_div}>
                    <p>Deal Of The Day</p>
                    <div className={style.controller}>
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
                        <SwiperSlide>
                            <div className={style.dualSlider_container_content_slider}>
                                <div className={style.dualSlider_container_content_img}>
                                    <img src="/static/images/img1.webp" alt="" />
                                </div>
                                <div className={style.dualSlider_container_content_box}>
                                    <h3 className={style.content_box_heading}>Lorem, ipsum dolor.</h3>
                                    <div className={style.content_box_rating}>
                                        <span><BsFillStarFill /></span>
                                        <span><BsFillStarFill /></span>
                                        <span><BsFillStarFill /></span>
                                        <span><BsFillStarFill /></span>
                                        <span><BsFillStarFill /></span>
                                    </div>
                                    <div>
                                        <div className={style.content_box_price}>
                                            <h3>$200.00</h3>
                                            <h3>$234.00</h3>
                                        </div>

                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, nihil.</p>

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
                        <SwiperSlide>
                            <div className={style.dualSlider_container_content_slider}>
                                <div className={style.dualSlider_container_content_img}>
                                    <img src="/static/images/img1.webp" alt="" />
                                </div>
                                <div className={style.dualSlider_container_content_box}>
                                    <h3 className={style.content_box_heading}>Lorem, ipsum dolor.</h3>
                                    <div className={style.content_box_rating}>
                                        <span><BsFillStarFill /></span>
                                        <span><BsFillStarFill /></span>
                                        <span><BsFillStarFill /></span>
                                        <span><BsFillStarFill /></span>
                                        <span><BsFillStarFill /></span>
                                    </div>
                                    <div>
                                        <div className={style.content_box_price}>
                                            <h3>$200.00</h3>
                                            <h3>$234.00</h3>
                                        </div>

                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, nihil.</p>

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

                    </Swiper>

                </div>

            </div>
        </div>
    );
};

export default DualSlider;