import React from 'react';
import Brands from '../Main/Brands/Brands';
import Bill from './Bill/Bill';
import style from './Menu.module.css';
import MenuItem from './MenuItem/MenuItem';

let CofeMenu = [
    {className: style.itme1, name: "Es Kopi Hitam Bung", price: "15K"},
    {className: style.item2, name: "Es Kopi Semalam Bung", price: "16K"},
    {className: style.item3, name: "Es Kopi Jowo Bung", price: "16K"},
    {className: style.item4, name: "Es Kopi Hitam Adulk", price: "13K"},
    {className: style.item5, name: "Es Kopi Karamel", price: "20K"},
    {className: style.item6, name: "Tahu Crispy Bung", price: "15K"},
    {className: style.item7, name: "Risoles Ngeri Bung", price: "15K"},
    {className: style.item8, name: "Cireng Crispy Bung", price: "15K"},
    {className: style.item9, name: "Roti Keju Coklat Bung", price: "13K"},
    {className: style.item10, name: "Siomay Oraits Bung", price: "20K"},
    {className: style.item11, name: "Cappucino", price: "15K"},
    {className: style.item12, name: "Hazelnut", price: "18K"},
    {className: style.item13, name: "Bung Greentea", price: "12K"},
    {className: style.item14, name: "Bung Taro", price: "12K"},
    {className: style.item15, name: "Bung Thaitea", price: "12K"},
    {className: style.item16, name: "Cafe Latte", price: "14K"},
]

let CofeMenuItems = CofeMenu.map(item => <div className={item.className}><MenuItem name={item.name} price={item.price}/></div>)


const Menu = () => {
    return (
        <main className={style.main}>
            <aside className={style.header}> 
                <h1 className={style.title}>Menu</h1>
                <p className={style.subtitle}>10:00 AM - 21:30 PM</p>
            </aside>
            <aside className={style.menu}>
                {CofeMenuItems}
                <aside className={style.bill}>
                    <Bill/>
                </aside>
            </aside>
            
            <Brands/>
        </main>
    );
}

export default Menu;