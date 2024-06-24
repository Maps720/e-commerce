import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useAppContext } from '../app_context/context'
import axios from 'axios'
import { serverName } from '../server/serverName'

export default function Login() {
    const navigate = useNavigate()
    const { sizeSmall } = useAppContext()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false);
    const [responded, setResponded] = useState(false);
    const [message, setMessage] = useState('')

    const send = async (event) => {
        event.preventDefault();
        setResponded(false);
        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };


            const { data } = await axios.post(
                `${serverName}/api/user/login`,
                { email, password },
                config
            );

            localStorage.setItem("userInfo", JSON.stringify(data));
            setLoading(false);
            setResponded(true);
            navigate('/')
        } catch (error) {
            setMessage(error.response.data.message)
            setLoading(false);
            setResponded(true);
        }
    }

    return (
        <>
            <div className={`flex ${sizeSmall ? 'w-4/5 flex-col' : 'w-2/3'} rounded-md shadow-md overflow-hidden`}>
                <div className='flex flex-1 bg-gray-400 text-white flex-col justify-center items-center'>
                    <img
                        src={logo}
                        className={`overflow-hidden ${sizeSmall ? 'w-28' : 'w-36'} py-3`}
                        alt="logo"
                    />
                    <div className="flex flex-col justify-center items-center text-center w-full mb-4">
                        <h1 className={`${sizeSmall ? 'text-xl' : 'text-2xl'} font-bold`}>
                            ZamShop.com
                        </h1>
                    </div>
                </div>
                <form className='flex flex-1 p-4 flex-col bg-white' onSubmit={send}>
                    <div className="flex justify-center items-center w-full">
                        <h1 className='text-lg text-gray-800 font-[500]'>
                            LOG IN
                        </h1>
                    </div>
                    <div className='my-2 w-full'>
                        <div className='w-full flex flex-col mb-2 text-red-400'>
                            <span>{responded && (message)}</span>
                        </div>
                        <div className='w-full flex flex-col mb-2'>
                            <label className={`${sizeSmall ? 'text-sm' : 'text-md'} text-gray-800 font-[500] mb-1`}>
                                Email
                            </label>
                            <input className={`border-2 rounded-sm p-1`} placeholder='Enter your email address' required
                                value={email} type='email'
                                onChange={(text) => {
                                    setEmail(text.target.value)
                                }} />
                        </div>
                        <div className='w-full flex flex-col mt-2'>
                            <label className={`${sizeSmall ? 'text-sm' : 'text-md'} text-gray-800 font-[500] mb-1`}>
                                Password
                            </label>
                            <input className={`border-2  rounded-sm p-1`} placeholder='Password'
                                value={password}
                                type='password' required
                                onChange={(text) => {
                                    setPassword(text.target.value)
                                }}
                            />
                        </div>
                    </div>
                    <div className='text-xs mt-1'>
                        <p>Forgot your password? <Link to={`forgot`} className='text-blue-500'>click here</Link></p>
                    </div>
                    <div className='flex text-md mt-4 items-center'>
                        <button className={`
                        bg-blue-400 rounded-md shadow-md w-24 mx-3 py-1 px-1 text-white hover:bg-blue-600`}
                            type="submit" disabled={loading}
                        >
                            {loading ? 'Loading' : 'Log In'}
                        </button>
                        <Link to={`signup`}>
                            <button className={`
                        bg-green-400 rounded-md shadow-md w-24 mx-3 py-1 px-1 text-white hover:bg-green-600`}
                            >
                                Sign Up
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    )
}
