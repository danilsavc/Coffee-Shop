import Header from "../Header/Header"
import React from 'react';
import Ngopi from "../Ngopi/Ngopi";
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