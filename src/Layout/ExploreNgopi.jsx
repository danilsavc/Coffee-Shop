import Header from "../Header/Header"
import React from 'react';
import { Outlet } from "react-router-dom";


const ExploreNgopi = () => {
    return (
        <div>
            <Header title="Explore"/>
            <Outlet/>
        </div>
    )
}

export default ExploreNgopi