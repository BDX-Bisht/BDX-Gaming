import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div>
            <header className="text-gray-400 bg-gray-900 body-font" style={{borderBottom: "1px solid"}}>
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link className="flex title-font font-medium items-center text-white mb-4 md:mb-0" to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                        <span className="ml-3 text-xl">BDX-Bisht</span>
                    </Link>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                        <Link className="mr-5 hover:text-white" to="/">Home</Link>
                        <Link className="mr-5 hover:text-white" to="/about">About</Link>
                        <Link className="mr-5 hover:text-white" to="/profile">Profile</Link>
                    </nav>
                    <Link className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 hover:bg-gray-700 rounded text-base mt-4 md:mt-0" to="/login" style={{cursor:'pointer'}}>Login
                    </Link>
                    <Link className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 ml-3 hover:bg-gray-700 rounded text-base mt-4 md:mt-0" to='/signup' style={{cursor:'pointer'}}>SignUp
                    </Link>
                </div>
            </header>
        </div>
    )
}
