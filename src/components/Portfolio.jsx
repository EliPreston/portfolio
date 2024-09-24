import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';

function Portfolio() {
    return (
        <div id='portfolio-section' className="flex flex-col items-center justify-center">
            <h1 className='mt-20 font-bold text-5xl text-white p-4'>Projects</h1>
            <hr className="border-white w-3/4 mb-3" />
            <div className="grid grid-cols-1 gap-4 w-3/4">
                {portfolio.map((project, index) =>
                    <PortfolioItem
                        imgUrl={project.imgUrl}
                        title={project.title}
                        description={project.description}
                        stack={project.stack}
                        link={project.link}
                        index={index}
                    />
                )}
            </div>
        </div>

    )

}

export default Portfolio;