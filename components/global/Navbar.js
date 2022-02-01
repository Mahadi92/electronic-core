import React, { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import Image from 'next/image';
import Link from "next/link";
import navbarData from '../../data/global/navbarData.json';




const Navbar = () => {

    return (
        <div className="nav_container">

            {/* Top black navbar */}
            <div className="top_nav">
                <div className="top_nav_container">
                    <div className="top_nav_welcome">
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
                    <div className="top_nav_action_container">
                        <button>My Account</button>
                        <button>Wish List</button>
                        <button>My Cart</button>
                        <button>Checkout</button>
                    </div>
                </div>
            </div>

            {/* Search container  */}
            <div className="search_container">
                <div className="search_container_img">
                    <Image src="/static/logo.png" alt="logo" width="120" height="80" />
                </div>

                <form className="search_container_form">
                    <div className="search_container_searchBox_select">
                        <select>
                            <option value="opt1">All categories</option>
                            <option value="opt2">Option 2</option>
                            <option value="opt3">Option 3</option>
                            <option value="opt4">Option 4</option>
                            <option value="opt5">Option 5</option>
                        </select>
                    </div>
                    <div className="search_container_searchBox_search">
                        <input type="search" placeholder="Search here..." />
                        <button type="submit">Search</button>
                    </div>
                </form>

                <div className="search_container_cartIco">
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

    const [openMobileNav, setOpenMobileNav] = useState(false);

    return (
        <>
            <nav className="navbar">
                <div>
                    <select name="" id="">
                        <option value="">items1</option>
                        <option value="">items2</option>
                        <option value="">items3</option>
                        <option value="">items4</option>
                        <option value="">items5</option>
                    </select>
                </div>
                <div className="nav_items_container">
                    {navbarData.map((link, i) => {
                        return (
                            <div key={i} className="nav_items">
                                {!link.linkDropdown.length ? (
                                    <Link href={link.linkAddress}>
                                        <a className="nav_item">
                                            {link.linkName}
                                        </a>
                                    </Link>
                                ) : (
                                    <div>
                                        <>
                                            <Link href={link.linkAddress}>
                                                <a className="nav_item">
                                                    {link.linkName}
                                                    <FiChevronDown />
                                                </a>
                                            </Link>
                                            <div className="nav_dropdown_container">
                                                <div className="dropdown_parent">
                                                    {link.linkDropdown.length !== 0 &&
                                                        link.linkDropdown.map((data, i) => {
                                                            return (
                                                                <div key={i} className="">
                                                                    <Link href={data.linkAddress}>
                                                                        <a className="drop_nav_item">
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


                <button className="bars" onClick={() => setOpenMobileNav(!openMobileNav)}>
                    <span className={`${openMobileNav ? 'active_bar ' : ''}bar-1`}></span>
                    <span className={`${openMobileNav ? 'active_bar ' : ''}bar-2`}></span>
                    <span className={`${openMobileNav ? 'active_bar ' : ''}bar-3`}></span>
                </button>


            </nav>

            {

                // // dropdown
                // openDropdown &&

                // <div className="container dropdownSta">

                //     <div className="dropdownContainer">
                //         <div className="typesDivChild1">
                //             <p>
                //                 <span>{navlinks[0].childs[0].parent}</span>
                //             </p>
                //             <ul>
                //                 {
                //                     navlinks[0].childs[0].childs.map((child, i) => {
                //                         return (
                //                             <li key={i}>
                //                                 <Link href={child.link} passHref>{child.title}</Link>
                //                             </li>
                //                         )
                //                     })
                //                 }
                //             </ul>
                //         </div>
                //         <div className={fourTypesDivs}>
                //             <div className={typesDiv}>
                //                 <p>
                //                     <span>{navlinks[0].childs[1].parent}</span>
                //                 </p>
                //                 <ul>
                //                     {
                //                         navlinks[0].childs[1].childs.map((child, i) => {
                //                             return (
                //                                 <li key={i}>
                //                                     <Link href={child.link} passHref>{child.title}</Link>
                //                                 </li>
                //                             )
                //                         })
                //                     }
                //                 </ul>
                //             </div>
                //             <div className={typesDiv}>
                //                 <p>
                //                     <span>{navlinks[0].childs[2].parent}</span>
                //                 </p>
                //                 <ul>
                //                     {
                //                         navlinks[0].childs[2].childs.map((child, i) => {
                //                             return (
                //                                 <li key={i}>
                //                                     <Link href={child.link} passHref>{child.title}</Link>
                //                                 </li>
                //                             )
                //                         })
                //                     }
                //                 </ul>
                //             </div>
                //             <div className={typesDiv}>
                //                 <p>
                //                     <span>{navlinks[0].childs[3].parent}</span>
                //                 </p>
                //                 <ul>
                //                     {
                //                         navlinks[0].childs[3].childs.map((child, i) => {
                //                             return (
                //                                 <li key={i}>
                //                                     <Link href={child.link} passHref>{child.title}</Link>
                //                                 </li>
                //                             )
                //                         })
                //                     }
                //                 </ul>
                //             </div>
                //             <div className={typesDiv}>
                //                 <p>
                //                     <span>{navlinks[0].childs[4].parent}</span>
                //                 </p>
                //                 <ul>
                //                     {
                //                         navlinks[0].childs[4].childs.map((child, i) => {
                //                             return (
                //                                 <li key={i}>
                //                                     <Link href={child.link} passHref>{child.title}</Link>
                //                                 </li>
                //                             )
                //                         })
                //                     }
                //                 </ul>
                //             </div>
                //         </div>
                //     </div>

                // </div>
            }


        </>
    )
}





export default Navbar;