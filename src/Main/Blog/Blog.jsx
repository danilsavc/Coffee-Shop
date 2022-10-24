import React from "react";
import style from "./Blog.module.css"
import BlogItem from "./BlogItem/BlogItem";
import BlogWidth from "./BlogWidth/BlogWidth";
import Title from "../Title/Title";

const Blog = () => {
    return (
        <main className={style.blog}>
            <aside className={style.title}>
                <Title title="Blog"/>
            </aside>

            <div className={style.blogs}>
                <div className={style.blog_width}><BlogWidth /></div>
                <div className={style.item1}><BlogItem /></div>
                <div className={style.item2}><BlogItem /></div>
                <div className={style.item3}><BlogItem /></div>
            </div>
            
        </main>
    )
}

export default Blog