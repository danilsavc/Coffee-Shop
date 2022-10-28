import React from 'react';
import style from './MenuItem.module.css';



const MenuItem = (props) => {
    return (
        <aside className={style.menu}>
            <div className={style.point}></div>
            <span className={style.name}>{props.name}</span>
            <span className={style.price}>{props.price}</span>
            <div className={style.plus}><p>+</p></div>
            <div className={style.minus}><p>-</p></div>
            <div className={style.count}>0</div>
        </aside>
    );
}

export default MenuItem;