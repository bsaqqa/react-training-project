import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Button from '../Components/Button'

export default function Footer() {
    const [selectedDate, setSelectedDate] = useState(null)
    return (
        <>

            <section className="bg-primary-900">
                <div className="flex flex-col max-w-6xl py-20 mx-auto px-5 md:px-4 lg:px-6 relative">
                    <div className="flex items-center text-lg mb-2">
                        <span className="text-gray-300 text-xs mr-4">REQUEST FREE QUOTE</span>
                        <img className="h-3" src="images/Zigzag.svg" />
                    </div>
                    <div className="flex flex-col md:flex-row  justify-between">
                        <div className="w-full">
                            Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper
                            dignissim. Pharetra massa massa ultricies mi quis hendrerit. Tortor
                            at risus viverra adipiscing at in tellus. A iaculis at erat
                            pellentesque adipiscing commodo elit at. Viverra mauris in aliquam
                            sem. Nisl condimentum id venenatis a condimentum vitae sapien
                            pellentesque habitant.
                        </div>
                        <div className="w-full mt-12 md:mt-0">
                            <form class="bg-primary-900  pb-8 mb-4">
                                <input className="bg-primary-900 text-white placeholder-white  text-sm appearance-none
                                 border-b-2 border-opacity-70  w-full py-2  leading-tight focus:outline-none focus:shadow-outline"
                                    id="yourName"
                                    type="text"
                                    placeholder="Your Name" />

                                <input className="bg-primary-900 text-white  placeholder-white text-sm mt-3 appearance-none 
                                border-b-2 border-opacity-70  w-full py-2  leading-tight 
                                focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Email" />

                                <div className="relative">
                                    <select className="bg-primary-900 border-b-2 text-sm text-white   appearance-none w-full mt-3   py-3  outline-none  leading-tight focus:outline-none focus:bg-primary-900" id="grid-state">
                                        <option>Service category</option>
                                        <option>option 2</option>
                                        <option>option 3</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>

                                <input className="bg-primary-900 text-white placeholder-white text-sm mt-3 appearance-none
                                border-b-2 border-opacity-70  w-full py-2 
                                 leading-tight focus:outline-none focus:shadow-outline"
                                    id="date"
                                    type="date"
                                    placeholder="Schedule a meeting" />


                                <button className="bg-primary-900 text-white text-sm mt-20 
                                appearance-none border-2  rounded-full   w-full py-3
                                leading-tight  focus:shadow-outline uppercase font-bold
                                focus:outline-none hover:bg-primary hover:text-white-900 hover:border-primary transition"
                                    id="submit"
                                    type="submit">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                    {/* <img className="h-10 absolute right-6 bottom-10" src="images/Overlay/Shape.svg" /> */}
                </div>
            </section>


        </>
    )
}
