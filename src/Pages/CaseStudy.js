import React from "react";
import "./../assets/css/caseStudy.css";
const CaseStudy = () => {
  return (
    <>
      {/* team 5 */}
      <section className="relative h-screen  ">
        <div className="flex md:h-screen max-w-6xl mx-auto px-15 md:px-4 md:py-2 lg:px-6">
          <div className="md:flex-1 ">
            <img
              className="relative w-full px-5 md:px-0 md:w-full object-cover mt-20 h-5/6  "
              src="https://res.cloudinary.com/dznido8dg/image/upload/v1619995353/img1_qn6qzg.svg"
            />
          </div>
        </div>
        <h1 className="text-3xl max-w-6xl mx-auto pl-10 pr-10 my-auto	mb-10 ">
          Urna nec tincidunt praesent semper feugiat nibh sed. Pretium viverra
          suspendisse potenti nullam ac tortor vitae purus faucibus.
        </h1>
        <div className=" mx-auto" id="research-section">
          <div className="flex  flex-col justify-between items-start md:h-screen max-w-6xl mx-auto">
            <div>
              <h1 className="text-7xl	font-bold text-search mb-10 pl-10 pr-10  md:mt-52 sm:mt-10">
                Research
              </h1>{" "}
            </div>
            <div className="flex md:flex-1 flex justify-between items-start mb-20 mt-20 pl-10 pr-10 md:w-5/6 sm:w-full">
              <div className="items-start">
                <h1 className="font-bold text-search text-2xl mb-8">Problem</h1>
                <h1 className="text-search text-lg mt-3	">
                  Egestas diam in arcu cursus.
                </h1>
                <h1 className="text-search text-lg mt-3	">
                  Velit ut tortor pretium viverra suspendisse.
                </h1>
                <h1 className="text-search text-lg mt-3	">
                  Urna nec tincidunt praesent semper
                </h1>
              </div>
              <div className="pr-20">
                <h1 className="font-bold text-search text-2xl mb-8">
                  Solutions
                </h1>
                <h1 className="text-search text-lg mt-3	">
                  Suspendisse potenti nullam ac tortor
                </h1>
                <h1 className="text-search text-lg mt-3	">
                  Tortor condimentum lacinia quis vel eros
                </h1>
                <h1 className="text-search text-lg mt-3	">
                  Sit amet cursus sit amet. Tincidunt ornare
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudy;
