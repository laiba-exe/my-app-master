import Image from 'next/image';

import React from 'react'

const Cards = () => {
  return (
    <div className='container mt-20 mb-9 px-4 py-2'>
        <h1 className='font-bold text-3xl'>Your Bookmarks</h1>
        <div className='flex gap-8'>

        {/* Card */}
        <div className="bg-white rounded-lg hover:shadow-md p-4 border-[1px] duration-300 hover:scale-105 mt-8 w-[305px] h-[280px] cursor-pointer">
            <div className="flex">
                <Image src="/Edit.png" alt="powerpoint" 
                width={190}
                height={1}
                className='w-[90px] mt-10 justify-self-start' />
            </div>
            <h3 className="text-lg font-bold ml-4 mt-2">Edit PDF</h3>
            <p className="text-sm text-gray-500 mx-4 pt-4">Use the best online tool to edit PDFs in your browser.</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-lg hover:shadow-md p-4 border-[1px] duration-300 hover:scale-105 mt-8 w-[305px] h-[280px] cursor-pointer">
            <div className="flex">
                <Image src="/Crop.png" alt="powerpoint" 
                width={190}
                height={1} className='w-[90px] mt-10 justify-self-start' />
            </div>
            <h3 className="text-lg font-bold ml-4 mt-2">Crop PDF</h3>
            <p className="text-sm text-gray-500 mx-4 pt-4">Crop PDF online to a selected area, adjust margin size...</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-lg hover:shadow-md p-4 border-[1px] duration-300 hover:scale-105 mt-8 w-[305px] h-[280px] cursor-pointer">
            <div className="flex">
                <Image src="/Replace.png" alt="powerpoint" width={190}
                height={1}  className='w-[90px] mt-10 justify-self-start' />
            </div>
            <h3 className="text-lg font-bold ml-4 mt-2">Replace Text</h3>
            <p className="text-sm text-gray-500 mx-4 pt-4">The easiest way to replace text online.</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-lg hover:shadow-md p-4 border-[1px] duration-300 hover:scale-105 mt-8 w-[305px] h-[280px] cursor-pointer">
            <div className="flex">
                <Image src="/Rotate.png" width={190}
                height={1} alt="powerpoint" className='w-[90px] mt-10 justify-self-start' />
            </div>
            <h3 className="text-lg font-bold ml-4 mt-2">Rotate PDF</h3>
            <p className="text-sm text-gray-500 mx-4 pt-4">Rotate and save your PDF pages online for life.</p>
        </div>
        </div>



        {/* PAGE 2 */}

        <div className='mt-24 flex justify-between'>
            <h1 className='font-bold text-3xl '>Convert from PDF</h1>
            <button className='text-semibold w-12 bg-slate-200 hover:scale-105 duration-300 rounded-full cursor-pointer'> All </button>
        </div>
        <div className='flex gap-8'>

        {/* Card */}
        <div className="bg-white rounded-lg hover:shadow-md p-4 border-[1px] duration-300 hover:scale-105 mt-8 w-[305px] h-[280px] cursor-pointer">
            <div className="flex">
                <Image src="/W.png" width={190}
                height={1} alt="powerpoint" className='w-[90px] mt-10 justify-self-start' />
            </div>
            <h3 className="text-lg font-bold ml-4 mt-2">PDF to Word</h3>
            <p className="text-sm text-gray-500 mx-4 pt-4">Easily convert PDF to Word document.</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-lg hover:shadow-md p-4 border-[1px] duration-300 hover:scale-105 mt-8 w-[305px] h-[280px] cursor-pointer">
            <div className="flex">
                <Image src="/P.png" width={190}
                height={1} alt="powerpoint" className='w-[90px] mt-10 justify-self-start' />
            </div>
            <h3 className="text-lg font-bold ml-4 mt-2">PDF to PPT</h3>
            <p className="text-sm text-gray-500 mx-4 pt-4">Convert PDF to Powerpoint</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-lg hover:shadow-md p-4 border-[1px] duration-300 hover:scale-105 mt-8 w-[305px] h-[280px] cursor-pointer">
            <div className="flex">
                <Image src="/X.png" width={190}
                height={1}  alt="powerpoint" className='w-[90px] mt-10 justify-self-start' />
            </div>
            <h3 className="text-lg font-bold ml-4 mt-2">PDF to Excel</h3>
            <p className="text-sm text-gray-500 mx-4 pt-4">Convert PDF to xls for free.</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-lg hover:shadow-md p-4 border-[1px] duration-300 hover:scale-105 mt-8 w-[305px] h-[280px] cursor-pointer">
            <div className="flex">
                <Image src="/JPG.png" width={190}
                height={1} alt="powerpoint" className='w-[90px] mt-10 justify-self-start' />
            </div>
            <h3 className="text-lg font-bold ml-4 mt-2">PDG to JPG</h3>
            <p className="text-sm text-gray-500 mx-4 pt-4">Convert  PDF files to a set of optimized JPG, PNG, BMP.</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-lg hover:shadow-md p-4 border-[1px] duration-300 hover:scale-105 mt-8 w-[305px] h-[280px] cursor-pointer">
            <div className="flex">
                <Image src="/TXT.png" width={190}
                height={1} alt="powerpoint" className='w-[90px] mt-10 justify-self-start' />
            </div>
            <h3 className="text-lg font-bold ml-4 mt-2">PDF to TXT</h3>
            <p className="text-sm text-gray-500 mx-4 pt-4">Convert your PDF to TXT, and extract text from your PDF.</p>
        </div>
        </div>



        {/* PAGE 2 */}


        <h1 className='font-bold text-3xl mt-24'>Convert from PDF</h1>
        <div className='flex gap-8'>

        {/* Card */}
        <div className="bg-white rounded-lg hover:shadow-md p-4 border-[1px] duration-300 hover:scale-105 mt-8 w-[305px] h-[280px] cursor-pointer">
            <div className="flex">
                <Image src="/W.png" width={190}
                height={1} alt="powerpoint" className='w-[90px] mt-10 justify-self-start' />
            </div>
            <h3 className="text-lg font-bold ml-4 mt-2">PDF to Word</h3>
            <p className="text-sm text-gray-500 mx-4 pt-4">Easily convert PDF to Word document.</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-lg hover:shadow-md p-4 border-[1px] duration-300 hover:scale-105 mt-8 w-[305px] h-[280px] cursor-pointer">
            <div className="flex">
                <Image src="/P.png" width={190}
                height={1} alt="powerpoint" className='w-[90px] mt-10 justify-self-start' />
            </div>
            <h3 className="text-lg font-bold ml-4 mt-2">PDF to PPT</h3>
            <p className="text-sm text-gray-500 mx-4 pt-4">Convert PDF to Powerpoint</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-lg hover:shadow-md p-4 border-[1px] duration-300 hover:scale-105 mt-8 w-[305px] h-[280px] cursor-pointer">
            <div className="flex">
                <Image src="/X.png" width={190}
                height={1} alt="powerpoint" className='w-[90px] mt-10 justify-self-start' />
            </div>
            <h3 className="text-lg font-bold ml-4 mt-2">PDF to Excel</h3>
            <p className="text-sm text-gray-500 mx-4 pt-4">Convert PDF to xls for free.</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-lg hover:shadow-md p-4 border-[1px] duration-300 hover:scale-105 mt-8 w-[305px] h-[280px] cursor-pointer">
            <div className="flex">
                <Image src="/JPG.png" width={190}
                height={1} alt="powerpoint" className='w-[90px] mt-10 justify-self-start' />
            </div>
            <h3 className="text-lg font-bold ml-4 mt-2">PDG to JPG</h3>
            <p className="text-sm text-gray-500 mx-4 pt-4">Convert  PDF files to a set of optimized JPG, PNG, BMP.</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-lg hover:shadow-md p-4 border-[1px] duration-300 hover:scale-105 mt-8 w-[305px] h-[280px] cursor-pointer">
            <div className="flex">
                <Image src="/TXT.png" width={190}
                height={1} alt="powerpoint" className='w-[90px] mt-10 justify-self-start' />
            </div>
            <h3 className="text-lg font-bold ml-4 mt-2">PDF to TXT</h3>
            <p className="text-sm text-gray-500 mx-4 pt-4">Convert your PDF to TXT, and extract text from your PDF.</p>
        </div>
        </div>



        {/* PAGE 2 */}


        <h1 className='font-bold text-3xl mt-24'>Convert from PDF</h1>
        <div className='flex gap-8'>

        {/* Card */}
        <div className="bg-white rounded-lg hover:shadow-md p-4 border-[1px] duration-300 hover:scale-105 mt-8 w-[305px] h-[280px] cursor-pointer">
            <div className="flex">
                <Image src="/W.png" width={190}
                height={1} alt="powerpoint" className='w-[90px] mt-10 justify-self-start' />
            </div>
            <h3 className="text-lg font-bold ml-4 mt-2">PDF to Word</h3>
            <p className="text-sm text-gray-500 mx-4 pt-4">Easily convert PDF to Word document.</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-lg hover:shadow-md p-4 border-[1px] duration-300 hover:scale-105 mt-8 w-[305px] h-[280px] cursor-pointer">
            <div className="flex">
                <Image src="/P.png" width={190}
                height={1} alt="powerpoint" className='w-[90px] mt-10 justify-self-start' />
            </div>
            <h3 className="text-lg font-bold ml-4 mt-2">PDF to PPT</h3>
            <p className="text-sm text-gray-500 mx-4 pt-4">Convert PDF to Powerpoint</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-lg hover:shadow-md p-4 border-[1px] duration-300 hover:scale-105 mt-8 w-[305px] h-[280px] cursor-pointer">
            <div className="flex">
                <Image src="/X.png" width={190}
                height={1} alt="powerpoint" className='w-[90px] mt-10 justify-self-start' />
            </div>
            <h3 className="text-lg font-bold ml-4 mt-2">PDF to Excel</h3>
            <p className="text-sm text-gray-500 mx-4 pt-4">Convert PDF to xls for free.</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-lg hover:shadow-md p-4 border-[1px] duration-300 hover:scale-105 mt-8 w-[305px] h-[280px] cursor-pointer">
            <div className="flex">
                <Image src="/JPG.png" width={190}
                height={1} alt="powerpoint" className='w-[90px] mt-10 justify-self-start' />
            </div>
            <h3 className="text-lg font-bold ml-4 mt-2">PDG to JPG</h3>
            <p className="text-sm text-gray-500 mx-4 pt-4">Convert  PDF files to a set of optimized JPG, PNG, BMP.</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-lg hover:shadow-md p-4 border-[1px] duration-300 hover:scale-105 mt-8 w-[305px] h-[280px] cursor-pointer">
            <div className="flex">
                <Image src="/TXT.png" width={190}
                height={1} alt="powerpoint" className='w-[90px] mt-10 justify-self-start' />
            </div>
            <h3 className="text-lg font-bold ml-4 mt-2">PDF to TXT</h3>
            <p className="text-sm text-gray-500 mx-4 pt-4">Convert your PDF to TXT, and extract text from your PDF.</p>
        </div>
        </div>

    </div>
  )
}

export default Cards
