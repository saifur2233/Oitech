import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const TeamSection = () => {
  return (
    <div className="hero">
      <div className="hero-content text-center">
        <div className="">
          <h1 className="text-5xl font-bold">Meet the Team</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi.
          </p>
          <div className="p-12 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="card shadow-2xl">
              <figure>
                <img
                  src="https://sofbox-react.iqonic.design/assets/images/team/01.jpg"
                  alt="team-member1"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-primary text-center">
                  JD Adams
                </h2>
                <p className="">Web Designer</p>
                <div className="flex gap-2">
                  <FaEnvelope size={"2em"}></FaEnvelope>
                  <FaFacebookSquare size={"2em"}></FaFacebookSquare>
                  <FaLinkedin size={"2em"}></FaLinkedin>
                  <FaGithubSquare size={"2em"}></FaGithubSquare>
                </div>
              </div>
            </div>
            <div className="card shadow-2xl">
              <figure>
                <img
                  src="https://sofbox-react.iqonic.design/assets/images/team/01.jpg"
                  alt="team-member1"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-primary text-center">
                  JD Adams
                </h2>
                <p className="">Web Designer</p>
                <div className="flex gap-2">
                  <FaEnvelope size={"2em"}></FaEnvelope>
                  <FaFacebookSquare size={"2em"}></FaFacebookSquare>
                  <FaLinkedin size={"2em"}></FaLinkedin>
                  <FaGithubSquare size={"2em"}></FaGithubSquare>
                </div>
              </div>
            </div>
            <div className="card shadow-2xl">
              <figure>
                <img
                  src="https://sofbox-react.iqonic.design/assets/images/team/01.jpg"
                  alt="team-member1"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-primary text-center">
                  JD Adams
                </h2>
                <p className="">Web Designer</p>
                <div className="flex gap-2">
                  <FaEnvelope size={"2em"}></FaEnvelope>
                  <FaFacebookSquare size={"2em"}></FaFacebookSquare>
                  <FaLinkedin size={"2em"}></FaLinkedin>
                  <FaGithubSquare size={"2em"}></FaGithubSquare>
                </div>
              </div>
            </div>
            <div className="card shadow-2xl">
              <figure>
                <img
                  src="https://sofbox-react.iqonic.design/assets/images/team/01.jpg"
                  alt="team-member1"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-primary text-center">
                  JD Adams
                </h2>
                <p className="">Web Designer</p>
                <div className="flex gap-2">
                  <FaEnvelope size={"2em"}></FaEnvelope>
                  <FaFacebookSquare size={"2em"}></FaFacebookSquare>
                  <FaLinkedin size={"2em"}></FaLinkedin>
                  <FaGithubSquare size={"2em"}></FaGithubSquare>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
