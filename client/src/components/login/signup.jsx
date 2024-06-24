import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppContext } from '../app_context/context'
import axios from 'axios';
import { serverName } from '../server/serverName';

export default function Signup() {
    const { sizeLarge, sizeSmall } = useAppContext()
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false);
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [email, setEmail] = useState('')
    const [responded, setResponded] = useState(false);
    const [message, setMessage] = useState('')

    const send = async (event) => {
        event.preventDefault();
        setLoading(true)
        setResponded(false);

        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };


            const { data } = await axios.post(
                `${serverName}/api/user/`,
                { fname, lname, phone, email, password },
                config
            );

            setLoading(false);
            setResponded(true);
            navigate('/login')
        } catch (error) {
            setMessage(error.response.data.message)
            setResponded(true);
            setLoading(false);
        }
    }
    return (
        <>
            <div className={`flex ${sizeSmall ? 'w-2/3' : 'w-1/3'} rounded-md shadow-md overflow-hidden`}>
                <form className='flex flex-1 p-4 flex-col bg-white' onSubmit={send}>
                    <div className="flex justify-center items-center w-full">
                        <h1 className='text-lg text-gray-800 font-[500]'>
                            SIGN IN
                        </h1>
                    </div>
                    <div className='my-2 w-full'>
                        <div className='w-full flex flex-col mb-2 text-red-400'>
                            <span>{responded && (message)}</span>
                        </div>
                        <div className='w-full flex flex-col mb-2'>
                            <label className={`${sizeSmall ? 'text-sm' : 'text-md'} text-gray-800 font-[500] mb-1`}>
                                First Name
                            </label>
                            <input className={`border-2 rounded-sm p-1`} placeholder='First Name' required
                                value={fname} type='text' onChange={(text) => { setFname(text.target.value) }} />
                        </div>
                        <div className='w-full flex flex-col mb-2'>
                            <label className={`${sizeSmall ? 'text-sm' : 'text-md'} text-gray-800 font-[500] mb-1`}>
                                Last Name
                            </label>
                            <input className={`border-2 rounded-sm p-1`} placeholder='Last Name' required
                                value={lname} type='text' onChange={(text) => { setLname(text.target.value) }} />
                        </div>
                        <div className='w-full flex flex-col mb-2'>
                            <label className={`${sizeSmall ? 'text-sm' : 'text-md'} text-gray-800 font-[500] mb-1`}>
                                Phone Number
                            </label>
                            <input className={`border-2 rounded-sm p-1`} placeholder='2609XXXXXXXX' required
                                value={phone} type='tel' onChange={(text) => { setPhone(text.target.value) }} />
                        </div>
                        <div className='w-full flex flex-col mb-2'>
                            <label className={`${sizeSmall ? 'text-sm' : 'text-md'} text-gray-800 font-[500] mb-1`}>
                                Email
                            </label>
                            <input className={`border-2 rounded-sm p-1`} placeholder='Enter your email address' required
                                value={email} type='email' onChange={(text) => { setEmail(text.target.value) }} />
                        </div>
                        <div className={`flex w-full justify-between ${sizeLarge && 'flex-col'}`}>
                            <div className='flex flex-col mb-2'>
                                <label className={`${sizeSmall ? 'text-sm' : 'text-md'} text-gray-800 font-[500] mb-1`}>
                                    Password
                                </label>
                                <input className={`border-2 rounded-sm p-1`} placeholder='Enter your password' required
                                    value={password} type='password' onChange={(text) => { setPassword(text.target.value) }} />
                            </div>
                            <div className='flex flex-col mb-2'>
                                <label className={`${sizeSmall ? 'text-sm' : 'text-md'} text-gray-800 font-[500] mb-1`}>
                                    Confirm
                                </label>
                                <input className={`border-2  rounded-sm p-1`} placeholder='re-enter your password'
                                    value={confirm} type='password' required onChange={(text) => { setConfirm(text.target.value) }} />
                            </div>
                        </div>
                    </div>
                    <div className='text-xs mt-1'>
                        <p>Already have an account? <Link to={`/login`} className='text-blue-500'>click here</Link></p>
                    </div>
                    <div className='flex text-md mt-4 items-center'>
                        <button className={`
                        bg-blue-400 rounded-md shadow-md w-24 py-1 px-1 text-white hover:bg-blue-600`}
                            type="submit" disabled={loading}
                        >
                            {loading ? 'loading' : 'Sign Up'}
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}
