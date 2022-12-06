import React from 'react';
import { Navbar } from './Navbar';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { Directory } from './Directory';
import { New } from './New';
import { Search } from './Search';

export const MainApp = () => {
    return <>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='directory' element={<Directory/>}/>
                <Route path='new' element={<New/>}/>
                <Route path='search' element={<Search/>}/>
                <Route path='*' element={<Navigate to='/directory'/>}/>
            </Routes>
        </BrowserRouter>
    </>
}