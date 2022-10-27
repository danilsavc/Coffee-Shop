import Header from "../Header/Header"
import React from 'react';
import { Outlet } from "react-router-dom";


const Explore_Ngopi = () => {
    return (
        <div>
            <Header title="Explore"/>
            <Outlet/>
        </div>
    )
}

export default Explore_Ngopi