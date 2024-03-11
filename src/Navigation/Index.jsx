import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {Header} from '../components/Header';
import Login from '../pages/Login';
import Home from '../pages/Home';


export const Navigation = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<Login/>} />
            </Routes>
        </>
    );
}