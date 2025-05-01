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
            <main className='grid grid-cols-12 gap-5 w-11/12 mx-auto my-10'>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <LeftSideNav/>
                </aside>
                <section className='col-span-6'>
                    <Outlet/>
                </section>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <RightSideNav/>
                </aside>
                
            </main>
        </div>
    );
};

export default Root;