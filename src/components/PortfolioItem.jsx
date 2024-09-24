import React from 'react';

function PortfolioItem({title, imgUrl, description, stack, link, index}) {
    return (

        <>
            <div className='rounded-3xl shadow-xl shadow-slate-400 overflow-hidden m-3 mb-16 bg-slate-300'>
                <div className="flex flex-col md:flex-row">   
                    {(index % 2 == 0) ? (
                        <>
                            <img src={imgUrl} alt="portfolio pic here" className="w-full md:w-3/4 h-36 md:h-80 object-cover cursor-pointer"/>
                            <div className="w-full p-8">
                                <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
                                    <a href={link} target="_blank" className=" font-bold hover:underline underline-offset-2 decoration-2 decoration-red-600 text-slate-800 hover:text-slate-500" rel="noreferrer noopener">{title}</a>
                                </h3>
                                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
                                    {stack.map(item => <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-sm hover:bg-white">{item}</span>)}
                                </p>
                                <p className="hidden md:block pt-5 text-sm font-light text-slate-900">{description}</p>
                            </div> 
                        </>
                    ) : (
                        <>
                            <img src={imgUrl} alt="portfolio pic here" className=" md:hidden w-full md:w-3/4 h-36 md:h-80 object-cover cursor-pointer"/>  
                            <div className="w-full p-8">
                                <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
                                    <a href={link} target="_blank" className=" font-bold hover:underline underline-offset-2 decoration-2 decoration-red-600 text-slate-800 hover:text-slate-500" rel="noreferrer noopener">{title}</a>
                                </h3>
                                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
                                    {stack.map(item => <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-sm hover:bg-white">{item}</span>)}
                                </p>
                                <p className="hidden md:block pt-5 text-sm font-light text-slate-900">{description}</p>
                            </div>
                            <img src={imgUrl} alt="portfolio pic here" className="hidden md:block w-full md:w-3/4 h-36 md:h-80 object-cover cursor-pointer"/>  
                        </>
                    )}

                </div>
                <p className="block md:hidden p-4 px-4 text-xs md:text-sm lg:text-base">{description}</p>

            </div>
        </>
        
    )

}

export default PortfolioItem;