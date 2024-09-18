import React from 'react'
import img1 from '../../assets/images/1.jpg'
import img2 from '../../assets/images/2.jpg'
import img3 from '../../assets/images/3.jpg'
import img4 from '../../assets/images/4.jpg'
import img5 from '../../assets/images/5.jpg'
import img6 from '../../assets/images/6.jpg'
export default function Menu() {
    return <>
        <div className="h-full min-h-screen w-screen bg-[#f5f1e8] border-b-[12px] border-[#eec748] border-solid ">
            {/* header */}
            <div className='w-fit relative m-auto text-xl md:text-4xl uppercase tracking-widest before:block before:absolute before:h-[2px] before:w-12 before:bg-[#dac164] before:end-full before:top-1/2 after:block after:absolute after:h-[2px] after:w-12 after:bg-[#dac164] after:start-full after:top-1/2 '>
                <h1 className='py-8 px-8 text-[#dac164] '>fast react pizza</h1>
            </div>

            {/* menu header */}
            <div className='w-fit m-auto font-semibold relative tracking-widest uppercase before:block before:absolute before:h-[0.5px] before:w-full before:bg-black before:top-0 after:block after:absolute after:w-full after:h-[0.5px] after:bg-black after:bottom-0  ' >
                <h2 className='p-2'>our menu</h2>
            </div>

            {/* desc */}
            <div className='w-fit m-auto text-center my-6 font-mono text-sm'>
                <h3>best pizza restaurant ever !!</h3>
                <h3>Cairo ,Egypt</h3>
            </div>

            {/* menu items */}
            <div className='w-full md:w-1/2 flex flex-wrap m-auto '>
                <div className="w-full px-5 py-3 md:p-0 md:w-1/2 md:pe-3 flex gap-x-4 md:mb-5">
                    <div className='w-1/3 '>
                        <img src={img1} alt="" />
                    </div>
                    <div className='w-2/3 flex flex-col justify-between '>
                        <div>
                            <h2 className='capitalize font-mono'>peperoni pizza</h2>
                            <p className='font-mono text-sm text-gray-5600'>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div >
                            5
                        </div>
                    </div>
                </div>
                <div className="w-full px-5 py-3 md:p-0 md:w-1/2 md:pe-3 flex gap-x-4 md:mb-5">
                    <div className='w-1/3 '>
                        <img src={img2} alt="" />
                    </div>
                    <div className='w-2/3 flex flex-col justify-between '>
                        <div>
                            <h2 className='capitalize font-mono'>peperoni pizza</h2>
                            <p className='font-mono text-sm text-gray-5600'>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div >
                            5
                        </div>
                    </div>
                </div>
                <div className="w-full px-5 py-3 md:p-0 md:w-1/2 md:pe-3 flex gap-x-4 md:mb-5">
                    <div className='w-1/3 '>
                        <img src={img3} alt="" />
                    </div>
                    <div className='w-2/3 flex flex-col justify-between '>
                        <div>
                            <h2 className='capitalize font-mono'>peperoni pizza</h2>
                            <p className='font-mono text-sm text-gray-5600'>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div >
                            5
                        </div>
                    </div>
                </div>
                <div className="w-full px-5 py-3 md:p-0 md:w-1/2 md:pe-3 flex gap-x-4 md:mb-5">
                    <div className='w-1/3 '>
                        <img src={img4} alt="" />
                    </div>
                    <div className='w-2/3 flex flex-col justify-between '>
                        <div>
                            <h2 className='capitalize font-mono'>peperoni pizza</h2>
                            <p className='font-mono text-sm text-gray-5600'>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div >
                            5
                        </div>
                    </div>
                </div>
                <div className="w-full px-5 py-3 md:p-0 md:w-1/2 md:pe-3 flex gap-x-4 md:mb-5 filter grayscale">
                    <div className='w-1/3 '>
                        <img src={img5} alt="" />
                    </div>
                    <div className='w-2/3 flex flex-col justify-between '>
                        <div>
                            <h2 className='capitalize font-mono'>peperoni pizza</h2>
                            <p className='font-mono text-sm text-gray-5600'>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div >
                            Sold out
                        </div>
                    </div>
                </div>
                <div className="w-full px-5 py-3 md:p-0 md:w-1/2 md:pe-3 flex gap-x-4 md:mb-5first-line:">
                    <div className='w-1/3 '>
                        <img src={img6} alt="" />
                    </div>
                    <div className='w-2/3 flex flex-col justify-between '>
                        <div>
                            <h2 className='capitalize font-mono'>peperoni pizza</h2>
                            <p className='font-mono text-sm text-gray-5600'>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div >
                            5
                        </div>
                    </div>
                </div>

            </div>

            {/* Order  */}
            <div className='mb-5'>
                <h4 className="text-center font-mono">we're Open until 22.00</h4>
                <div className='bg-[#eec748] w-fit m-auto mt-2'>
                    <button className='capitalize py-2 px-4 '>Order</button>
                </div>
            </div>

        </div>
    </>
}
