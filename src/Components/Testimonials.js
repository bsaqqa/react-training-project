import React, {useEffect, useState} from "react";

const SingleTestimonial = ({testimonial}) => {
    return (
        <>
            <div className="shadow-lg p-4">
                <div className="flex items-center">
                    <img className="w-10 h-10 rounded-full mr-4" src={testimonial.image}
                         alt="Avatar of Writer"/>
                    <div className="text-sm">
                        <p className="text-gray-900 leading-none">{testimonial.name}</p>
                        <p className="text-gray-600">{ testimonial.jobTitle }</p>
                    </div>
                </div>
                <p className="font-thin text-left p-4">{ testimonial.testimonial }</p>
            </div>
        </>
    );
}

const Testimonials = () => {
    const [testimonials , setTestimonials] = useState([]);

    useEffect( () => {
        setTestimonials([
            {
                name: "hello 1",
                jobTitle: "doctor",
                testimonial: "this is description for testimonials",
                image: "https://fakeimg.pl/250x100/"
            }, {
                name: "hello 2",
                jobTitle: "doctor",
                testimonial: "this is description for testimonials",
                image: "https://fakeimg.pl/250x100/",
            }, {
                name: "hello 3",
                jobTitle: "doctor",
                testimonial: "this is description for testimonials",
                image: "https://fakeimg.pl/250x100/",
            },
        ]);
    }, [])
    return (
        <>
            <section className=" h-screen text-center mt-12">
            <div className="md:h-screen max-w-6xl mx-auto px-5 md:px-4 py-20 mt-10 md:mt-0 md:py-2 lg:px-6">

            <div className="font-bold text-3xl font-sans">
                    Here's what some of our partners are saying
                </div>

                <div className="grid grid-cols-3 gap-4 p-12">
                    { testimonials && testimonials.map( (testimonial , index) => <SingleTestimonial key={index} testimonial={testimonial}/>) }
                </div>
            </div>
            </section>
        </>
    );
}

export default Testimonials;