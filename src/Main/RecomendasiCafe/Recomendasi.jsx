import React from "react";
import Title from "../Title/Title";
import CofePoint from "./CofePoint/CofePoint";
import style from "./Recomendasi.module.css"

const Recomendasi = () => {
    return (
        <main className={style.main}>
            <aside className={style.searchBar}>
                <div className={style.title}>
                    <Title title="Recomendasi"/>
                </div>
                <div className={style.search}>
                    <input className={style.input} type="search" placeholder="Search"/>
                    <img src="img/search.png" alt="" className={style.img} width="19px" height="19px"/>
                </div>
            </aside>
            
            <div className={style.items}>
                <div className={style.item1}><CofePoint img="img/point1.png" title="Plumeria Cafe" subtitle="Jl. Cikuda No.37  Jatinangor"/></div>
                <div className={style.item2}><CofePoint img="img/point2.png" title="Ngopi Bung" subtitle="Jl. Prabu Geusan Ulun No.97, Regol Wetan"/></div>
                <div className={style.item3}><CofePoint img="img/point3.png" title="Nyusu Doloe" subtitle="Jl. Pangeran Santri No.82, Kotakulon"/></div>
                <div className={style.item4}><CofePoint img="img/point4.png" title="Banyu Biru" subtitle="Jl. Cikeruh, Kec. Jatinangor"/></div>
            </div>
            
        </main>
    )
}

export default Recomendasi