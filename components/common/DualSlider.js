import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import style from '../../styles/modules//dualDiv.module.scss';
;


const DualSlider = () => {
    return (
        <div>
            <div className={style.left_div}>
                <div className={style.title_div}>
                    <h2>New Product</h2>
                    <div className={style.controller}>
                        <button><FiChevronLeft /></button>
                        <span>|</span>
                        <button><FiChevronRight /></button>
                    </div>
                </div>

                <div>
                    <div>
                        <div>
                            <Image src="" alt="" />
                        </div>
                        <p>Lorem, ipsum dolor.</p>
                        <div>
                            <p>$100.00</p>
                            <span>$120.00</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default DualSlider;