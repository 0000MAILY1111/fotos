import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import { LoginPage } from '../photos/pages/LoginPage'
import { EventosPage } from '../photos/pages/EventosPage'
import Navbar from '../photos/components/Navbar'
import { HomePage } from '../photos/pages/HomePage'

export const HomeRouter = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="home" element={<HomePage />} />
                <Route path="events" element={<EventosPage />} />
            </Routes>
        </>
    )
}

