import React from 'react'
import { Outlet } from 'react-router-dom';
import login_bg from "../../assets/login.jpg";
import { useAppContext } from '../app_context/context';

export default function LoginLayout() {
    const { sizeSmall } = useAppContext()
    return (
        <div className="flex"
            style={{ backgroundImage: `url(${login_bg})`, backgroundSize: 'cover' }}>
            <div className={`${sizeSmall ? 'text-xs' : 'text-sm'} flex flex-1 w-full flex-col justify-center items-center h-screen`}>
                {<Outlet />}
                <div className={`flex mt-8 justify-center items-center text-white font-[500] `}>
                    <p>Copyright © 2024. All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}
