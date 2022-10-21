import React from "react";
import style from "./CofePoint.module.css"


const CofePoint = (props) => {
    return (
        <div className={style.item}>
            <img src={props.img} alt="" className={style.img} />
            <h1>{props.title}</h1>
            <div className={style.main_button}>
                <a href="/#" className={style.button}>Order Now</a>
            </div>
            <p>{props.subtitle}</p>
        </div>
    )
}

export default CofePoint