import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex justify-center items-center'>
            <nav className="fixed top-0 w-full md:w-[50%] bg-gray-800 px-5 py-2 flex justify-between items-center">
                <h1 className="text-lg text-white font-bold">BinaryConverter</h1>
                <div>
                    <NavLink to='/' className="text-white bg-purple-500 hover:bg-purple-600 px-2 md:px-3 py-1 text-xs md:text-sm rounded transition duration-300 ease-in-out mr-1 md:mr-2">
                        Convert to Decimal
                    </NavLink>
                    <NavLink to='/decimal' className="text-white bg-purple-500 hover:bg-purple-600 px-2 md:px-3 py-1 text-xs md:text-sm rounded transition duration-300 ease-in-out">
                        Convert to Binary
                    </NavLink>
                </div>
            </nav>
        </div>


    )
}

export default Navbar