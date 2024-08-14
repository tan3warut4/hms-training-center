import React from 'react'
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
    return (
        <button className=' border rounded-lg flex text-center px-3 py-2 items-center gap-x-2 justify-between w-full'>
            <div className='text-gray-400 text-sm flex items-center'>
                <CiSearch className='text-gray-400 mr-2 text-xl ' />
                <span>Quick search...</span>
            </div>
            <div className='text-sm text-gray-400'>
                ⌘ K
            </div>
        </button>
    )
}

export default SearchBar