import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../login/Login';
import Profile from '../profile/Profile';

interface IProps {
    
}

function BaseWebRouter(props: IProps) {
    return (
        <BrowserRouter>

            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/profile' element={<Profile />} />
            </Routes>
        </BrowserRouter>
    );
}

export default BaseWebRouter;