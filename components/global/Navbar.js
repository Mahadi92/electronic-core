import React, { useState } from 'react';
import style from "../../styles/modules/navbar.module.scss";
import { FaShoppingCart } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import Image from 'next/image';
import Link from "next/link";
import navbarData from '../../data/global/navbarData.json';




const Navbar = () => {

    return (
        <div className={style.nav_container}>

            {/* Top black navbar */}
            <div className={style.top_nav}>
                <div className={style.top_nav_container}>
                    <div className={style.top_nav_welcome}>
                        <select name="language" id="topNavLang">
                            <option value="en">EN</option>
                            <option value="EN2">EN2</option>
                            <option value="EN3">EN3</option>
                            <option value="EN4">EN4</option>
                        </select>
                        <select name="currency" id="topNavCurrency">
                            <option value="usd">usd</option>
                            <option value="gbp">gbp</option>
                            <option value="eur">eur</option>
                        </select>
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
                    <div className={style.search_container_searchBox_select}>
                        <select>
                            <option value="opt1">All categories</option>
                            <option value="opt2">Option 2</option>
                            <option value="opt3">Option 3</option>
                            <option value="opt4">Option 4</option>
                            <option value="opt5">Option 5</option>
                        </select>
                    </div>
                    <div className={style.search_container_searchBox_search}>
                        <input type="search" placeholder="Search here..." />
                        <button type="submit">Search</button>
                    </div>
                </form>

                <div className={style.search_container_cartIco}>
                    <button>
                        <FaShoppingCart />
                        <span>0</span>
                    </button>
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
            <div className={style.nav_items_container}>
                {navbarData.map((link, i) => {
                    return (
                        <div key={i} className={style.nav_items}>
                            {!link.linkDropdown.length ? (
                                <Link href={link.linkAddress}>
                                    <a className={style.nav_item}>
                                        {link.linkName}
                                    </a>
                                </Link>
                            ) : (
                                <div>
                                    <>
                                        <Link href={link.linkAddress}>
                                            <a className={style.nav_item}>
                                                {link.linkName}
                                                <FiChevronDown />
                                            </a>
                                        </Link>
                                        <div className={style.nav_dropdown_container}>
                                            <div className={style.dropdown_parent}>
                                                {link.linkDropdown.length !== 0 &&
                                                    link.linkDropdown.map((data, i) => {
                                                        return (
                                                            <div key={i} className="">
                                                                <Link href={data.linkAddress}>
                                                                    <a className={style.drop_nav_item}>
                                                                        {data.linkName}
                                                                    </a>
                                                                </Link>
                                                            </div>
                                                        );
                                                    })}
                                            </div>
                                        </div>
                                    </>
                                </div>
                            )
                            }
                        </div>
                    );
                })}

            </div>
        </nav>
    )
}





export default Navbar;