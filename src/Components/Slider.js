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

                    <div className= " inline-grid grid-cols-3 gap-x-4">
                        <img className="md:inline-flex sm:flex-col" src="images/Mask1.png"/>
                        <img className="md:inline-flex sm:flex-col" src="images/Mask2.png"/>
                        <img className="md:inline-flex sm:flex-col" src="images/Mask3.png"/>
                    </div>

                    <div >
                        <span className="text-primary font-bold mr-3"> PREV </span>
                        <button className="bg-primary border-none p-0.5 w-9 cursor-pointer " onClick="" ></button>
                        <button className="bg-gray-300 border-none p-0.5 w-9 cursor-pointer " onClick=""></button>
                        <span className="font-bold ml-3 text-gray-300"> NEXT </span>
                    </div>

                    <img className=" absolute h-4 left-20 bottom-40 " src="images/circle2.svg" />
                    <img className=" absolute h-12 right-20 bottom-5" src="images/line.svg" />

                </div>
            </section>
        </>
    )
};

export default Slider;



