import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Chart2 = () => {
    return (
        <>
            <div className="">
                <h5 className="text-sm  font-bold">
                    analyse des mots clés
                </h5>
                <div className='flex flex-wrap space-x-2 mt-2'>
                    <button className='bg-gray-200 text-xs p-1 rounded'>Table</button>
                    <button className='bg-gray-200 text-xs p-1 rounded'>Délicieux</button>
                    <button className='bg-gray-200 text-xs p-1 rounded'>Fiale</button>
                    <button className='bg-gray-200 text-xs p-1 rounded'>Rapide</button>
                    <button className='bg-gray-200 text-xs p-1 rounded'>Rapide</button>
                </div>
            </div>

            <div className="flex-grow"></div> {/* This div will take up the remaining space */}

            <div className="mt-44 text-end flex items-center justify-end text-sm text-sky-700">
                Voir tous les mots clés <FaArrowRight className="ml-2" />
            </div>
        </>
    )
}

export default Chart2