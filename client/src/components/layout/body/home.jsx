import React from 'react'
import { useAppContext } from '../../app_context/context'
import products from '../../datasets/products'
import { Link } from 'react-router-dom'

export default function Home() {
    const { sizeMidSmall, sizeHightSmall } = useAppContext()
    return (
        <div className={`${sizeMidSmall || sizeHightSmall ? 'text-xs' : 'text-sm'} flex h-full w-full overflow-hidden overflow-y-scroll`}>
            <div className='flex flex-col w-full mt-2 ml-3 p-2'>
                <div className='flex justify-between mb-2'>
                    <span>home / <span className='font-[500]'>recommended</span></span>
                </div>
                <div className='flex p-3 flex-col'>

                    <div className='flex-col my-3 mt-1'>
                        <div className='flex justify-between'>
                            <span className={`${sizeMidSmall || sizeHightSmall ? 'text-md' : 'text-lg'} font-[500]`}>
                                Electronics
                            </span>
                            <button className={`bg-blue-400 hover:bg-blue-500 rounded-sm shadow-md w-20 text-white font-[500]  
                            ${sizeMidSmall || sizeHightSmall ? 'py-1' : null}`}>
                                view more
                            </button>
                        </div>
                        <div className='flex mt-2 overflow-x-scroll'>
                            {products.map((product, index) => (
                                product.category === 'Electronics' && (
                                    <Link key={index}
                                        className={`flex flex-col rounded-md shadow-md ${sizeMidSmall || sizeHightSmall ? 'w-32 h-32' : 'w-44 h-44'} 
                                        flex-none bg-white justify-end mr-2 cursor-pointer overflow-hidden bg-image-wrapper`}
                                        style={{ '--background-image': `url(/images/${product.image[0]})` }}
                                        to={`items/${product.id}`}
                                    >
                                        <div className={`flex flex-col p-2 py-0 font-[500] z-10 text-white bg-[rgba(0,0,0,0.4)]`}>
                                            <span>{product.name}</span>
                                            <div className='flex justify-between'>
                                                <span>k{product.price}</span>
                                                <span>pcs: {product.piecesLeft}</span>
                                            </div>
                                        </div>
                                    </Link>
                                )))}
                        </div>
                    </div>

                    <div className='flex flex-col my-3'>
                        <div className='flex justify-between'>
                            <span className={`${sizeMidSmall || sizeHightSmall ? 'text-md' : 'text-lg'} font-[500]`}>
                                Clothes
                            </span>
                            <button className={`bg-blue-400 hover:bg-blue-500 rounded-sm shadow-md w-20 text-white font-[500]  
                            ${sizeMidSmall || sizeHightSmall ? 'py-1' : null}`}>
                                view more
                            </button>
                        </div>
                        <div className='flex mt-2 overflow-x-scroll'>
                            {products.map((product, index) => (
                                product.category === 'Clothes' && (
                                    <Link key={index}
                                        className={`flex flex-col rounded-md shadow-md ${sizeMidSmall || sizeHightSmall ? 'w-32 h-32' : 'w-44 h-44'} 
                                        flex-none bg-white justify-end mr-2 cursor-pointer overflow-hidden bg-image-wrapper`}
                                        style={{ '--background-image': `url(/images/${product.image[0]})` }}
                                        to={`items/${product.id}`}
                                    >
                                        <div className={`flex flex-col p-2 py-0 z-10 font-[500] text-white bg-[rgba(0,0,0,0.4)]`}>
                                            <span>{product.name}</span>
                                            <div className='flex justify-between'>
                                                <span>k{product.price}</span>
                                                <span>pcs: {product.piecesLeft}</span>
                                            </div>
                                        </div>
                                    </Link>
                                )))}
                        </div>
                    </div>

                    <div className='flex flex-col my-3'>
                        <div className='flex justify-between'>
                            <span className={`${sizeMidSmall || sizeHightSmall ? 'text-md' : 'text-lg'} font-[500]`}>
                                Footwear
                            </span>
                            <button className={`bg-blue-400 hover:bg-blue-500 rounded-sm shadow-md w-20 text-white font-[500]  
                            ${sizeMidSmall || sizeHightSmall ? 'py-1' : null}`}>
                                view more
                            </button>
                        </div>
                        <div className='flex mt-2 overflow-x-scroll'>
                            {products.map((product, index) => (
                                product.category === 'Footwear' && (
                                    <Link key={index}
                                        className={`flex flex-col rounded-md shadow-md ${sizeMidSmall || sizeHightSmall ? 'w-32 h-32' : 'w-44 h-44'} 
                                        flex-none bg-white justify-end mr-2 cursor-pointer overflow-hidden bg-image-wrapper`}
                                        style={{ '--background-image': `url(/images/${product.image[0]})` }}
                                        to={`items/${product.id}`}
                                    >
                                        <div className={`flex flex-col p-2 py-0 z-10 font-[500] text-white bg-[rgba(0,0,0,0.4)]`}>
                                            <span>{product.name}</span>
                                            <div className='flex justify-between'>
                                                <span>k{product.price}</span>
                                                <span>pcs: {product.piecesLeft}</span>
                                            </div>
                                        </div>
                                    </Link>
                                )))}
                        </div>
                    </div>

                    <div className='flex flex-col my-3'>
                        <div className='flex justify-between'>
                            <span className={`${sizeMidSmall || sizeHightSmall ? 'text-md' : 'text-lg'} font-[500]`}>
                                Cosmetics
                            </span>
                            <button className={`bg-blue-400 hover:bg-blue-500 rounded-sm shadow-md w-20 text-white font-[500]  
                            ${sizeMidSmall || sizeHightSmall ? 'py-1' : null}`}>
                                view more
                            </button>
                        </div>
                        <div className='flex mt-2 overflow-x-scroll'>
                            {products.map((product, index) => (
                                product.category === 'Cosmetics' && (
                                    <Link key={index}
                                        className={`flex flex-col rounded-md shadow-md ${sizeMidSmall || sizeHightSmall ? 'w-32 h-32' : 'w-44 h-44'} 
                                        flex-none bg-white justify-end mr-2 cursor-pointer overflow-hidden bg-image-wrapper`}
                                        style={{ '--background-image': `url(/images/${product.image[0]})` }}
                                        to={`items/${product.id}`}
                                    >
                                        <div className={`flex flex-col p-2 py-0 z-10 font-[500] text-white bg-[rgba(0,0,0,0.4)]`}>
                                            <span>{product.name}</span>
                                            <div className='flex justify-between'>
                                                <span>k{product.price}</span>
                                                <span>pcs: {product.piecesLeft}</span>
                                            </div>
                                        </div>
                                    </Link>
                                )))}
                        </div>
                    </div>

                    <div className='flex flex-col my-3'>
                        <div className='flex justify-between'>
                            <span className={`${sizeMidSmall || sizeHightSmall ? 'text-md' : 'text-lg'} font-[500]`}>
                                Others
                            </span>
                            <button className={`bg-blue-400 hover:bg-blue-500 rounded-sm shadow-md w-20 text-white font-[500]  
                            ${sizeMidSmall || sizeHightSmall ? 'py-1' : null}`}>
                                view more
                            </button>
                        </div>
                        <div className='flex mt-2 overflow-x-scroll'>
                            {products.map((product, index) => (
                                product.category !== 'Footwear' && product.category !== 'Electronics' && product.category !== 'Clothes' && product.category !== 'Cosmetics' && (
                                    <Link key={index}
                                        className={`flex flex-col rounded-md shadow-md ${sizeMidSmall || sizeHightSmall ? 'w-32 h-32' : 'w-44 h-44'} 
                                        flex-none bg-white justify-end mr-2 cursor-pointer overflow-hidden bg-image-wrapper`}
                                        style={{ '--background-image': `url(/images/${product.image[0]})` }}
                                        to={`items/${product.id}`}
                                    >
                                        <div className={`flex flex-col p-2 py-0 z-10 font-[500] text-white bg-[rgba(0,0,0,0.4)]`}>
                                            <span>{product.name}</span>
                                            <div className='flex justify-between'>
                                                <span>k{product.price}</span>
                                                <span>pcs: {product.piecesLeft}</span>
                                            </div>
                                        </div>
                                    </Link>
                                )))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
