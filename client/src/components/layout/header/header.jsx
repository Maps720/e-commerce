import React from 'react'
import { Menu, Home, Settings, History, Inbox, CircleUserRound } from "lucide-react"
import { useAppContext } from '../../app_context/context'
import { Link } from 'react-router-dom'

export default function Header() {
    const { expanded, setExpanded, sizeSmall, sizeMidSmall, sizeHightSmall } = useAppContext()
    const style = {
        transform: expanded ? 'rotate(90deg)' : '',
        transition: 'transform 150ms ease', //smooth transition
    }
    return (
        <div className={`${sizeHightSmall || sizeSmall ? 'h-12' : 'h-16'} relative top-[0px] w-full text-gray-100`}>
            <div className={`flex fixed w-full bg-zinc-800 px-3 ${sizeHightSmall || sizeSmall ? ' h-12' : 'h-16'} shadow-lg z-20`}>
                <div className={`flex justify-start items-center flex-1`}>
                    <div className={`flex flex-initial justify-end items-center relative ${sizeMidSmall ? 'mr-3' : 'mr-6'} `}>
                        <button
                            onClick={() => setExpanded((curr) => !curr)}
                            className="p-1.5 rounded-lg bg-zinc-700 active:bg-zinc-700 hover:bg-zinc-600" aria-label='Menu'
                        >
                            <Menu style={style} />
                        </button>
                    </div>
                    <div className={`flex ${sizeSmall && 'w-0 overflow-hidden'}`}>
                        <h1 className={`${sizeMidSmall ? 'text-md' : 'text-xl'} font - bold`}>
                            ZamOnline Store
                        </h1>
                    </div>
                </div>
                <div className='justify-center items-center flex flex-1'>
                    <Link to={'/'}>
                        <button className={`${sizeSmall ? 'mx-2 px-2' : 'mx-4 px-4'} py-2 active:bg-zinc-700 hover:bg-zinc-600 rounded-md`}
                            aria-label='Home'
                        >
                            <Home size={sizeMidSmall ? 25 : 30} />
                        </button>
                    </Link>
                    <Link to={'/'}>
                        <button className={`${sizeSmall ? 'mx-2 px-2' : 'mx-4 px-4'} py-2 active:bg-zinc-700 hover:bg-zinc-600 rounded-md`}
                            aria-label='Input'
                        >
                            <Inbox size={sizeMidSmall ? 25 : 30} />
                        </button>
                    </Link>
                    <button className={`${sizeSmall ? 'mx-2 px-2' : 'mx-4 px-4'} py-2 active:bg-zinc-700 hover:bg-zinc-600 rounded-md`}
                        aria-label='History'
                    >
                        <History size={sizeMidSmall ? 25 : 30} />
                    </button>
                    <button className={`${sizeSmall ? 'mx-2 px-2' : 'mx-4 px-4'} py-2 active:bg-zinc-700 hover:bg-zinc-600 rounded-md`}
                        aria-label='Settings'
                    >
                        <Settings size={sizeMidSmall ? 25 : 30} />
                    </button>
                </div>
                <div className='items-center justify-end flex flex-1'>
                    <button className='rounded-full overflow-hidden active:bg-zinc-700 hover:bg-zinc-600'>
                        <CircleUserRound size={sizeMidSmall ? 29 : 39} />
                    </button>
                </div>
            </div>
        </div>
    )
}
