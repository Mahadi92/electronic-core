import React from 'react';
import style from '../../styles/modules/dualDiv.module.scss';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from 'next/image';
import { AiOutlineHeart } from "react-icons/ai";

const DualDiv = () => {
    return (
        <div className={style.dualDiv_container}>
            <div className={style.title_div}>
                <div className={style.title_content}>
                    <p>ELECTRONICS {"&"} COMPUTERS</p>
                    <ul>
                        <li>Shirt</li>
                        <li>Shirt</li>
                        <li>Shirt</li>
                    </ul>
                </div>
                <div className={style.controller}>
                    <div>
                        <button id="prevSlide"><FiChevronLeft /></button>
                        <span>|</span>
                        <button id="nextSlide"><FiChevronRight /></button>
                    </div>
                </div>
            </div>

            <div className={style.div_container}>
                <div className={style.left_div}>
                    <Image src="/static/banners/side_banner1.jpg" alt="" layout="responsive" width="70%" height="100%" />
                </div>
                <div className={style.right_div}>
                    <div className={style.product_card}>
                        <div className={style.product_card_img}>
                            <Image src="/static/images/img2.jpg" alt="" width="150" height="150" />
                        </div>
                        <div className={style.product_card_content}>
                            <h3>Lorem, ipsum.</h3>
                            <div className={style.product_card_price}>
                                <p>$50.00</p>
                                <span>$60.00</span>
                            </div>
                            <div className={style.product_card_but}>
                                <button className={style.btn_add_to_cart}>Add To Cart</button>
                                <button className={style.btn_add_to_favorite}><AiOutlineHeart /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DualDiv;