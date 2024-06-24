import React from 'react'
import { useAppContext } from '../../app_context/context'
import { Link } from 'react-router-dom'
import { Popover, Transition } from '@headlessui/react'
import { MoreVertical, Search } from "lucide-react"
import classNames from "classnames";

export default function Sidebar() {
    const { expanded, setExpanded, sizeSmall, sizeMidSmall, sizeHightSmall } = useAppContext();

    const collapseSide = () => {
        if (sizeMidSmall || sizeHightSmall) {
            if (expanded) {
                setExpanded(false);
            }
        }
    }

    return (
        <>
            <div className={`${sizeSmall || sizeHightSmall ? (expanded && 'dim-overlay') : 'z-0'} opacity-0 transition-all`}
                onClick={collapseSide} />
            <aside className={`z-20 transition-all ${sizeMidSmall && 'fixed h-full'} text-gray-100 ${!expanded && 'w-0 overflow-hidden'}`}
                style={{ width: expanded ? (sizeHightSmall || sizeMidSmall ? '13rem' : '14.5rem') : '0rem' }}>
                <nav className={`bg-zinc-800 h-full flex flex-col shadow-md transition-all 
            ${sizeHightSmall ? 'overflow-y-scroll text-xs' : (sizeMidSmall ? 'text-xs' : 'text-sm')}`}>
                    <div className={`flex w-full p-2 overflow-hidden ${!expanded && 'w-0'}`}>
                        <div className={`relative w-full rounded-full p-1`}>
                            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
                            <input
                                className={`${sizeMidSmall ? 'text-xs' : 'text-md'} bg-[rgba(0,0,0,0)] pl-10 w-full 
                            focus:ring focus:ring-zinc-400 rounded-full bg-zinc-600 py-2`}
                                placeholder="Search for item"
                            />
                        </div>
                    </div>
                    <div className={`flex flex-col flex-1 px-3 transition-all overflow-hidden ${!expanded && 'w-0'}`}>
                        <div className={`flex w-full justify-center items-center my-2 overflow-hidden ${!expanded && 'w-0'}`}>
                            <h1 className='text-lg font-[500]'>CATEGORY</h1>
                        </div>
                        <div className={`flex w-full flex-col justify-between items-center my-1 overflow-hidden ${!expanded && 'w-0'}`}>
                            <div className='w-full flex justify-between my-2'>
                                <button className="flex flex-1 mr-1 shadow-md bg-zinc-700 rounded-lg h-12 justify-center 
                            items-center hover:bg-zinc-600 active:bg-zinc-700">
                                    Recommended
                                </button>
                                <button className="flex flex-1 ml-1 shadow-md bg-zinc-700 rounded-lg h-12 justify-center 
                            items-center hover:bg-zinc-600 active:bg-zinc-700">
                                    Electronic
                                </button>
                            </div>
                            <div className='w-full flex justify-between my-2'>
                                <button className="flex flex-1 mr-1 shadow-md bg-zinc-700 rounded-lg h-12 justify-center 
                            items-center hover:bg-zinc-600 active:bg-zinc-700">
                                    Footwear
                                </button>
                                <button className="flex flex-1 ml-1 shadow-md bg-zinc-700 rounded-lg h-12 justify-center 
                            items-center hover:bg-zinc-600 active:bg-zinc-700">
                                    Food
                                </button>
                            </div>
                            <div className='w-full flex justify-between my-2'>
                                <button className="flex flex-1 mr-1 shadow-md bg-zinc-700 rounded-lg h-12 justify-center 
                            items-center hover:bg-zinc-600 active:bg-zinc-700">
                                    Furniture
                                </button>
                                <button className="flex flex-1 ml-1 shadow-md bg-zinc-700 rounded-lg h-12 justify-center 
                            items-center hover:bg-zinc-600 active:bg-zinc-700">
                                    Tools
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={`p-3 ${expanded ? 'border-t flex border-gray-100' : 'w-0 overflow-hidden'}`} >
                        <div className={`
                        flex justify-between items-center
                        transition-all ${expanded ? "w-48 ml-3" : "w-0 overflow-hidden"}
                    `}>
                            <div className="leading-4 w-[132px]">
                                <span className={`text-xs`}>mapscodes01@gmail.com</span>
                            </div>

                            <Popover className="relative">
                                {({ open }) => (
                                    /* Use the `open` state to conditionally change the direction of the chevron icon. */
                                    <>
                                        <Popover.Button className={classNames(open &&
                                            `bg-zinc-600`,
                                            `inline-flex items-center p-1 rounded-md hover:text-opacity-100
                                        focus:outline-none active:bg-zinc-700 hover:bg-zinc-600`
                                        )}>
                                            <MoreVertical size={20} />
                                        </Popover.Button>
                                        <Transition
                                            enter="transition duration-100 ease-out"
                                            enterFrom="transform scale-95 opacity-0 translate-y-1"
                                            enterTo="transform scale-100 opacity-100 translate-y-0"
                                            leave="transition duration-75 ease-out"
                                            leaveFrom="transform scale-100 opacity-100 translate-y-0"
                                            leaveTo="transform scale-95 opacity-0 translate-y-1"
                                        >
                                            <Popover.Panel className={`absolute left-9 bottom-0 ${sizeSmall ? 'w-40' : 'w-52'}`} style={{ position: 'absolute', zIndex: '-1000' }}>
                                                <div className={`ml-2 rounded-sm shadow-lg flex flex-col overflow-hidden                        
                                                    transition-colors group bg-zinc-700 ring-opacity-5 pb-2`}
                                                >
                                                    <div className={`bg-zinc-900 flex justify-center items-center pt-2 pb-2`}>
                                                        <span className="font-medium">More</span>
                                                    </div>
                                                    <Link className={`mt-1 mx-1 rounded-sm py-1 hover:bg-zinc-600 active:bg-zinc-700`}>
                                                        <span className='pl-3'>Settings</span>
                                                    </Link>
                                                    <Link to={'profile'} className={`mt-1 mx-1 rounded-sm py-1 hover:bg-zinc-600  active:bg-zinc-700`}>
                                                        <span className='pl-3'>Profile</span>
                                                    </Link>
                                                    <Link className={`mt-1 mx-1 rounded-sm py-1 bg-red-500 hover:bg-red-600 active:bg-red-700`}
                                                        to={'/login'}>
                                                        <span className='pl-3'>Logout</span>
                                                    </Link>
                                                </div>
                                            </Popover.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Popover>

                        </div>
                    </div>
                    <div className={`flex self-center text-center text-xs mb-2 ${!expanded && "w-0 overflow-hidden"}`}>
                        <p>Copyright © 2024. All Rights Reserved</p>
                    </div>
                </nav>
            </aside >
        </>
    )
}
