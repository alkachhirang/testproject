import React from 'react';
import Visionimg from '../assets/images/png/vision-img.png';
import { Greentick } from './Iconimg';

const Vision = () => {
    return (
        <div className='xl:pt-[124px] md:pt-[80px] xl:pb-[152px] md:pb-[100px] py-[50px]'>
            <div className='container mx-auto xl:max-w-[1164px] xl:px-3 px-[24px]'>
                <div className='flex flex-row flex-wrap xl:justify-between justify-center items-center '>
                    <div className='xl:w-[42%] w-full'>
                        <h3 className='font-bold text-[45px] md:text-[48px] text-[#FDFCFC] leading-[62.4px] mb-[8px] sm:mb-[16px] xl:text-start text-center'>Our <span className='bg-gradient-to-br from-[#77B000] to-[#00D863] bg-clip-text text-transparent inline-block'>Vision</span></h3>
                        <p className='font-normal text-[14px] sm:text-[16px] text-[#FDFCFC] xl:max-w-[461px] xl:text-start text-center'>The future of how we live, work, and learn. We see a world where technology is not just a tool but a transformative force for good, reshaping every aspect of human existence.</p>
                        <div className='mt-[25px] flex gap-[12px] flex-col'>
                            <div className='bg-gradient-to-br from-[#77B000] to-[#00D863] p-[1px] rounded-[16px]'>
                                <div className='bg-black back p-[20px] xl:p-[12px] rounded-[16px]'>
                                    <div className='flex gap-[10px]'>
                                        <div>
                                            <Greentick />
                                        </div>
                                        <p className='xl:max-w-[386px] font-normal text-[16px] leading-[24px] text-[#FDFCFC] ff_montserrat'>The future of how we live, work, and learn. We see a world where technology is not just a tool but a transformative force for good, reshaping every aspect of human existence.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-gradient-to-br from-[#77B000] to-[#00D863] p-[1px] rounded-[16px]'>
                                <div className='bg-black back p-[20px] xl:p-[12px] rounded-[16px]'>
                                    <div className='flex w-full gap-[10px]'>
                                        <div>
                                            <Greentick />
                                        </div>
                                        <p className='xl:max-w-[375px] font-normal text-[16px] leading-[24px] text-[#FDFCFC] ff_montserrat'>Technology is seen as a force for good, capable of driving positive change in society and improving the human experience.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-gradient-to-br from-[#77B000] to-[#00D863] p-[1px] rounded-[16px]'>
                                <div className='bg-black back p-[20px] xl:p-[12px] rounded-[16px]'>
                                    <div className='flex gap-[10px]'>
                                        <div>
                                            <Greentick />
                                        </div>
                                        <p className='xl:max-w-[349px] font-normal text-[16px] leading-[24px] text-[#FDFCFC] ff_montserrat'>Share insights and innovations that have a positive impact across borders and sectors.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='xl:w-[53%] w-[90%] pt-[45px] xl:pt-0'>
                        <img src={Visionimg} alt="Visionimg" className='w-full rounded-[17px] xl:max-w-[615px]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vision
