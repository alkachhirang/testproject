import React from "react";
import JoinImg1 from "../assets/images/png/joinimg1.png";
import JoinImg2 from "../assets/images/png/joinimg2.png";
import JoinImg3 from "../assets/images/png/joinimg3.png";
import JoinImg4 from "../assets/images/png/joinimg4.png";
import JoinImg5 from "../assets/images/png/joinimg5.png";
import JoinImg6 from "../assets/images/png/joinimg2.png";

const JoinSection = () => {
    return (
        <>
            <div className=" bg-white relative z-[2]">
                <div className=" absolute right-0 top-[0] blur-[124px] opacity-[70%]  w-[268px] h-[275px] rounded-[50%] bg-gradient-to-l from-[#77B000] to-[#00D863] animate-pulse md:block hidden"></div>
                <div className=" absolute left-0 bottom-[0] blur-[124px] opacity-[70%]  w-[268px] h-[275px] rounded-[50%] bg-gradient-to-l from-[#77B000] to-[#00D863] animate-pulse md:block hidden"></div>
                <div className="container mx-auto xl:max-w-[1164px] xl:px-3 px-6 md:py-[80px] py-[50px] xl:pt-[109px] xl:pb-[116px] ">
                    <div className=" flex flex-row flex-wrap items-center">
                        <div className="lg:w-[52%] w-full" data-aos="fade-right">
                            <h2 className="lg:max-w-[456px] max-lg:text-center capitalize md:text-[48px] sm:text-[42px] text-[36px] text-black font-bold leading-[111%] ">
                                Join 4,000+<br className="lg:block hidden" /> companies <span className="bg-gradient-to-br from-[#77B000] to-[#00D863] bg-clip-text text-transparent inline-block">already</span><span className='bg-gradient-to-br from-[#77B000] to-[#00D863] bg-clip-text text-transparent inline-block'>growing</span>
                            </h2>
                        </div>
                        <div className="lg:w-[48%] w-full pt-9 lg:pt-0" data-aos="fade-left">
                            <div className=" flex flex-col gap-[47px] max-sm:gap-8">
                                <div className=" flex gap-[52px] max-sm:gap-24 max-lg:justify-center">
                                    <img
                                        src={JoinImg1}
                                        alt="JoinImg1"
                                        className="w-full sm:max-w-[165px] max-w-[100px]"
                                    />
                                    <img
                                        src={JoinImg2}
                                        alt="JoinImg2"
                                        className="w-full sm:max-w-[180px] max-w-[100px]"
                                    />
                                </div>
                                <div className=" flex gap-[52px] max-sm:gap-24 lg:justify-end justify-center">
                                    <img
                                        src={JoinImg3}
                                        alt="JoinImg3"
                                        className="w-full sm:max-w-[211px] max-w-[100px] "
                                    />
                                    <img
                                        src={JoinImg4}
                                        alt="JoinImg4"
                                        className="w-full sm:max-w-[206px] max-w-[100px] "
                                    />
                                </div>
                                <div className=" flex gap-[52px] max-sm:gap-24 max-lg:justify-center">
                                    <img
                                        src={JoinImg5}
                                        alt="JoinImg5"
                                        className="w-full sm:max-w-[191px] max-w-[100px] "
                                    />
                                    <img
                                        src={JoinImg6}
                                        alt="JoinImg6"
                                        className="w-full sm:max-w-[180px] max-w-[100px] "
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JoinSection;


