import React from "react";
import Services from "../Components/servises";
import FormReq from '../Components/FormReq'

import styled from 'styled-components';
import Button from '../Components/Button';
import Slider from '../Components/Slider';

import Footer from '../Components/Footer'

import Testimonials from "../Components/Testimonials";
import AboutSection from "../Components/AboutSection";
// import ContactSection from "../Components/ContactSection";
import HeroSection from "../Components/HeroSection";

// const Button = styled.button`
//   @apply text-white font-medium border-2 border-primary-900 bg-primary-900 px-6 lg:px-8 py-2
// `;
//

const Home = () => {

    return (
        <>
            <HeroSection/>

            <AboutSection id="about"/>

            <Slider/>

            <Services />

            {/*<ContactSection/>*/}

            <Testimonials />


        </>
    );
}

export default Home;
