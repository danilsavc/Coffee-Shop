import React from "react";
import Title from "../Title/Title";
import style from "./Brands.module.css"
import brand1 from "../../img/brand1.png"
import brand2 from "../../img/brand2.png"
import brand3 from "../../img/brand3.png"
import brand4 from "../../img/brand4.png"

const Brands = () => {
    return (
        <main className={style.brands}>
            <aside className={style.title}>
                <Title title="Brands We Work With" />
            </aside>

            <div className={style.item1}><img src={brand1} alt=""/></div>
            <div className={style.item2}><img src={brand2} alt=""/></div>
            <div className={style.item3}><img src={brand3} alt=""/></div>
            <div className={style.item4}><img src={brand4} alt=""/></div>
        </main>
    )
}

export default Brands