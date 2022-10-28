import React from "react";
import Title from "../Title/Title";
import CofePoint from "./CofePoint/CofePoint";
import style from "./Recomendasi.module.css"
import point1 from "./../../img/point1.png"
import point2 from "./../../img/point2.png"
import point3 from "./../../img/point3.png"
import point4 from "./../../img/point4.png"
import search from "./../../img/search.png"

let cofepoint = [
    {id: 1, link: '/PLumeria-Cafe', img: point1, title: 'Plumeria Cafe', subtitle: 'Jl. Cikuda No.37  Jatinangor'},
    {id: 2, link: '/Ngopi-Bung', img: point2, title: 'Ngopi Bung', subtitle: 'Jl. Prabu Geusan Ulun No.97, Regol Wetan', to: "Ngopi-Bung/Menu"},
    {id: 3, link: '/Nyusu-Doloe', img: point3, title: 'Nyusu Doloe', subtitle: 'Jl. Pangeran Santri No.82, Kotakulon'},
    {id: 4, link: '/Banyu-Biru', img: point4, title: 'Banyu Biru', subtitle: 'Jl. Cikeruh, Kec. Jatinangor'},
]

let CofePointItems = cofepoint.map(item => <CofePoint link={item.link} img={item.img} title={item.title} subtitle={item.subtitle} to={item.to}/>)

const Recomendasi = () => {

    return (
        <main className={style.main}>
            <aside className={style.searchBar}>
                <div className={style.title}>
                    <Title title="Recomendasi"/>
                </div>
                <div className={style.search}>
                    <input className={style.input} type="search" placeholder="Search"/>
                    <img src={search} alt="" className={style.img} width="19px" height="19px"/>
                </div>
            </aside>
            
            <div className={style.items}>
                {CofePointItems}
            </div>
            
        </main>
    )
}

export default Recomendasi