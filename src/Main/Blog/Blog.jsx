import React from "react";
import style from "./Blog.module.css"
import BlogItem from "./BlogItem/BlogItem";
import BlogWidth from "./BlogWidth/BlogWidth";
import Title from "../Title/Title";
import blog2 from "./../../img/blog2.png"
import blog3 from "./../../img/blog3.png"
import blog4 from "./../../img/blog4.png"

const Blog = () => {
    return (
        <main className={style.blog}>
            <aside className={style.title}>
                <Title title="Blog"/>
            </aside>

            <div className={style.blogs}>
                <div className={style.blog_width}><BlogWidth /></div>
                <div className={style.item1}><BlogItem img={blog2}/></div>
                <div className={style.item2}><BlogItem img={blog3}/></div>
                <div className={style.item3}><BlogItem img={blog4}/></div>
            </div>
            
        </main>
    )
}

export default Blog