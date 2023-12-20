import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-center items-center'>
            <nav className="fixed top-0 w-[50%] bg-gray-800 px-5 py-2 flex justify-between items-center">
                <h1 className="text-lg text-white font-bold">BinaryConverter</h1>
                <div>
                    <button className="text-white bg-purple-500 hover:bg-purple-600 px-3 py-1 text-sm rounded transition duration-300 ease-in-out mr-2">
                        Convert to Binary
                    </button>
                    <button className="text-white bg-purple-500 hover:bg-purple-600 px-3 py-1 text-sm rounded transition duration-300 ease-in-out">
                        Convert to Decimal
                    </button>
                </div>
            </nav>
        </div>

    )
}

export default Navbar