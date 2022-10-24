import React from "react";
import style from "./Footer.module.css"

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.footer_bar}>
                <div className={style.title}>
                    <div className={style.hr1}></div>
                    <span className={style.span}>Get in Touch with Us</span>
                    <div className={style.hr2}></div>
                </div>  

                <nav className={style.navigation}>
                    <h1 className={style.title_nav}>Navigation</h1>
                    <a href="/#" className={style.item1_1}>Home</a>
                    <a href="/#" className={style.item1_2}>Explore</a>
                    <a href="/#" className={style.item1_3}>Blog</a>
                    <h1 className={style.title_blog}>Blog</h1>
                    <a href="/#" className={style.item2_1}>Recent</a>
                    <a href="/#" className={style.item2_2}>Popular</a>
                    <a href="/#" className={style.item2_3}>Oldest</a>
                    <h1 className={style.title_about}>About Us</h1>
                    <a href="/#" className={style.item3_1}>Promotions</a>
                    <a href="/#" className={style.item3_2}>Customer Care</a>
                    <a href="/#" className={style.item3_3}>Legal Information</a>
                    <a href="/#" className={style.item3_4}>Achievements </a>
                    <h1 className={style.title_follow}>Follow Us</h1>
                    <div className={style.messengers}>
                        <a href="/#"><img src="img/insta.png" alt="" /></a>
                        <a href="/#"><img src="img/facebook.png" alt="" /></a>
                        <a href="/#"><img src="img/twitter.png" alt="" /></a>
                    </div>
                </nav>

                <div className={style.hr3}></div>
                <span className={style.right}>&copy; KuyNgopi. All Rights Reserved</span>
            </div>
        </footer>
    )
}

export default Footer