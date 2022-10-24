import React from "react";
import Title from "../Title/Title";
import style from "./Brands.module.css"


const Brands = () => {
    return (
        <main className={style.brands}>
            <aside className={style.title}>
                <Title title="Brands We Work With" />
            </aside>

            <div className={style.item1}><img src="img/brand1.png" alt=""/></div>
            <div className={style.item2}><img src="img/brand2.png" alt=""/></div>
            <div className={style.item3}><img src="img/brand3.png" alt=""/></div>
            <div className={style.item4}><img src="img/brand4.png" alt=""/></div>
        </main>
    )
}

export default Brands