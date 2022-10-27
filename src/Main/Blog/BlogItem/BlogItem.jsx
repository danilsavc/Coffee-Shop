import React from "react";
import style from "./BlogItem.module.css"

const BlogItem = (props) => {
    return (
        <div className={style.item}>
            <img src={props.img} alt="" className={style.item_img}/>
            <h1 className={style.title}>long established</h1>
            <span className={style.subtitle}>It is a long established fact that <br />
                a reader will be distracted by <br />
                the readable content of a page <br />
                when looking at its layout. The <br />
                point of using Lorem Ipsum is <br />
                that....
            </span>
            <div className={style.item_footer}>
                <a href="/#" className={style.item_more}>Read more</a>
                <span className={style.item_data}>May 20th 2020</span>
            </div>
        </div>
    )
}

export default BlogItem