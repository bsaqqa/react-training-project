import React from "react";
import { useState } from "react";

export default function ContactSection() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [serviceCat, setServiceCat] = useState("Service category");
  const [date, setDate] = useState("");
  const [typeInput, setTypeInput] = useState("text");
  const Options = ["Mangement", "Maintaince", "Productions"];
  const handleSubmit = (event) => {
    event.preventDefault();
    setName("");
    setServiceCat("Service category");
    setEmail("");
    setDate("");
    setTypeInput("text"); //  event.target[3].type = "text";
  };
  return (
    <section
      id="contact-section"
      className="relative md:py-7  md:h-auto max-h-full md:max-h-screen bg-primary-900 mt-36 mb-36"
    >
      <img
        className=" lg:h-32 md:h-28 md:absolute left-10 hidden  md:block md:-top-16"
        src="/images/shape1-contact.svg"
      />

      <div className="md:flex  sm:m-auto md:h-full max-w-6xl mx-auto px-5 md:px-4 py-20 mt-10 md:mt-0 md:py-3 lg:px-6 lg:mt-4 ">
        <div className="  md:flex-1 justify-center md:mt-6">
          <div className="flex items-center text-lg mb-2">
            <span className="text-white mr-4">REQUEST FREE QUOTE</span>
            <img className="h-4" src="images/Zigzag.svg" />
          </div>
          <h2 className="text-2xl text-white  lg:w-9/12		font-bold mb-10">
            Got tons of new ideas or you just curiosity mind, and love to
            explore?
          </h2>
          <h6 className="text-lg text-white  lg:w-8/12		font-medium  mb-10">
            Hit the button we are ready for collabs and new projects!
          </h6>
        </div>
        <img
          className=" lg:h-8 h-4 md:absolute   right-16   md:block top-16"
          src="/images/shape3-contact.svg"
        />

        <div className=" md:flex-1 mt-10 ">
          <div className="flex flex-col text-md mb-2 ml-4 mr-4 md:ml-40 md:mr-10 ">
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  className="text-sm w-full pb-3 mb-2 text-white border-b border-white
                          bg-transparent placeholder-white placeholder-opacity-90 outline-none "
                  type="text"
                  name="username"
                  placeholder="Your name"
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <input
                  className=" w-full pb-3 mb-2 text-white border-b border-white text-sm
                        bg-transparent placeholder-white placeholder-opacity-90  outline-none "
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="relative inline-block w-full text-white text-opacity-90 ">
                <select
                  value={serviceCat}
                  onChange={(e) => setServiceCat(e.target.value)}
                  className="w-full pb-3 mb-2  border-b border-white bg-transparent text-xs
                         outline-none text-opacity-90 font-semibold font-opensans form-select
                         block form-multiselect "
                >
                  <option value="Service category" disabled>
                    Service category
                  </option>
                  {Options.map((e, index) => {
                    return (
                      <option key={index} value={e}>
                        {e}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="relative flex w-full flex-wrap items-stretch mb-3">
                <input
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className=" w-full pb-3 mb-8 text-white border-b  border-white bg-transparent
                        placeholder-white placeholder-opacity-90  outline-none "
                  type={typeInput}
                  onFocus={(e) => setTypeInput("date")}
                  name="date"
                  placeholder="Schedule a meeting"
                />
                <span className="z-10 h-full absolute w-6 right-0 px-1 py-1">
                  <i>
                    <img
                      src="./images/dateicon.svg"
                      onClick={(e) => setTypeInput("date")}
                    />
                  </i>
                </span>
              </div>
              <div>
                <input
                  className="w-full mt-6 bg-transparent text-white font-semibold font-opensans
                         py-3.5 px-4 mb-6  border-2 uppercase text-xs border-custom rounded-3xl
                         hover:bg-custom focus:outline-none "
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <img
        className="h-16  absolute  xl:left-8 hidden  xl:block xl:bottom-20	"
        src="images/Shape2-contact.svg"
      />
    </section>
  );
}
