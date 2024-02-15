import React from 'react';
import Circle2 from '../assets/images/png/circle-2.png';
import Circle1 from '../assets/images/png/circle-1.png';


const Consultation = () => {
    return (
        <div>
            <div className='container mx-auto xl:max-w-[1164px] xl:px-3 px-[24]'>
                <div className='bg-gradient-to-br from-[#77B000] to-[#00D863] rounded-[24px] py-[30px] sm:py-[50px] lg:py-[88px] relative xl:max-w-[1140px] mx-[20px] xl:mx-0 p-[18px] md:p-[25px] lg:p-0'>
                    <img src={Circle2} alt="Circle" className='absolute left-0 bottom-0 sm:block hidden' />
                    <img src={Circle1} alt="Circle" className='absolute right-0 top-0 sm:block hidden' />
                    <div className='flex justify-center items-center flex-col'>
                        <h2 className='text-[#FFFFFF] text-[30px] md:text-[39px] lg:text-[48px] leading-[40px] sm:leading-[55.2px] font-bold mb-[10px] text-center'>So, what you’ve been waiting for?</h2>
                        <p className='text-[#FFFFFF] font-normal text-[16px] leading-[25.6px] max-w-[788px] text-center'>Ipsum integer faucibus eu morbi integer. Tempus in volutpat libero mauris neque dolor pellentesque sagittis. Scelerisque tempor auctor euismod rhoncus non elit molestie sed. Orci quam at varius eget.</p>
                        <div className='flex  justify-center items-center mt-[31px]'>
                            <button className="bg-[#fff] hover:shadow-[0_3px_20px_rgba(255,_255,_255,_1)] capitalize text-nowrap transition-all ease-linear duration-500 py-[16px] px-[42.5px] text-[14px] sm:text-[16px] font-bold  text-[#00D863] rounded-[61px]">
                                Get a Free Consultation
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Consultation
