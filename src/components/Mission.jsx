import React from 'react';
import Missionimg from '../assets/images/png/mission-img.png';

const Mission = () => {
    return (
        <div className='xl:pt-[119px] md:pt-[60px] relative'>
            <div className=" absolute left-0 bottom-[-13%] blur-[124px] opacity-[70%]  w-[268px] h-[275px] rounded-[50%] bg-gradient-to-l from-[#77B000] to-[#00D863] animate-pulse"></div>
            <div className=" absolute right-0 top-[-12%] blur-[124px] opacity-[70%]  w-[268px] h-[275px] rounded-[50%] bg-gradient-to-l from-[#77B000] to-[#00D863] animate-pulse"></div>
            <div id='about' className='container mx-auto xl:max-w-[1164px] xl:px-3 px-[24px]'>
                <div className='flex xl:flex-row flex-col-reverse flex-wrap items-center justify-center'>
                    <div className='xl:w-1/2 w-[90%] flex justify-center xl:justify-start pt-[30px] xl:pt-0'>
                        <img src={Missionimg} alt="Missionimg" className='w-full xl:max-w-[548px] relative z-[2]' />
                    </div>
                    <div className='xl:w-[48%] w-full lg:ml-[20px]'>
                        <h3 className='font-bold text-[45px] md:text-[48px] text-[#FDFCFC] leading-[62.2px] mb-[8px] lg:mb-[2px] xl:text-start text-center'>Our <span className='bg-gradient-to-br from-[#77B000] to-[#00D863] bg-clip-text text-transparent inline-block'>Mission</span></h3>
                        <p className='xl:max-w-[558px] font-normal text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-[#FDFCFC] mb-[30px] xl:mb-[42px] xl:text-start text-center'>In our commitment to excellence, we create value across these diverse sectors. In Healthcare, we seek to improve patient outcomes and make healthcare more accessible. In Education, we aim to revolutionize learning experiences, empowering individuals with knowledge. In Finance, we strive to enhance financial services, making them more inclusive and efficient. In Marketing, we harness the power of data and AI to drive innovation and growth.</p>
                        <div className='flex xl:justify-start justify-center items-center'>
                            <button className="bg-gradient-to-br from-[#77B000] to-[#00D863] hover:shadow-[0_3px_20px_rgba(255,_255,_255,_1)] capitalize text-nowrap transition-all ease-linear duration-500 py-[16px] px-[42.5px] text-[16px] font-bold text-[#fff] rounded-[61px]">
                                Read More
                            </button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Mission
