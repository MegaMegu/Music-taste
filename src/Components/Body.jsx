import React from "react";
import "./Styles/body.css";
import LoginBtn from "./LoginBtn";
import SampleSection from "./SampleSection";
import { useNavigate } from "react-router";

const Body = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/privacy-policy");
  };

  return (
    <>
      <main className="body">
        <div className="bodyInside">
          <h4>Create a Karinderya Menu based on your Music Taste</h4>
          <p>Open a Karinderya via:</p>
          <LoginBtn />
          <p className="PP">
            Read our{" "}
            <a className="privpol" onClick={handleClick}>
              Privacy Policy
            </a>
          </p>
        </div>
        <SampleSection />
      </main>
    </>
  );
};

export default Body;
