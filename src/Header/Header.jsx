import React from "react";
import style from "./Header.module.css"

const Header = () => {
    return (
        <header className={style.header}>
            <a href="/#" className={style.header_a}>
                <img src="img/logo.png" alt="" />
            </a>

            <nav className={style.header_nav}>
                <a href="/#" className={style.header_nav_link}>Home</a>
                <a href="/#" className={style.header_nav_link}>Explore</a>
                <a href="/#" className={style.header_nav_link}>Blog</a>
                <a href="/#" className={style.header_nav_link}>Contact us</a>
            </nav>

            <div className={style.header_reg}>
                <a href="/#">
                    <div className={style.header_reg_button}>
                        <span>Sign up / Login</span>
                    </div>
                </a>
            </div>

            <div className={style.header_text}>
                <h1 className={style.header_title}>Power up with coffee</h1>
                <span className={style.header_subtitle}>Nikmati hari - hari anda dengan secangkir kopi.</span>
                <div className={style.header_button}>
                    <a href="/#" className={style.button}>Explore Coffee Shop</a>
                </div>
            </div>

        </header>
    )
}

export default Header