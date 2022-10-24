import React from "react";
import Blog from "./Blog/Blog";
import Brands from "./Brands/Brands";
//import style from "./Main.module.css"
import Recomendasi from "./RecomendasiCafe/Recomendasi";

const Main = () => {
    return (
        <main>
            <Recomendasi />
            <Blog />
            <Brands />
        </main>
        
    )
}

export default Main