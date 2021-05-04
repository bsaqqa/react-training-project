import React from "react";
import Button from "../Components/Button";
import FormReq from "../Components/FormReq";

const CaseStudy = () => {
  return (
    <>
      <section id="main-section" className=" ">
        <div
          className="grid grid-cols-3  sm:m-auto 
        md:h-full max-w-5xl mx-auto px-5 md:px-4  pt-28 lg:pt-32  pb-16  lg:px-6"
        >
          <div className="  col-span-2 mr-4 justify-center self-center">
            <div className="flex items-center text-lg mb-4">
              <img className="h-2 w-16 mr-4" src="images/line.svg" />
              <span className="text-primary font-light text-lg  ">
                Featured Work
              </span>
            </div>
            <h2 className="lg:text-6xl text-4xl text-h2-color font-light pr-3 mb-12">
              Project Case study Sample
            </h2>
            <h6 className="text-sm pr-10 text-h6color font-light mb-10">
              Diam ut venenatis tellus in metus vulputate eu scelerisque. Neque
              volutpat ac tincidunt vitae semper quis lectus nulla. Egestas diam
              in arcu cursus. Velit ut tortor pretium viverra suspendisse
              potenti nullam ac tortor.
            </h6>
          </div>
          <div className=" mx-auto mt-10 ">
            <div className="flex flex-col texr-lg mb-2 mt-4  ">
              <div className="">
                <h6 className="mb-8 text-sm font-normal">OUR ROLE WAS</h6>
                <ul className="text-h6color text-sm font-light">
                  <li className="py-2">Discovery Strategy</li>
                  <li className="py-2">Analysis</li>
                  <li className="py-2">User interface design</li>
                  <li className="py-2">Web Development</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="case-study-img-section">
        <div className=" case-study-img mx-auto  max-w-screen-xl md:px-4 lg:px-7 pb-16 pt-2 ">
          <img
            className="w-full"
            src={require("../assets/images/case_study-img-1.jpg").default}
          />
        </div>
      </section>

      <section id="overview-section">
        <div className="md:flex  sm:m-auto md:h-full max-w-5xl mx-auto px-5 md:px-4  lg:pt-8  pb-16  lg:px-6">
          Hamza
        </div>
      </section>
    </>
  );
};

export default CaseStudy;
