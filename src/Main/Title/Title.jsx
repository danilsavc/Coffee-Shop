import React from "react";
import style from "./Title.module.css"

const Title = (pops) => {
    return (
        <div className={style.title}>
            <div className={style.hr1}></div>
            <span className={style.span}>{pops.title}</span>
            <div className={style.hr2}></div>
        </div>
    )
}

export default Title