import React from "react";
import style from "./BlogWidth.module.css"
import blog1 from "./../../../img/blog1.png"


const BlogWidth = () => {
    return (
        <aside className={style.blog}>
            <h1 className={style.item_title}>Long established</h1>
            <span className={style.item_subtitle}>It is a long established fact that a reader will be distracted <br /> by the readable content of a page when looking at its layout. <br /> The point of using Lorem Ipsum is that....</span>
            <img src={blog1} alt="" className={style.item_img}/>
            <div className={style.item_footer}>
                <a href="/#" className={style.item_more}>Read more</a>
                <span className={style.item_data}>May 20th 2020</span>
            </div>
        </aside>
    )
}

export default BlogWidth