import React from "react";
import Button from "../Components/Button";
import FormReq from "../Components/FormReq";


const CaseStudy = ()=>{

    return (
        <>
            <section id="main-section" className=" ">
                <div className="md:flex  sm:m-auto md:h-full max-w-5xl mx-auto px-5 md:px-4  pt-28 lg:pt-32  pb-16  lg:px-6">
                        Nisreen
                </div>
            </section>

            <section id="case-study-img-section">
                <div className=" case-study-img mx-auto  max-w-screen-xl md:px-4 lg:px-7 pb-16 pt-2 ">
                    <img className="w-full" src={require('../assets/images/case_study-img-1.jpg').default}/>
                </div>
            </section>

            <section id="overview-section" >
                <div className="md:flex  sm:m-auto md:h-full max-w-5xl mx-auto px-5 md:px-4  lg:pt-8  pb-16  lg:px-6">
                    Hamza
                </div>
            </section>

        </>
    );
}

export default CaseStudy;