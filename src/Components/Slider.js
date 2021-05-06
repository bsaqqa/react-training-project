import React from "react";
import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Navigation } from "swiper/core";
SwiperCore.use([Navigation]);
const Slider = () => {
  return (
    <>
      <section id="slider" className="relative h-screen ">
        <img className="h-5 ml-20 mt-2" src="images/Xicon.svg" />
        <div className="flex flex-col md:h-screen max-w-6xl mx-auto px-5 md:px-4 py-20 mt-10 md:mt-3 md:py-2 lg:px-6">
          <div className="flex items-center text-lg mb-2">
            <span className="text-gray-300 mr-4 uppercase ">Case Studies</span>
            <img className="h-4" src="images/Zigzag.svg" />
          </div>
          <div className="text-primary font-bold text-3xl mb-12">
            <h1>
              Read what we have achieved
              <br />
              for our clients
            </h1>
          </div>
​
          <Swiper navigation={true} className="mySwiper w-full h-full">
            <SwiperSlide className="flex text-center bg-white text-lg justify-start items-center">
​
              <div className="rounded-xl shadow-lg cursor-pointer block relative flex-grow-0 flex-shrink-0 mr-6 h-auto object-cover overflow-hidden">
                <img className="md:inline-flex sm:flex-col w-full" src="images/Mask1.png"/>
                <span className="onHover flex absolute left-0 bottom-0 w-full z-0 duration-300 ease-linear">
                  <b className="bg-white text-xl px-1 py-3 flex-grow-0 flex-shrink-0">Web site development</b>
                  <Link className="flex-grow-0 flex-shrink-0 text-center py-3.5 px-1 inline-block align-middle text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#FFF" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </span>
              </div>
​
              <div className="rounded-xl shadow-lg cursor-pointer block relative flex-grow-0 flex-shrink-0 mr-6 h-auto object-cover overflow-hidden">
                <img className="md:inline-flex sm:flex-col w-full" src="images/Mask2.png" />
                <span className="onHover flex absolute left-0 bottom-0 w-full z-0 duration-300 ease-linear">
                  <b className="bg-white text-xl px-1 py-3 flex-grow-0 flex-shrink-0">Web site development</b>
                  <Link className="flex-grow-0 flex-shrink-0 text-center py-3.5 px-1 inline-block align-middle text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#FFF" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </span>
              </div>
​
              <div className="rounded-xl shadow-lg cursor-pointer block relative flex-grow-0 flex-shrink-0 mr-6 h-auto object-cover overflow-hidden">
                <img className="md:inline-flex sm:flex-col w-full" src="images/Mask3.png" />
                <span className="onHover flex absolute left-0 bottom-0 w-full z-0 duration-300 ease-linear">
                  <b className="bg-white text-xl px-1 py-3 flex-grow-0 flex-shrink-0">Web site development</b>
                  <Link  className="flex-grow-0 flex-shrink-0 text-center py-3.5 px-1 inline-block align-middle text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#FFF" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </span>
              </div>
          
            </SwiperSlide>
​
            <SwiperSlide className="flex text-center bg-white text-lg justify-start items-center">
              <div className="rounded-xl shadow-lg cursor-pointer block relative flex-grow-0 flex-shrink-0 mr-6 h-auto object-cover overflow-hidden">
                <img className="md:inline-flex sm:flex-col w-full"src="images/Mask1.png"/>
                <span className="onHover flex absolute left-0 bottom-0 w-full z-0 duration-300 ease-linear">
                  <b className="bg-white text-xl px-1 py-3 flex-grow-0 flex-shrink-0">Web site development</b>
                  <Link  className="flex-grow-0 flex-shrink-0 text-center py-3.5 px-1 inline-block align-middle text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#FFF" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </span>
              </div>
​
              <div className="rounded-xl shadow-lg cursor-pointer block relative flex-grow-0 flex-shrink-0 mr-6 h-auto object-cover overflow-hidden">
                <img className="md:inline-flex sm:flex-col w-full" src="images/Mask2.png"/>
                <span className="onHover flex absolute left-0 bottom-0 w-full z-0 duration-300 ease-linear">
                  <b className="bg-white text-xl px-1 py-3 flex-grow-0 flex-shrink-0">Web site development</b>
                  <Link  className="flex-grow-0 flex-shrink-0 text-center py-3.5 px-1 inline-block align-middle text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#FFF" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </span>
              </div>
​
              <div className="rounded-xl shadow-lg cursor-pointer block relative flex-grow-0 flex-shrink-0 mr-6 h-auto object-cover overflow-hidden mr-0">
                <img className="md:inline-flex sm:flex-col w-full" src="images/Mask3.png" />
                <span className="onHover flex absolute left-0 bottom-0 w-full z-0 duration-300 ease-linear">
                  <b className="bg-white text-xl px-1 py-3 flex-grow-0 flex-shrink-0">Web site development</b>
                  <Link className="flex-grow-0 flex-shrink-0 text-center py-3.5 px-1 inline-block align-middle text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#FFF" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </span>
              </div>
            </SwiperSlide>
          </Swiper>
​
          {/*  Without Swiper library 
          <div >
              <span className="text-primary font-bold mr-3"> PREV </span>
              <button className="bg-primary border-none p-0.5 w-9 cursor-pointer " onClick="" ></button>
              <button className="bg-gray-300 border-none p-0.5 w-9 cursor-pointer " onClick=""></button>
              <span className="font-bold ml-3 text-gray-300 "> NEXT </span>
          </div> */}
​
          <img
            className=" absolute h-4 left-20 bottom-40 "
            src="images/circle2.svg"
          />
          <img
            className=" absolute h-12 right-20 bottom-5"
            src="images/line.svg"
          />
        </div>
      </section>
    </>
  );
};
export default Slider;