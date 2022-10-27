import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import React from 'react';


const Explore_Ngopi = () => {
    return (
        <div>
            <Header title="Power up with coffee" img="img/bcg_header.png"/>
            <Outlet />
        </div>
    )
}

export default Explore_Ngopi