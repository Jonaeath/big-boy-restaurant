import React from 'react';
import NavBar from '../../SharedFile/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../../SharedFile/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;