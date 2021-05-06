import React from "react";
import TextComponent from '../Components/textComponent'
import Screen from '../Components/screenComponent'
import "./../assets/css/caseStudy.css";

const CaseStudy = ()=>{

    return (
        <>
            <div className='container mx-auto mt-24 lg:px-20'>
                <TextComponent />
                <Screen />
            </div>

        </>
    );
}

export default CaseStudy;
