import React from "react";
import { NavLink } from "react-router-dom";
import style from "./CofePoint.module.css"


const CofePoint = (props) => {
    return (
        <div className={style.item}>
            <NavLink to={props.link} className={style.img}>
                <img src={props.img} alt="" className={style.img_content}/>
            </NavLink>
            
            <h1 className={style.h1}>{props.title}</h1>
            <div className={style.main_button}>
                <a href="/#" className={style.button}>Order Now</a>
            </div>
            <p className={style.p}>{props.subtitle}</p>
        </div>
    )
}

export default CofePoint