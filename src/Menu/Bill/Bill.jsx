import React from 'react'
import style from './Bill.module.css'

import bag from './../../img/bag.svg'

const Bill = ({name}) => {

    return (
        <div className={style.bill}>
            <h1 className={style.title}>YOUR CRAFT</h1>
            <img src={bag} className={style.img} alt="" width={50} height={50}/>
            <span className={style.subtotal}>Subtotal</span>
            <span className={style.subtotalPrice}>0K</span>
            <span className={style.shipping}>Shipping</span>
            <span className={style.shippingPrice}>10K</span>
            <span className={style.total}>Total Price</span>
            <span className={style.totalPrice}>0K</span>
            <div className={style.takeaway}><span>Takeaway</span></div>
            <div className={style.dinin}><span>Din in</span></div>
            <div className={style.proceed}><span>Proceed to Checkout</span></div>
        </div>
    );
}

export default Bill;