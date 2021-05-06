import React from "react";


function Footer() {
  return (
    <>
      
      <section className="py-20">
        <div className="flex  flex-col md:flex-row md:items-baseline justify-between md:h-screen max-w-6xl mx-auto px-5 md:px-4 py-20 mt-10 md:mt-0 md:py-2 lg:px-6">
          <div>
            <img className="w-32 " src="./images/logo.svg" alt="logo" />
            <p className="text-primary text-xl	">Fad Tech Corporation</p>
            <p className="text-base text-gray-600 pt-1">
              © 2020 All Rights Resaved To FTC
            </p>
            <ul className="flex pt-5">
              <li className="mr-7">
                <a>
                  <i className="fab fa-twitter text-2xl"></i>
                </a>
              </li>
              <li className="mr-7">
                <a>
                  <i className="fab fa-facebook-f text-2xl"></i>
                </a>
              </li>
              <li className="mr-7">
                <a>
                  <i className="fab fa-instagram text-2xl"></i>
                </a>
              </li>
              <li>
                <a>
                  <i className="fab  fa-linkedin-in text-2xl"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex pt-4">
            <ul className="leading-8">
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Services</a>
              </li>
              <li>
                <a>Services</a>
              </li>
            </ul>
            <ul className="ml-32 leading-8">
              <li>
                <a>FAQ</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Sitemap</a>
              </li>
            </ul>
            <ul className="ml-32 leading-8">
              <li>
                <a>Terms of use</a>
              </li>
              <li>
                <a>Privacy Policy</a>
              </li>
              <li>
                <a>Careers</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
export default Footer;
