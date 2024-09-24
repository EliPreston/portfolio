import React from 'react';

function About() {
    return (
        <>
            <div id='about-section'  className='flex flex-col items-center justify-center'>
                <h1 className='mt-20 font-bold text-5xl text-white p-4'>About Me</h1>
                <hr className="border-white w-3/4 mb-3" />
            </div>
            <div className="flex flex-col items-center justify-center my-10">
                <div className='shadow-lg shadow-white rounded-xl bg-white text-center w-2/3'>
                    <div className="flex items-center justify-center flex-col text-center pt-20 pb-10">
                        <p className="text-base text-xl font-bold px-16">Computer Science Co-Op Student</p>
                        <p className="text-xs md:text-medium mb-5 font-light text-slate-500">September 2022 - April 2027 (expected)</p>

                        
                        <div className="text-sm max-w-3xl mb-6 px-8 md:px-20 py-4 font-light">
                            <p className="pb-4">
                                I am a computer science co-op student looking to expand my skills and knowledge through projects, volunteering, classes,
                                events, and by meeting new people. My interests in the realm of computer science are pretty broad, but I find myself more
                                interested in backend development/programming, however I do like to work on frontend design as well. My
                                {' '}
                                <a href="https://github.com/EliPreston" target="_blank" className="text-red-700 font-bold hover:underline underline-offset-2 decoration-2 decoration-red-600" rel="noreferrer noopener">
                                    GitHub
                                </a>
                                {' '} 
                                is where I keep the majority of the code/projects I write, and my 
                                {' '}
                                <a href="http://linkedin.com/in/Eli-Preston" target="_blank" className="text-blue-700 font-bold hover:underline underline-offset-2 decoration-2 decoration-blue-500" rel="noreferrer noopener">
                                LinkedIn 
                                </a>
                                {' '}
                                can give you a general overview/timeline of my professional and volunteer experience. Alternatively, please
                                reach out to me on Linkedin if you have any questions or would like to have a coffee chat!
                            </p>
                            <p className="pt-4">
                                While programming is my main interest, I have a variety of other interests and hobbies that take up my time.
                                I enjoy going to the gym, playing sports, reading, and tinkering around with computer/electronics hardware & software.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default About;