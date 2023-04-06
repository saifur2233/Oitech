import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Team = () => {
  return (
    <div className="hero py-12">
      <div className="hero-content text-center">
        <div className="">
          <h1 className="text-5xl font-bold">Meet the Team</h1>
          <p className="py-6">
            Our team of talented professionals who helped in growing business.
          </p>
          <div className="p-12 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="card shadow-5xl">
              <figure>
                <img
                  src="https://i.ibb.co/qg4mB48/member01.png"
                  alt="team-member1"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-primary text-center">
                  MD SAIFUR RAHMAN
                </h2>
                <p className="">Software Engineer</p>
                <div className="flex gap-2">
                  <FaEnvelope size={"2em"}></FaEnvelope>
                  <FaFacebookSquare size={"2em"}></FaFacebookSquare>
                  <FaLinkedin size={"2em"}></FaLinkedin>
                  <FaGithubSquare size={"2em"}></FaGithubSquare>
                </div>
              </div>
            </div>
            <div className="card shadow-5xl">
              <figure>
                <img
                  src="https://i.ibb.co/VjBWpXq/member02.png"
                  alt="team-member2"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-primary text-center">
                  Rahat Uddin
                </h2>
                <p className="">Software Engineer</p>
                <div className="flex gap-2">
                  <FaEnvelope size={"2em"}></FaEnvelope>
                  <FaFacebookSquare size={"2em"}></FaFacebookSquare>
                  <FaLinkedin size={"2em"}></FaLinkedin>
                  <FaGithubSquare size={"2em"}></FaGithubSquare>
                </div>
              </div>
            </div>
            <div className="card shadow-5xl">
              <figure>
                <img
                  src="https://i.ibb.co/BnzcY3z/member03.png"
                  alt="team-member3"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-primary text-center">
                  Fazle Rabbi
                </h2>
                <p className="">Software Engineer</p>
                <div className="flex gap-2">
                  <FaEnvelope size={"2em"}></FaEnvelope>
                  <FaFacebookSquare size={"2em"}></FaFacebookSquare>
                  <FaLinkedin size={"2em"}></FaLinkedin>
                  <FaGithubSquare size={"2em"}></FaGithubSquare>
                </div>
              </div>
            </div>
            <div className="card shadow-5xl">
              <figure>
                <img
                  src="https://i.ibb.co/Fsqdjs0/member04.png"
                  alt="team-member4"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-primary text-center">
                  Rokon Uzzaman
                </h2>
                <p className="">Software Engineer</p>
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

export default Team;
