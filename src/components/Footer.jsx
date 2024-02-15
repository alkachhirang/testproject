import React, { useState } from 'react';
import Footerlogo from '../assets/images/png/footer-logo.png';
import { Instagram, Facebook, In } from './Iconimg';

const Footer = () => {
    const [nav, setNav] = useState(true);
    return (
        <div className='md:pt-[87px] pt-[50px] relative'>
            <div className=" absolute left-[-5%] bottom-[80%] blur-[124px] opacity-[70%]  w-[268px] h-[275px] rounded-[50%] bg-gradient-to-l from-[#77B000] to-[#00D863] animate-pulse md:block hidden"></div>
            <div className=" absolute right-[-7%] bottom-[0] blur-[124px] opacity-[70%]  w-[235px] h-[235px] rounded-[50%] bg-gradient-to-l from-[#77B000] to-[#00D863] animate-pulse md:block hidden"></div>
            <div className='container mx-auto xl:max-w-[1164px] xl:px-3 px-[24px]'>
                <div className=' flex justify-center items-center flex-col'>
                    <a href=''>
                        <img src={Footerlogo} alt="Footerlogo" className='w-full max-w-[230px] sm:max-w-[271px]' />
                    </a>
                    <p className='text-[#FDFCFC] max-w-[645px] text-[14px] sm:text-[16px] font-normal leading-[20px] sm:leading-[24px] text-center my-[8px] sm:my-[16px]'>Join us on the journey to embrace the future. Experience the transformational impact of AI and automation with Noble mind</p>
                    <ul
                        className='flex gap-[20px] sm:gap-[32px] items-center justify-center'
                    >
                        <li onClick={() => setNav(!nav)}>
                            <a
                                href="#home"
                                className="text-[14px] font-bold leading-[21px] text-[#FAFAFA] hover:after:w-[100%] after:w-0 after:absolute after:mx-auto after:right-0 after:bg-gradient-to-br from-[#77B000] to-[#00D863] after:h-[2px] relative after:left-[0] after:bottom-[-5px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear transition-all ease-linear duration-300"
                            >
                                Home
                            </a>
                        </li>
                        <li onClick={() => setNav(!nav)}>
                            <a
                                href="#about"
                                className="text-[14px] font-bold leading-[21px] text-nowrap text-[#FAFAFA]  hover:after:w-[100%] after:w-0 after:absolute after:mx-auto after:right-0 after:bg-gradient-to-br from-[#77B000] to-[#00D863] after:h-[2px] relative after:left-[0] after:bottom-[-5px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear transition-all ease-linear duration-300"
                            >
                                About Us
                            </a>
                        </li>
                        <li onClick={() => setNav(!nav)}>
                            <a
                                href="#solution"
                                className="text-[14px] font-bold leading-[21px] text-[#FAFAFA] hover:after:w-[100%] after:w-0 after:absolute after:mx-auto after:right-0 after:bg-gradient-to-br from-[#77B000] to-[#00D863] after:h-[2px] relative after:left-[0] after:bottom-[-5px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear transition-all ease-linear duration-300"
                            >
                                Solutions
                            </a>
                        </li>
                        <li onClick={() => setNav(!nav)}>
                            <a
                                href="#resourses"
                                className="text-[14px] font-bold leading-[21px] text-[#FAFAFA] hover:after:w-[100%] after:w-0 after:absolute after:mx-auto after:right-0 after:bg-gradient-to-br from-[#77B000] to-[#00D863] after:h-[2px] relative after:left-[0] after:bottom-[-5px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear transition-all ease-linear duration-300"
                            >
                                Resources
                            </a>
                        </li>
                        <li onClick={() => setNav(!nav)}>
                            <a
                                href="#contact"
                                className="text-[14px] font-bold text-[nowrap] leading-[21px] text-[#FAFAFA] hover:after:w-[100%] after:w-0 after:absolute after:mx-auto after:right-0 after:bg-gradient-to-br from-[#77B000] to-[#00D863] after:h-[2px] relative after:left-[0] after:bottom-[-5px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear transition-all ease-linear duration-300 sm:block hidden"
                            >
                                Contact Info
                            </a>
                        </li>
                    </ul>
                    <div className='flex gap-[24px] mt-[32px]'>
                        <Instagram />
                        <Facebook />
                        <In />
                    </div>
                </div>
                <div className='border-t border-solid border-[1px] border-[#FDFCFC] md:mt-[45px] mt-[30px]'></div>
                <p className='sm:py-[24px] py-[15px] font-normal text-[14px] leading-[21.7px] text-[#FAFAFA] text-center '>© Noble MInd IT 2023. All Rights Reserved.</p>
            </div>

        </div>
    )
}

export default Footer
