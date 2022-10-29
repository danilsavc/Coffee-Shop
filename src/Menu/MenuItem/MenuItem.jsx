import React from 'react';
import style from './MenuItem.module.css';


const MenuItem = (props) => {
    const [count, setCount] = React.useState(0);

    const onClickPlus = () => {
        count < 300 ? setCount(count + Number(props.price)) : setCount(count)
    }

    const onClickMinus = () => {
        count > 0 ? setCount(count - props.price) : setCount(count)
    }

    return (
        <aside className={style.menu}>
            <div className={style.point}></div>
            <span className={style.name}>{props.name}</span>
            <span className={style.price}>{props.price}K</span>
            <div className={style.plus} onClick={onClickPlus}><p>+</p></div>
            <div className={style.minus} onClick={onClickMinus}><p>-</p></div>
            <div className={style.count}>{count}K</div>
        </aside>
    );
}

export default MenuItem;