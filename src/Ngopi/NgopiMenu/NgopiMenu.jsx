import React from 'react';
import Menu from '../../Menu/Menu';
import style from './NgopiMenu.module.css';



const NgopiMenu = () => {
    return (
        <main>
            <aside className={style.header}>
            <h1 className={style.title}>Ngopi Bung</h1>
            <span className={style.subtitle}>Jl. Prabu Geusan Ulun No.97, Kotakulon, Kec. Sumedang <br />
                                            Sel., Kabupaten Sumedang, Jawa Barat 45311</span>
            </aside>
            
            <Menu />
        </main>
    );
}

export default NgopiMenu;
