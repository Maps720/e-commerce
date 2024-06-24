import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../app_context/context'

export default function Forgot() {
    const { sizeSmall } = useAppContext()
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const send = () => {
        console.log('pressed')
        setSubmitted(true)
    }
    return (
        <>
            <div className={`flex ${sizeSmall ? 'w-4/5' : 'w-1/3'} rounded-md shadow-md overflow-hidden`}>
                <form className='flex flex-1 p-4 flex-col bg-white' onSubmit={send}>
                    <div className="flex justify-center items-center w-full">
                        <h1 className='text-lg text-gray-800 font-[500]'>
                            FORGOT PASSWORD
                        </h1>
                    </div>
                    <p className='my-2'>Instructions on how to reset your account will be sent to the email you will provide.</p>
                    <div className='my-2 w-full'>
                        <div className='flex flex-col mb-2'>
                            <label className={`${sizeSmall ? 'text-sm' : 'text-md'} text-gray-800 font-[500] mb-1`}>
                                Email
                            </label>
                            <input className={`border-2 rounded-sm p-1`} placeholder='Enter your email' required
                                value={email} type='email'
                                onChange={(text) => {
                                    setEmail(text.target.value)
                                }} />
                        </div>
                    </div>
                    <div className='text-xs mt-1'>
                        <p>Already have an account? <Link to={`/login`} className='text-blue-500'>click here</Link></p>
                    </div>
                    <div className='flex text-md mt-4 items-center'>
                        <button className={`
                        bg-blue-400 rounded-md shadow-md w-24 py-1 px-1 text-white hover:bg-blue-600`}
                            type="submit"
                            disabled={submitted}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}
