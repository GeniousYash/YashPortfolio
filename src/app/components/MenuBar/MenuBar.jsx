import React from "react";
import Link from "next/link";
import "./MenuBar.css";
import MenuBtn from "../MenuBtn/MenuBtn";

const MenuBar = ({ isOpen, toggleMenu, closeMenu }) => {
    return (
        <div className="menu-bar">
            <div className="menu-toggle-wrapper">
                <MenuBtn isOpen={isOpen} toggleMenu={toggleMenu} />
            </div>

            <div className="logo" onClick={closeMenu}>
                <Link href="/">Yash Singh</Link>
            </div>

            <div className="portfolio-year">
                <a href="/CVFolder/CV-YashSinghMERNStack.pdf" download="CV-YashSinghMERNStack"><p>CV-Download</p></a>
            </div>
        </div>
    );
};

export default MenuBar;
