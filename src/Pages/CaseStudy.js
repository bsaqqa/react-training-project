import React from "react";
import Button from "../Components/Button";
import TextComponent from "../Components/textComponent";
import Screen from "../Components/screenComponent";
import "./../assets/css/caseStudy.css";

const CaseStudy = () => {
  return (
    <>
      <section id="main-section" className=" ">
        <div
          className="grid grid-cols-3 max-w-5xl mx-auto px-4  pt-28  pb-6
           sm:m-auto sm:px-8
        md:h-full md:px-16 md:pt-30
         lg:px-8 lg:pt-32"
        >
          <div className="col-span-2 mr-4 justify-center self-center">
            <div className="flex items-center text-lg mb-4">
              <img className="h-2 w-16 mr-4" src="images/line2.svg" />
              <span className="text-primary font-light text-lg  ">
                Featured Work
              </span>
            </div>
            <h2 className="lg:text-6xl md:text-4xl text-2xl text-h2-color font-light lg:pr-4 pr-16 mb-12">
              Project Case study Sample
            </h2>
            <h6 className="sm:text-sm text-xs pr-10 text-h6color font-normal mb-10">
              Diam ut venenatis tellus in metus vulputate eu scelerisque. Neque
              volutpat ac tincidunt vitae semper quis lectus nulla. Egestas diam
              in arcu cursus. Velit ut tortor pretium viverra suspendisse
              potenti nullam ac tortor.
            </h6>
          </div>
          <div className="mt-10 flex justify-end mr-4 ">
            <div className=" texr-lg mb-2 mt-2 sm:mt-4 ">
              <h6 className="mb-8 text-sm font-normal">OUR ROLE WAS</h6>
              <ul className="text-h6color sm:text-sm text-xs font-normal">
                <li className="py-2">Discovery Strategy</li>
                <li className="py-2">Analysis</li>
                <li className="py-2">User interface design</li>
                <li className="py-2">Web Development</li>
              </ul>
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
        <div
          className="md:flex  sm:m-auto md:h-full max-w-5xl mx-auto px-4 md:px-16
           lg:px-8 sm:px-8 
           lg:px-6 grid grid-cols-12 md:gap-32 gap-24 horizontal
         py-6
         "
        >
          <div className="md:col-end-4 col-start-1 font-semibold text-xl sm:text-2xl">
            Overview
          </div>
          <div
            className=" md:col-start-5 md:mr-8 lg:mr-16 sm:mr-0 mr-4 col-start-3
             md:col-end-12 sm:col-end-8 col-end-7  col-span-2 vertical space-y-5
             font-normal text-sm  "
          >
            <p>
              Meet Collab, a fully-featured landing page kit including code,
              design files, and beautiful 3D illustrations editable in Figma.
            </p>
            <p>
              This package includes a responsive and fully animated landing page
              template with 24 sections. We've intentionally added a lot of
              different content to maximize the number of layout options. Drag,
              drop and mix different parts to quickly build your landing page in
              a matter of minutes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

// return (
//     <>
//         <div className='container mx-auto mt-24 lg:px-20'>
//             <TextComponent />
//             <Screen />
//         </div>
//
//     </>
// );
// }

export default CaseStudy;
