import React from 'react';
import Preloaderimg from '../assets/images/png/nav-logo.png';

const Preloader = () => {
    return (
        <div>
            <div className='flex items-center justify-center flex-col min-h-screen bg-[#000]'>
                <div className='flex justify-center items-center'>
                    <img src={Preloaderimg} alt="Preloaderimg" className='sm:max-w-[150px] max-w-[100px] animate-bounce w-full' />
                </div>
            </div>
        </div>
    )
}

export default Preloader;
