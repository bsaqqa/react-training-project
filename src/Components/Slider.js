import React from 'react';

const Slider = ()=> {
    return (
        <>
            <section id="slider" className="relative h-screen ">
                <img className="h-5 ml-20 mt-2" src="images/Xicon.svg" />
                <div className="flex flex-col md:h-screen max-w-6xl mx-auto px-5 md:px-4 py-20 mt-10 md:mt-3 md:py-2 lg:px-6">
                    <div className="flex items-center text-lg mb-2">
                        <span className= "text-gray-300 mr-4 uppercase ">Case Studies</span>
                        <img className="h-4" src="images/Zigzag.svg" />
                    </div>
                    <div className="text-primary font-bold text-3xl mb-12">
                        <h1>Read what we have achieved<br/>
                            for our clients
                        </h1>
                    </div>

                    <img className=" absolute h-4 left-20 bottom-80" src="images/circle2.svg" />
                    <img className=" absolute h-10 right-20 bottom-20" src="images/line.svg" />
                </div>
            </section>
        </>
    )
};

export default Slider;



