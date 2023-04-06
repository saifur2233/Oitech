import React from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaDesktop,
  FaLaptopMedical,
  FaPager,
  FaSearchengin,
} from "react-icons/fa";

const Services = () => {
  return (
    <div className="hero py-12">
      <div className="hero-content text-center">
        <div className="">
          <h1 className="text-5xl font-bold">Services We Offer</h1>
          <p className="py-6">
            With Oitech you can create beautiful and elegant websites that suits
            your business. Create charming and graceful websites that match your
            business with Oitech's assistance.
          </p>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-16">
            <div className="card shadow-2xl card-bordered border-primary hover:bg-primary hover:text-white">
              <div className="card-body">
                <FaLaptopCode size={"2em"}></FaLaptopCode>
                <h2 className="card-title text-2xl font-bold">
                  Web Development
                </h2>
                <p className="text-justify">
                  Create charming and graceful websites that match your business
                  with Oitech's assistance.
                </p>
                <div className="card-actions justify-start">
                  <button className="btn btn-link hover:text-white">
                    Read more
                  </button>
                </div>
              </div>
            </div>
            <div className="card shadow-2xl card-bordered border-primary hover:bg-primary hover:text-white">
              <div className="card-body">
                <FaMobileAlt size={"2em"}></FaMobileAlt>
                <h2 className="card-title text-2xl font-bold">
                  Apps Development
                </h2>
                <p className="text-justify">
                  With Oitech, you can build exquisite and responsive app that
                  reflect your business's style and messaging.
                </p>
                <div className="card-actions justify-start">
                  <button className="btn btn-link hover:text-white">
                    Read more
                  </button>
                </div>
              </div>
            </div>
            <div className="card shadow-2xl card-bordered border-primary hover:bg-primary hover:text-white">
              <div className="card-body">
                <FaDesktop size={"2em"}></FaDesktop>
                <h2 className="card-title text-2xl font-bold">IT Consulting</h2>
                <p className="text-justify">
                  Oitech offers IT consulting services to help businesses make
                  informed decisions about their technology infrastructure and
                  strategy.
                </p>
                <div className="card-actions justify-start">
                  <button className="btn btn-link hover:text-white">
                    Read more
                  </button>
                </div>
              </div>
            </div>

            <div className="card shadow-2xl card-bordered border-primary hover:bg-primary hover:text-white">
              <div className="card-body">
                <FaLaptopMedical size={"2em"}></FaLaptopMedical>
                <h2 className="card-title text-2xl font-bold">
                  Software Maintenance
                </h2>
                <p className="text-justify">
                  Oitech offers software maintenance services to ensure that
                  your software is up-to-date and functioning properly.
                </p>
                <div className="card-actions justify-start">
                  <button className="btn btn-link hover:text-white">
                    Read more
                  </button>
                </div>
              </div>
            </div>
            <div className="card shadow-2xl card-bordered border-primary hover:bg-primary hover:text-white">
              <div className="card-body">
                <FaPager size={"2em"}></FaPager>
                <h2 className="card-title text-2xl font-bold">
                  Digital Marketing
                </h2>
                <p className="text-justify">
                  Oitech offers digital marketing services to help businesses
                  promote their brand and reach their target audience through
                  various online channels.
                </p>
                <div className="card-actions justify-start">
                  <button className="btn btn-link hover:text-white">
                    Read more
                  </button>
                </div>
              </div>
            </div>
            <div className="card shadow-2xl card-bordered border-primary hover:bg-primary hover:text-white">
              <div className="card-body">
                <FaSearchengin size={"2em"}></FaSearchengin>
                <h2 className="card-title text-2xl font-bold">Data Analysis</h2>
                <p className="text-justify">
                  Oitech offers data analysis services to help businesses make
                  sense of their data, uncover insights, and make data-driven
                  decisions.
                </p>
                <div className="card-actions justify-start">
                  <button className="btn btn-link hover:text-white">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
