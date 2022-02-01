import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import style from '../../styles/modules//dualDiv.module.scss';
import { BsFillStarFill } from "react-icons/bs";


const DualSlider = () => {
    return (
        <div className={style.DualSlider_container}>
            <div className={style.left_div}>
                <div className={style.title_div}>
                    <h2>New Product</h2>
                    <div className={style.controller}>
                        <button><FiChevronLeft /></button>
                        <span>|</span>
                        <button><FiChevronRight /></button>
                    </div>
                </div>

                {/* content */}
                <div>
                    {/* card */}
                    <div>
                        <div>
                            <Image src="/static/images/img1.webp" alt="" width={100} height={100} />
                        </div>
                        <p>Lorem, ipsum dolor.</p>
                        <div>
                            <p>$100.00</p>
                            <span>$120.00</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.right_div}>
                <div className={style.title_div}>
                    <h2>Deal Of The Day</h2>
                    <div className={style.controller}>
                        <button><FiChevronLeft /></button>
                        <span>|</span>
                        <button><FiChevronRight /></button>
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

                    <div className={style.dualSlider_container_content_img}>
                        <Image src="/static/images/img1.webp" layout="responsive" width="100%" height="100%" alt="" />
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

                            <div>

                                <div>
                                    <span>5096</span>
                                    <p>Days</p>
                                </div>
                                <div>
                                    <span>00</span>
                                    <p>HRS</p>
                                </div>
                                <div>
                                    <span>11</span>
                                    <p>mins</p>
                                </div>
                                <div>
                                    <span>18</span>
                                    <p>secs</p>
                                </div>


                            </div>


                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DualSlider;