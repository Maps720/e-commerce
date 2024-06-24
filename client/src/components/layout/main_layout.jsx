import React from 'react'
import Sidebar from './sidebar/sidebar'
import Header from './header/header'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
    return (
        <div className='h-screen flex w-full flex-col bg-white'>
            <Header />
            <div className='flex flex-1 overflow-hidden'>
                <Sidebar />
                <div className={`overflow-hidden`}>
                    {<Outlet />}
                </div>
            </div>
        </div>
    )
}
