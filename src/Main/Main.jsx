import React from "react";
import Blog from "./Blog/Blog";
//import style from "./Main.module.css"
import Recomendasi from "./RecomendasiCafe/Recomendasi";

const Main = () => {
    return (
        <main>
            <Recomendasi />
            <Blog />
        </main>
        
    )
}

export default Main