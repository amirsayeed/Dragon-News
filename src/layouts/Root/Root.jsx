import React from 'react';
import { Outlet } from 'react-router';
import Header from "../../components/Header/Header";
import LatestNews from '../../components/LatestNews/LatestNews';
import Navbar from '../../components/Navbar/Navbar';
import LeftSideNav from '../../components/LeftSideNav/LeftSideNav';
import RightSideNav from '../../components/RightSideNav/RightSideNav';

const Root = () => {
    return (
        <div>
            <header>
                <Header/>
                <LatestNews/>
                <Navbar/>
            </header>
            <main className='grid grid-cols-12 gap-3 w-11/12 mx-auto'>
                <aside className='col-span-3'>
                    <LeftSideNav/>
                </aside>
                <section className='col-span-6'>
                    <Outlet/>
                </section>
                <aside className='col-span-3'>
                    <RightSideNav/>
                </aside>
                
            </main>
        </div>
    );
};

export default Root;