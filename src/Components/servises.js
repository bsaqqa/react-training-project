
const services = [
    {
        img: '/images/Mask-Group.svg',
        title: 'Analysis',
        paragraph: 'We analyze the entire system by determining and specifying ' +
            'the system business requirements then build the expectations and the needs depending on it. ',
        rtl: false
    },
    {
        img: '/images/Mask-Group.svg',
        title: 'Web Development',
        paragraph: 'We build complete websites from scratch, we provide the full extent of building Backend Systems and Frontend Systems.' +
            ' We guarantee a robust, maintainable, bug-free, quality code.',
        rtl: true
    },
    {
        img: '/images/Mask-Group.svg',
        title: 'Mobile development',
        paragraph: 'We analyze the entire system by determining and specifying ' +
            'the system business requirements then build the expectations and the needs depending on it. ',
        rtl: false
    },
    {
        img: '/images/Mask-Group.svg',
        title: 'UX/UI Design',
        paragraph: 'We analyze the entire system by determining and specifying ' +
            'the system business requirements then build the expectations and the needs depending on it. ',
        rtl: true
    }
]


const Services=()=> {
        return (
            <div>
                <div className="mx-auto mt-16 md:px-20 px-10">
                    <div className='lg:w-1/2 md:w-3/4'>
                        <p className="flex content-start text-xl">
                            <span className="text-gray-300 pr-2 font-sans font-light uppercase">services</span>
                            <img src="/images/Zigzag.svg"/>
                        </p>
                        <h2 className="md:text-3xl sm:text-xl font-bold font-sans">Fueled by a deep understanding of the
                            business context.</h2>
                    </div>
                </div>
                <div>
                    {
                        services.map((item, index) => {
                            if (item.rtl) {
                                return (
                                    <div className=" mx-auto bg-white my-32">
                                        <div className="sm:flex">
                                            <div className="flex-1 sm:flex justify-end order-last ">
                                                <img className=" w-11/12 sm:mx-0 mx-auto object-cover" src={item.img}
                                                     alt="services"/>
                                            </div>
                                            <div className="flex-1 sm:flex justify-end pr-8 pl-2 self-center">
                                                <div className='flex'>
                                                    <img src='/images/Shape-8.svg' />
                                                    <img src='/images/Shape-7.svg' className='self-start pt-8 -ml-14'  />
                                                </div>

                                                <div className='md:w-1/2 sm:w-5/6 md:mr-10 sm:mx-auto'>
                                                    <h2 className="uppercase tracking-wide py-4 text-2xl font-semibold font-sans">{item.title}</h2>
                                                    <p className="mt-2 text-gray-500">{item.paragraph}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div className=" mx-auto bg-white my-16">
                                        <div className="sm:flex">
                                            <div className="flex-1 ">
                                                <img className=" w-11/12 sm:mx-0 mx-auto object-cover" src={item.img}

                                                     alt="services"/>
                                            </div>
                                            <div className="flex-1 p-8 self-center">
                                                <div className='md:w-1/2 sm:w-5/6 md:ml-10 sm:mx-auto'>
                                                    <h2 className="uppercase tracking-wide py-4 text-2xl font-semibold font-sans">{item.title}</h2>
                                                    <p className="mt-2 text-gray-500">{item.paragraph}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                        })
                    }
                </div>

            </div>
        )
}

export default Services;