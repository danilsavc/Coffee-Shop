import React from "react";
import style from "./Blog.module.css"
import BlogWidth from "./BlogWidth/BlogWidth";

const Blog = () => {
    return (
        <main>
            <aside className={style.blog_span}>
                <div className={style.hr1}></div>
                <span className={style.title}>Blog</span>
                <div className={style.hr2}></div>
            </aside>

            <div className={style.blog_width}><BlogWidth /></div>
            
        </main>
    )
}

export default Blog