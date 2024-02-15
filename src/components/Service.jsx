import React from 'react';
import { Service1 } from './Iconimg';
import { Service2 } from './Iconimg';
import { Service3 } from './Iconimg';
import { Service4 } from './Iconimg';
import { Service5 } from './Iconimg';
import { Service6 } from './Iconimg';

const Service = () => {
    return (
        <div className='xl:pt-[119px] md:pt-[90px]  xl:pb-[122px] md:pb-[90px] py-[50px] bg-[#FDFCFC] '>
            <div id='solutions' className='container mx-auto xl:max-w-[1164px] xl:px-3 px-[24px]'>
                <h3 className='font-bold text-[45px] md:text-[48px] text-[#000] leading-[52.4px] mb-[45px] md:mb-[52px] text-center'>Our <span className='bg-gradient-to-br from-[#77B000] to-[#00D863] bg-clip-text text-transparent inline-block'>Services</span></h3>
                <div className='flex flex-row flex-wrap justify-center lg:justify-between gap-[24px] lg:gap-[0]'>
                    <div className='lg:w-[32%] md:w-[48%] w-full'>
                        <div className='bg-[#FDFCFC] cursor-pointer min-h-[270px] w-full p-[20px] hover:shadow-[0_9px_50px_0px_rgba(0,_0,_0,_0.12)] rounded-[12px] transition-all ease-linear duration-300'>
                            <div className='mb-[20px]'>
                                <Service1 />
                            </div>
                            <h4 className='font-bold text-[#000] leading-[33.6px] text-[24px] mb-[8px]'>Healthcare</h4>
                            <p className='font-normal text-[16px]leading-[24px] md:max-w-[324px]'>we are on a mission to revolutionize the field of Healthcare through cutting-edge innovation.</p>
                        </div>
                    </div>
                    <div className='lg:w-[32%]  md:w-[48%] w-full'>
                        <div className='bg-[#FDFCFC] cursor-pointer min-h-[270px] w-full p-[20px] hover:shadow-[0_9px_50px_0px_rgba(0,_0,_0,_0.12)] rounded-[12px] transition-all ease-linear duration-300'>
                            <div className='mb-[20px]'>
                                <Service2 />
                            </div>
                            <h4 className='font-bold text-[#000] leading-[33.6px] text-[24px] mb-[8px]'>Education</h4>
                            <p className='font-normal text-[16px]leading-[24px] md:max-w-[324px]'>Education is rooted in the idea that learning should be a lifelong journey</p>
                        </div>
                    </div>
                    <div className='lg:w-[32%]  md:w-[48%] w-full'>
                        <div className='bg-[#FDFCFC] cursor-pointer min-h-[270px] w-full p-[20px] hover:shadow-[0_9px_50px_0px_rgba(0,_0,_0,_0.12)] rounded-[12px] transition-all ease-linear duration-300'>
                            <div className='mb-[20px]'>
                                <Service3 />
                            </div>
                            <h4 className='font-bold text-[#000] leading-[33.6px] text-[24px] mb-[8px]'>Finance</h4>
                            <p className='font-normal text-[16px]leading-[24px] md:max-w-[324px]'>Recognizing that knowledge is the cornerstone of financial empowerment</p>
                        </div>
                    </div>
                    <div className='lg:w-[32%]  md:w-[48%] w-full lg:mt-[24px]'>
                        <div className='bg-[#FDFCFC] cursor-pointer min-h-[270px] w-full p-[20px] hover:shadow-[0_9px_50px_0px_rgba(0,_0,_0,_0.12)] rounded-[12px] transition-all ease-linear duration-300'>
                            <div className='mb-[20px]'>
                                <Service4 />
                            </div>
                            <h4 className='font-bold text-[#000] leading-[33.6px] text-[24px] mb-[8px]'>Marketing</h4>
                            <p className='font-normal text-[16px]leading-[24px] md:max-w-[324px]'> where marketing campaigns are driven by data-driven insights, and where creativity knows no bounds.</p>
                        </div>
                    </div>
                    <div className='lg:w-[32%]  md:w-[48%] w-full lg:mt-[24px]'>
                        <div className='bg-[#FDFCFC] cursor-pointer min-h-[270px] w-full p-[20px] hover:shadow-[0_9px_50px_0px_rgba(0,_0,_0,_0.12)] rounded-[12px] transition-all ease-linear duration-300'>
                            <div className='mb-[20px]'>
                                <Service5 />
                            </div>
                            <h4 className='font-bold text-[#000] leading-[33.6px] text-[24px] mb-[8px]'>Entertainment</h4>
                            <p className='font-normal text-[16px]leading-[24px] md:max-w-[324px]'>We believe that technology has the power to transport individuals to new worlds, unlock creativity</p>
                        </div>
                    </div>
                    <div className='lg:w-[32%]  md:w-[48%] w-full lg:mt-[24px]'>
                        <div className='bg-[#FDFCFC] cursor-pointer min-h-[270px] w-full p-[20px] hover:shadow-[0_9px_50px_0px_rgba(0,_0,_0,_0.12)] rounded-[12px] transition-all ease-linear duration-300'>
                            <div className='mb-[20px]'>
                                <Service6 />
                            </div>
                            <h4 className='font-bold text-[#000] leading-[33.6px] text-[24px] mb-[8px]'>Agriculture</h4>
                            <p className='font-normal text-[16px]leading-[24px] md:max-w-[324px]'>We are passionate about regenerative farming practices and sustainable agriculture</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Service
