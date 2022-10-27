import React from 'react';
import style from './Ngopi.module.css';
import Map from '../Map/Map';

import ngopi1 from '../img/Cafe/ngopi1.png'
import ngopi2 from '../img/Cafe/ngopi2.png'
import ngopi3 from '../img/Cafe/ngopi3.png'
import ngopi4 from '../img/Cafe/ngopi4.png'
import ngopi5 from '../img/Cafe/ngopi5.png'
import ngopi_brand from '../img/Cafe/ngopi_brand.png'


const Ngopi = () => {
    

    
    return (
        <main className={style.main}>
            <div className={style.explore}>
                <h1 className={style.title}>Ngopi Bung</h1>
                <p className={style.subtitle}>Jl. Prabu Geusan Ulun No.97, Kotakulon, Kec. <br />
                    Sumedang Sel., Kabupaten Sumedang, Jawa Barat 45311</p>
                <img src={ngopi1} alt="" className={style.img_item1}/>
                <img src={ngopi2} alt="" className={style.img_item2}/>
                <img src={ngopi3} alt="" className={style.img_item3}/>
                <img src={ngopi4} alt="" className={style.img_item4}/>
                <img src={ngopi5} alt="" className={style.img_item5}/>
            </div>

            <div className={style.brand}>
                <img src={ngopi_brand} alt="" className={style.img_item6}/>
                <h1 className={style.title_brand}>NGOPI BUNG</h1>
                <p className={style.subtitle_brand}>berdiri sejak tahun 2018,
                    kami mampu bersaing dengan bisnis bisnis lain di
                    sekitar majalengka.
                    kami menjual berbagai jenis kopi dengan harga yang
                    terjangkau. </p>
            </div>

            <div className={style.map}><Map /></div>
            
            <div className={style.button}>
                <a href="/#" className={style.text}>Pesan Sekarang</a>
            </div>
        </main>
        
    )
}



export default Ngopi;