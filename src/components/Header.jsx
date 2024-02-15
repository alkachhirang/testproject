import React, { useState } from 'react';
import Navlogo from '../assets/images/png/nav-logo.png';
import Headerimg from '../assets/images/png/headerimg.png';
import Circle1 from '../assets/images/png/hero-circle-1.png';
import Circle2 from '../assets/images/png/hero-circle-2.png';
import Line1 from '../assets/images/png/line-img.png';


const Header = () => {
    const [nav, setNav] = useState(true);
    if (nav === false) {
        document.body.classList.add("max-lg:overflow-hidden");
    } else {
        document.body.classList.remove("max-lg:overflow-hidden");
    }
    return (
        <div className='relative'>
            <div className=" absolute left-0 top-[17%] blur-[124px] opacity-[70%]  w-[268px] h-[275px] rounded-[50%] bg-gradient-to-l from-[#77B000] to-[#00D863] animate-pulse"></div>
            <div className=" absolute right-0 top-[27%] blur-[124px] opacity-[70%]  w-[268px] h-[275px] rounded-[50%] bg-gradient-to-l from-[#77B000] to-[#00D863] animate-pulse"></div>
            <div className="container mx-auto xl:max-w-[1164px] xl:px-3 px-[24px]">
                <div className="flex items-center justify-between pt-[18px] pb-[18.23px]">
                    <a
                        href="#"
                    >
                        <img
                            src={Navlogo}
                            alt="Navlogo "
                            className="max-w-[91px] w-full"
                        />
                    </a>
                    <ul
                        className={`${nav ? "left-[-100%]" : "left-0"
                            } flex max-lg:fixed max-lg:top-0 max-lg:bg-black max-lg:h-full max-lg:w-full max-lg:z-[7] max-lg:transition-all max-lg:duration-300 max-lg:ease-linear max-lg:min-h-screen max-lg:flex-col gap-[32px] items-center justify-center`}
                    >
                        <li onClick={() => setNav(!nav)}>
                            <a
                                href="#home"
                                className="text-[16px] font-normal leading-[24px] text-[#b1b0b0] hover:text-[#FDFCFC] hover:after:w-[100%] after:w-0 after:absolute after:mx-auto after:right-0 after:bg-gradient-to-br from-[#77B000] to-[#00D863] after:h-[2px] relative after:left-[0] after:bottom-[-5px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear transition-all ease-linear duration-300"
                            >
                                Home
                            </a>
                        </li>
                        <li onClick={() => setNav(!nav)}>
                            <a
                                href="#about"
                                className="text-[16px] font-normal leading-[24px] text-[#b1b0b0] hover:text-[#FDFCFC]  hover:after:w-[100%] after:w-0 after:absolute after:mx-auto after:right-0 after:bg-gradient-to-br from-[#77B000] to-[#00D863] after:h-[2px] relative after:left-[0] after:bottom-[-5px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear transition-all ease-linear duration-300"
                            >
                                About Us
                            </a>
                        </li>
                        <li onClick={() => setNav(!nav)}>
                            <a
                                href="#solutions"
                                className="text-[16px] font-normal leading-[24px] text-[#b1b0b0] hover:text-[#FDFCFC]  hover:after:w-[100%] after:w-0 after:absolute after:mx-auto after:right-0 after:bg-gradient-to-br from-[#77B000] to-[#00D863] after:h-[2px] relative after:left-[0] after:bottom-[-5px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear transition-all ease-linear duration-300"
                            >
                                Solutions
                            </a>
                        </li>
                        <li onClick={() => setNav(!nav)}>
                            <a
                                href="#resourses"
                                className="text-[16px] font-normal leading-[24px] text-[#b1b0b0] hover:text-[#FDFCFC] hover:after:w-[100%] after:w-0 after:absolute after:mx-auto after:right-0 after:bg-gradient-to-br from-[#77B000] to-[#00D863] after:h-[2px] relative after:left-[0] after:bottom-[-5px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear transition-all ease-linear duration-300"
                            >
                                Resources
                            </a>
                        </li>
                        <li className="lg:hidden block">
                            <button className="bg-gradient-to-br from-[#77B000] to-[#00D863] hover:shadow-[0_3px_20px_rgba(255,_255,_255,_1)] capitalize text-nowrap transition-all ease-linear duration-500 py-[16px] px-[41.5px] text-[16px] font-bold text-[#fff] rounded-[61px]">
                                Contact Us
                            </button>
                        </li>
                    </ul>
                    <div className=" lg:block hidden">
                        <button className="bg-gradient-to-br from-[#77B000] to-[#00D863] hover:shadow-[0_3px_20px_rgba(255,_255,_255,_1)] capitalize text-nowrap transition-all ease-linear duration-500 py-[16px] px-[41.5px] text-[16px] font-bold text-[#FDFCFC] rounded-[61px]">
                            Contact Us
                        </button>
                    </div>
                    <div
                        onClick={() => setNav(!nav)}
                        className="lg:hidden w-[28px] h-[20px] relative z-[10] flex justify-between flex-col"
                    >
                        <span
                            className={`${nav
                                ? "bg-gradient-to-br from-[#77B000] to-[#00D863] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all"
                                : "bg-gradient-to-br from-[#77B000] to-[#00D863] transition-all duration-300 rounded-[3px] ease-linear h-[4px] w-full rotate-[50deg] translate-y-[14px]"
                                }`}
                        ></span>
                        <span
                            className={`${nav
                                ? "bg-gradient-to-br from-[#77B000] to-[#00D863] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all"
                                : "duration-300 rounded-[3px] ease-linear transition-all hidden"
                                }`}
                        ></span>
                        <span
                            className={`${nav
                                ? "bg-gradient-to-br from-[#77B000] to-[#00D863] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all"
                                : "bg-gradient-to-br from-[#77B000] to-[#00D863] transition-all duration-300 rounded-[3px] ease-linear h-[4px] w-full rotate-[-50deg] translate-y-[-50%]"
                                }`}
                        ></span>
                    </div>
                </div>
            </div>
            <div id='home' className='container mx-auto xl:max-w-[1280px] xl:px-3 px-[24px] pb-[47px]'>
                <div className='flex justify-center items-center flex-col sm:mt-[44px] mt-[24px]'>
                    <h1 className='text-[#FDFCFC] font-bold capitalize text-center max-w-[948px] leading-[140%] sm:leading-[57px] md:leading-[68.6px] text-[30px] sm:text-[45px] md:text-[55px] lg:text-[64px]'>Elevate Your Solutions with <span className='ff_montserrat font-bold bg-gradient-to-br from-[#77B000] to-[#00D863] bg-clip-text text-transparent inline-block'>Noble Mind IT</span></h1>
                    <p className='font-normal text-[14px] sm:text-[16px] leading-[160%] sm:leading-[24px] text-center text-[#FDFCFC] mt-[8px] sm:mt-[16px] md:max-w-[949px]'>At Noble Mind IT, we're dedicated to taking your IT solutions to new heights. In today's ever-evolving technological landscape, having a trusted partner to elevate your IT infrastructure is paramount.</p>
                </div>
                <div className='relative flex justify-center items-center pt-[25px] sm:pt-[35px] md:pt-[65px]'>
                    <img src={Circle1} alt="Circle1" className='absolute w-full max-w-[101px] xl:top-[22px] xl:left-0 top-[2%] left-[-2%] sm:block hidden' />
                    <img src={Circle2} alt="Circle2" className='absolute w-full max-w-[101px] bottom-[-10%] xl:bottom-[-34px] right-0 sm:block hidden' />
                    <img src={Headerimg} alt="Headerimg" className='w-full  xl:max-w-[1139px] relative z-[2] shadow-[0_0px_100px_0px_rgba(45,_202,_63,_0.1)]' />
                    <div className='xl:max-w-[997px] lg:max-w-[550px] sm:max-w-[270px] max-w-[190px] bg-Bgblur lg:bg-bgsize bg-cover w-full absolute z-[3] rounded-[12px] lg:pl-[12px] xl:pl-[40px] lg:pr-[12px] lg:py-[12px] p-[10px] sm:p-[15px] bottom-[-15%] sm:bottom-[20px] lg:bottom-[35px] xl:bottom-[52px] right-[4%] sm:right-[unset] left_20  '>
                        <div className='flex-row flex-wrap flex items-center xl:justify-between justify-center w-full gap-[5px] md:gap-[8px] lg:gap-[0] '>
                            <div className='lg:w-[32%] w-full flex lg:justify-end xl:justify-start lg:mr-[20px] xl:mr-0 '>
                                <div className='flex items-center lg:gap-[12px] gap-[8px] '>
                                    <div className='flex '>
                                        <h2 className='font-bold text-[16px] sm:text-[24px] md:text-[35px] lg:text-[50px] xl:text-[60px] leading-[100%] lg:leading-[66px] text-[#FDFCFC] sm:mb-[5px]'>8</h2>
                                        <h2 className='font-bold  text-[16px] sm:text-[24px] md:text-[35px] lg:text-[50px] xl:text-[60px] leading-[100%] lg:leading-[63px] text-[#FDFCFC] sm:mb-[5px]'>+</h2>
                                    </div>
                                    <p className='font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[100%] sm:leading-[26.1px] text-[#FFFFFF] lg:max-w-[119px]'>Years of Experience</p>
                                </div>
                            </div>
                            <div className='w-[1%] lg:block hidden'>
                                <img src={Line1} alt="Line1" className='' />
                            </div>
                            <div className='lg:w-[32%] w-full flex lg:justify-center items-center lg:ml-[30px] xl:ml-0'>
                                <div className='flex items-center lg:gap-[12px] gap-[8px] '>
                                    <div className='flex '>
                                        <h2 className='font-bold text-[16px] sm:text-[24px] md:text-[35px] lg:text-[50px] xl:text-[60px] leading-[100%] lg:leading-[66px] text-[#FDFCFC] sm:mb-[5px]'>50</h2>
                                        <h2 className='font-bold text-[16px] sm:text-[24px] md:text-[35px] lg:text-[50px] xl:text-[60px] leading-[100%] lg:leading-[63px] text-[#FDFCFC] sm:mb-[5px]'>+</h2>
                                    </div>
                                    <p className='font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[100%] sm:leading-[26.1px] text-[#FFFFFF] lg:max-w-[119px]'>Successful Projects</p>
                                </div>
                            </div>
                            <div className='w-[1%] xl:block hidden'>
                                <img src={Line1} alt="Line1" className='' />
                            </div>
                            <div className='xl:w-[32%] w-full flex lg:justify-center items-center lg:pt-[10px] xl:pt-0'>
                                <div className='flex items-center lg:gap-[12px] gap-[8px] '>
                                    <div className='flex '>
                                        <h2 className='font-bold text-[16px] sm:text-[24px] md:text-[35px] lg:text-[50px] xl:text-[60px] leading-[100%] lg:leading-[66px] text-[#FDFCFC] mb-[5px]'>30</h2>
                                        <h2 className='font-bold text-[16px] sm:text-[24px] md:text-[35px] lg:text-[50px] xl:text-[60px] leading-[100%] lg:leading-[63px] text-[#FDFCFC] mb-[5px]'>+</h2>
                                    </div>
                                    <p className='font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[100%] sm:leading-[26.1px] text-[#FFFFFF] lg:max-w-[119px]'>Satisfied Customers</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className='flex justify-center items-center xl:mt-[45px] sm:mt-[35px] mt-[50px]'>
                    <button className="bg-gradient-to-br from-[#77B000] to-[#00D863] hover:shadow-[0_3px_20px_rgba(255,_255,_255,_1)] capitalize text-nowrap transition-all ease-linear duration-500 py-[16px] px-[42.5px] text-[16px] font-bold text-[#fff] rounded-[61px]">
                        Get Started
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Header
