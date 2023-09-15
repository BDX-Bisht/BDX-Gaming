import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Profile } from './Profile';
import { Header } from './Header';
import { Login } from '../component/Login';
import { Signup } from '../component/Signup';

export const Router = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </>
    )
}
