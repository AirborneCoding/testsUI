import React from 'react'
import Navbar from './components/Navbar'
import Section1 from './components/Section1'
import Chart1 from './components/Chart1'
import Chart2 from './components/Chart2'
import Chart3 from './components/Chart3'
import Chart4 from './components/Chart4'
import { WiStars } from 'react-icons/wi'

const App = () => {
  return (
    <>
      <Navbar />
      <div className='body-container my-16'>

        {/* HEADER */}
        <h3 className='text-2xl font-bold'>
          Analyse et comparez vos avis clients
        </h3>
        <Section1 />

        {/* CONTENT */}
        <div className="mt-5 grid gap-10">

          {/* FIRST SECTION */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-y-10 md:gap-x-10">

            {/* FIRST DIV */}
            <div className='grid gap-3'>
              <div className=" shadow-lg border-spacing-2 border p-2 rounded-lg">
                <Chart1 />
              </div>
              <div className='flex py-2 flex-col border border-spacing-1 rounded-md shadow-lg px-5'>
                <Chart2 />
              </div>
            </div>

            {/* SECOND DIV */}
            <div className="col-span-2 border border-spacing-1 rounded-md shadow-lg">
              <Chart3 />
            </div>

          </section>

          {/* SECOND SECTION */}
          <section className="flex flex-col lg:flex-row lg:space-x-5 space-y-5 lg:space-y-0">

            {/* chart */}
            <div className="border border-spacing-1 rounded-md shadow-lg lg:w-3/4">
              <Chart4 />
            </div>

            {/* the analyse div */}
            <div className="border border-spacing-1 rounded-md shadow-lg lg:w-1/4 px-3 py-2 bg-gradient-to-b from-white via-white to-purple-100">
              <div className='mb-4'>
                <div className="flex items-center">
                  <WiStars className='text-yellow-500 font-bold' size={25} />
                  Analyse générée par IA
                </div>
                <ul className='list-disc pl-4 mt-2 text-xs'>
                  <li>
                    Plusieurs nouveaux avis portent sur la catégorie Service client
                  </li>
                  <li>
                    Le mot-clé le plus utilisé pendant cette période est Livraison
                  </li>
                </ul>
              </div>
              <div className="flex justify-end mt-44 mb-5">
                <button className='hover:bg-blue-400 hover:text-white flex items-center bg-white rounded-lg p-1 border border-cyan-100'>
                  <WiStars className='text-yellow-500 font-bold' size={25} />
                  Analyse
                </button>
              </div>
            </div>

          </section>

        </div>

      </div>

    </>
  )
}

export default App