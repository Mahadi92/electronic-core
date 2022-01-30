import React, { useState } from 'react';
import style from "../../styles/modules/navbar.module.scss";
import { FaShoppingCart } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import Image from 'next/image';
import Link from "next/link";
import navbarData from '../../data/global/navbarData.json';
import { useRouter } from 'next/router';
;




const Navbar = () => {

    const [language, setLanguage] = useState("EN")


    return (
        <div className={style.nav_container}>

            {/* Top black navbar */}
            <div className={style.top_nav}>
                <div className={style.top_nav_container}>
                    <div>
                        <div>
                            <select name="language" id="topNavLang">
                                <option value="en">EN</option>
                                <option value="EN2">EN2</option>
                                <option value="EN3">EN3</option>
                                <option value="EN4">EN4</option>
                            </select>
                        </div>
                        <div>
                            <select name="currency" id="topNavCurrency">
                                <option value="usd">usd</option>
                                <option value="gbp">gbp</option>
                                <option value="eur">eur</option>
                            </select>
                        </div>
                        <p>Welcome to Complex store!</p>
                    </div>
                    <div className={style.top_nav_action_container}>
                        <button>My Account</button>
                        <button>Wish List</button>
                        <button>My Cart</button>
                        <button>Checkout</button>
                    </div>
                </div>
            </div>

            {/* Search container  */}
            <div className={style.search_container}>
                <div className={style.search_container_img}>
                    <Image src="/static/logo.png" alt="logo" width="120" height="80" />
                </div>
                <form className={style.search_container_form}>
                    <select>
                        <option value="opt1">All categories</option>
                        <option value="opt2">Option 2</option>
                        <option value="opt3">Option 3</option>
                        <option value="opt4">Option 4</option>
                        <option value="opt5">Option 5</option>
                    </select>
                    <input type="search" placeholder="Search here..." />
                    <button type="submit">Search</button>
                </form>

                <div className={style.search_container_cartIco}>
                    <FaShoppingCart />
                    <span>0</span>
                    <p>Your Cart</p>
                </div>

            </div>

            {/* Nav Items */}
            <div>
                <Nav />
            </div>

        </div>
    );
};


const Nav = () => {
    const location = useRouter()

    return (
        <nav className={style.navbar}>
            <div>
                <select name="" id="">
                    <option value="">items1</option>
                    <option value="">items2</option>
                    <option value="">items3</option>
                    <option value="">items4</option>
                    <option value="">items5</option>
                </select>
            </div>
            <div>
                {navbarData.map((link, i) => {

                    let activeLink = false;
                    if (location.pathname !== "/") {
                        activeLink = link.linkDropdown.some(data => data.linkAddress.includes(location.pathname))
                    } else {
                        activeLink = false;
                    }

                    return (
                        <div key={i} className={style.dropdown}>
                            {link.linkDropdown === "" ? (
                                <Link href={link.linkAddress} className={style.dropbtn}>
                                    {link.linkName}
                                </Link>
                            ) : (
                                <div>
                                    {/* {console.log(location.pathname, link.linkAddress)} */}
                                    <>
                                        <Link href={link.linkAddress}>
                                            <a className={location.pathname === link.linkAddress || activeLink ? style.activeDropBtn : style.dropbtn}>
                                                {link.linkName}
                                                {link.linkDropdown.length > 0 &&
                                                    <FiChevronDown />
                                                }
                                            </a>
                                        </Link>
                                    </>
                                </div>
                            )
                            }
                            <div className={style.dropdown_content}>
                                <div className={style.invisibleMargin}></div>
                                <div className={style.dropdown_parent}>
                                    {link.linkDropdown.length !== 0 &&
                                        link.linkDropdown.map((data, i) => {
                                            return (
                                                <div key={i} className="">
                                                    <Link href={data.linkAddress}>
                                                        {data.linkName}
                                                    </Link>
                                                </div>
                                            );
                                        })}
                                </div>
                            </div>
                        </div>
                    );
                })}

            </div>
        </nav>
    )
}





export default Navbar;