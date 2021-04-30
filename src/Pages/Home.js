import React from "react";
import styled from 'styled-components'

import Button from '../Components/Button'
// const Button = styled.button`
//   @apply text-white font-medium border-2 border-primary-900 bg-primary-900 px-6 lg:px-8 py-2
// `;
//



const Home = ()=>{
    return (
        <>
            {/* Hero section */}
            <section id="hero-section" className="relative  h-screen">
                <div className="flex md:h-screen max-w-6xl mx-auto px-5 md:px-4 py-20 mt-10 md:mt-0 md:py-2 lg:px-6">

                    <div className="md:flex-1 justify-center self-center">
                        <div className="flex items-center text-lg mb-2">
                            <span className="text-gray-300 mr-4">OUR GOAL</span>
                            <img className="h-4" src="images/Zigzag.svg" />
                        </div>
                        <h1 className="text-3xl	font-bold mb-10">
                            We Build Products
                            That Connects You With The World.
                        </h1>
                        <Button className="uppercase">Get in touch</Button>
                    </div>
                    <div className="md:flex-1">
                    </div>
                </div>

                <img className="md:absolute right-0 top-0 bottom-0 max-h-auto md:max-h-screen w-full px-5 md:px-0 md:w-1/2 object-cover  z-[-1] z--1"
                     src={require('../assets/images/Hero-image.jpg').default}/>
            </section>

            {/*<AboutSection/>*/}

            {/*<contactSection/>*/}

            <section id="contact-section" className="relative md:py-9  md:h-auto max-h-full md:max-h-screen bg-primary-900 mt-36 mb-36">

                <img className=" lg:h-32 md:h-28 md:absolute left-10 hidden  md:block md:-top-16" src="/images/shape1-contact.svg" />

                <div className="md:flex  sm:m-auto md:h-full max-w-6xl mx-auto px-5 md:px-4 py-20 mt-10 md:mt-0 md:py-3 lg:px-6 lg:mt-4 ">

                    <div className="  md:flex-1 justify-center self-center">
                        <div className="flex items-center text-lg mb-2">
                            <span className="text-white mr-4">OUR GOAL</span>
                            <img className="h-4" src="images/Zigzag.svg" />
                        </div>
                        <h2 className="text-2xl text-white pr-3 	font-bold mb-10">
                            Got tons of new ideas or you just curiosity mind, and love to explore?

                        </h2>

                        <h6 className="text-lg text-white lg:pr-32 	font-medium mb-10">
                            Hit the button we are ready for collabs and new projects!
                        </h6>


                    </div>
                    <img className=" lg:h-8 h-4 md:absolute   right-16   md:block top-16" src="/images/shape3-contact.svg" />

                    <div className=" md:flex-1 justify-center self-center ">
                        <div className="flex flex-col items-center justify-center text-lg mb-2">
                            <input type="text" placeholder="input"/>

                        </div>
                    </div>

                </div>
                <img className="h-16  absolute  xl:left-8 hidden  xl:block xl:bottom-20	"  src="images/Shape2-contact.svg" />

            </section>



        </>
    );
}

export default Home;