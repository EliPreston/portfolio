import React from 'react';
import landingBg from '../assets/landing-bg.svg'

function Landing() {
    return (
        <>
            <img src={landingBg} className="bg-fixed fixed top-0 z-[-2] h-screen w-screen"></img>

            <div className="flex flex-col h-screen">
                <div className="">
                    <nav className="flex justify-evenly md:justify-center my-6 w-full p-2 font-mono items-center md:mx-0">
                        
                        <div id="mainMenu" className="hidden justify-center flex flex-col border items-center absolute top-20 z-20 w-5/6 md:flex md:border-none md:relative md:top-0 md:flex-row md:w-3/4 md:mx-2 mx-p-2 font-mono">
                            <a href="#about-section" className="text-center text-sm font-bold text-slate-800 z-20 py-2 px-3 w-3/4 md:mx-4 md:w-2/12 transition-colors duration-500 ease-in-out bg-white hover:bg-slate-100 transform rounded-lg">About</a>
                            <a href="#portfolio-section" className="text-center text-sm font-bold text-slate-800 z-20 py-2 px-3 w-3/4 md:mx-4 md:w-2/12 transition-colors duration-500 ease-in-out bg-white hover:bg-slate-100 transform rounded-lg">Projects</a>
                        </div>

                        <button id="mobile-menu-button" className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-800 rounded-lg transition-colors duration-500 ease-in-out bg-white hover:bg-slate-100 transform">
                            <svg fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>
                    </nav>
                </div>

                <div className="flex-grow flex items-center justify-center">
                    <h1 className="p-4 font-bold text-8xl transition-colors duration-500 ease-in-out text-emerald-500 hover:text-emerald-100 transform">Hi, my name is Eli</h1>
                </div>
            </div>
        </>
    )

}

export default Landing;