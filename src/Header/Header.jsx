import React from "react";
import s from "./Header.module.css"
import logo from '../img/logo.png'


const Header = (props) => {
    return (
        <header className={s.main}>  
            <a href="/#" className={s.header_a}>
                <img src={logo} alt="" />
            </a>

            <nav className={s.header_nav}>
                <a href="/#" className={s.header_nav_link}>Home</a>
                <a href="/#" className={s.header_nav_link}>Explore</a>
                <a href="/#" className={s.header_nav_link}>Blog</a>
                <a href="/#" className={s.header_nav_link}>Contact us</a>
            </nav>

            <div className={s.header_reg}>
                <a href="/#">
                    <div className={s.header_reg_button}>
                        <span>Sign up / Login</span>
                    </div>
                </a>
            </div>

            <div className={s.header_text}>
                <h1 className={s.header_title}>{props.title}</h1>
                <span className={s.header_subtitle}>{props.subtitle}</span>
            </div>                
        </header>
    )
}

export default Header