import React from "react";

function Footr() {
  return (
    <section className=" max-w-6xl mx-auto md:px-4 lg:px-6 w-full  md:mt-40 space-y-5 md:object-scale-down ">
      <div className="flex w-full pr-6 space-y-5 ">
        <section id="Rightfooter" className="flex-1  mx-auto w-full mt-1000  ">
          <img
            className="w-48"
            src={require("../assets/images/Corporation.svg").default}
            alt="Corporation"
          />
          <div className=" mx-auto  flex space-x-3 ">
            <a href="">
              <img
                className="flex-1 mt-8 pb-8 w-6"
                src={require("../assets/images/twitter.svg").default}
              />
            </a>
            <a href="">
              <img
                className="flex-1 mt-8 pb-8 w-6"
                src={require("../assets/images/facebook.svg").default}
              />
            </a>
            <a href="">
              <img
                className="flex-1 mt-8 pb-8 w-6"
                src={require("../assets/images/instagram.svg").default}
              />
            </a>
            <a href="">
              <img
                className="flex-1 mt-8 pb-8 w-6"
                src={require("../assets/images/linkedin.svg").default}
              />
            </a>
          </div>
        </section>
        <section
          id="Leftfooter"
          className="flex-1 w-2/4 mx-auto space-x-10 flex "
        >
          <ul className=" flex flex-col space-y-5 flex-1  ">
            <li className=" font-bold md:text-sm ">
              <a className="" href="">
                About
              </a>
            </li>
            <li className="mt-5 font-bold md:text-sm">
              <a href="">Services</a>
            </li>
            <li className="mt-5 font-bold ">
              <a href="">Services</a>
            </li>
          </ul>
          <ul className="flex flex-col space-y-5 flex-1">
            <li className=" font-bold">
              <a href="">FAQ</a>
            </li>
            <li className="mt-5 font-bold">
              <a href="">Blog</a>
            </li>
            <li className="mt-5 font-bold">
              <a href="">Sitemap</a>
            </li>
          </ul>
          <ul className=" flex flex-col space-y-5 flex-1 ">
            <li className=" font-bold">
              <a href="">Terms of use</a>
            </li>
            <li className="mt-5 font-bold">
              <a href="">privacy Policy</a>
            </li>
            <li className="mt-5 font-bold">
              <a href="">Careers</a>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
}

export default Footr;
