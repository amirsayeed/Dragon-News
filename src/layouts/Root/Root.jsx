import React from 'react';
import { Outlet } from 'react-router';
import Header from "../../components/Header/Header";
import LatestNews from '../../components/LatestNews/LatestNews';
import Navbar from '../../components/Navbar/Navbar';

const Root = () => {
    return (
        <div>
            <header>
                <Header/>
                <LatestNews/>
                <Navbar/>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    );
};

export default Root;