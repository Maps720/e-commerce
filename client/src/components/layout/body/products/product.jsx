import React, { useState } from 'react'
import { useAppContext } from '../../../app_context/context'
import axios from 'axios'
import { serverName } from '../../../server/serverName'

export default function Product() {
    const { sizeSmall } = useAppContext()

    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [description, setDescription] = useState('')
    const [picture, setPicture] = useState('')
    const [price, setPrice] = useState(0)

    const [loading, setLoading] = useState(false);
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
                `${serverName}/api/product/`,
                { name, description, category, quantity, price, picture },
                config
            );

            setLoading(false);
            console.log(data)
            setResponded(true);
            alert('success')
        } catch (error) {
            setMessage(error.response.data.message)
            setResponded(true);
            setLoading(false);
        }
    }

    return (
        <div className={`${sizeSmall ? 'text-xs' : 'text-sm'} flex flex-col w-full h-full flex-1 mt-7 ml-8 bg-gray-200 justify-center items-center`}>
            <form className='flex flex-col w-80 justify-center bg-white rounded-md shadow-md p-2' onSubmit={send}>
                <h1>Product Entry</h1>
                <div className='w-full flex flex-col mb-2 text-red-400'>
                    <span>{responded && (message)}</span>
                </div>
                <div className='w-full flex flex-col mb-2'>
                    <label className={`${sizeSmall ? 'text-sm' : 'text-md'} text-gray-800 font-[500] mb-1`}>
                        Name
                    </label>
                    <input className={`border-2 rounded-sm p-1`} placeholder='Name of product' required
                        value={name} type='text'
                        onChange={(text) => {
                            setName(text.target.value)
                        }} />
                </div>
                <div className='w-full flex flex-col mt-2'>
                    <label className={`${sizeSmall ? 'text-sm' : 'text-md'} text-gray-800 font-[500] mb-1`}>
                        Category
                    </label>
                    <input className={`border-2  rounded-sm p-1`} placeholder='Category of product'
                        value={category}
                        type='text' required
                        onChange={(text) => {
                            setCategory(text.target.value)
                        }}
                    />
                </div>
                <div className='w-full flex flex-col mt-2'>
                    <label className={`${sizeSmall ? 'text-sm' : 'text-md'} text-gray-800 font-[500] mb-1`}>
                        Description
                    </label>
                    <input className={`border-2  rounded-sm p-1`} placeholder='Category of product'
                        value={description}
                        type='text' required
                        onChange={(text) => {
                            setDescription(text.target.value)
                        }}
                    />
                </div>
                <div className='w-full flex flex-col mt-2'>
                    <label className={`${sizeSmall ? 'text-sm' : 'text-md'} text-gray-800 font-[500] mb-1`}>
                        Quantity
                    </label>
                    <input className={`border-2  rounded-sm p-1`} placeholder='Quantity of product'
                        value={quantity}
                        type='number' required
                        onChange={(text) => {
                            setQuantity(text.target.value)
                        }}
                    />
                </div>
                <div className='w-full flex flex-col mt-2'>
                    <label className={`${sizeSmall ? 'text-sm' : 'text-md'} text-gray-800 font-[500] mb-1`}>
                        Price (k)
                    </label>
                    <input className={`border-2  rounded-sm p-1`} placeholder='Quantity of product'
                        value={price}
                        type='number' required
                        onChange={(text) => {
                            setPrice(text.target.value)
                        }}
                    />
                </div>
                <div className='w-full flex flex-col mt-2'>
                    <label className={`${sizeSmall ? 'text-sm' : 'text-md'} text-gray-800 font-[500] mb-1`}>
                        Picture
                    </label>
                    <input className={`border-2  rounded-sm p-1`} placeholder='picture of product'
                        value={picture}
                        type='text'
                        onChange={(text) => {
                            setPicture(text.target.value)
                        }}
                    />
                </div>
                <div className='flex text-md mt-4 items-center'>
                    <button className={`
                        bg-blue-400 rounded-md shadow-md w-24 mx-3 py-1 px-1 text-white hover:bg-blue-600`}
                        type="submit" disabled={loading}
                    >
                        {loading ? 'Loading' : 'Submit'}
                    </button>
                </div>
            </form>

        </div>
    )
}
