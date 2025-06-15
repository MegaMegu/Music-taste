import React from "react";
import "./Styles/body.css";
import LoginBtn from "./LoginBtn";
import SampleSection from "./SampleSection";

const Body = () => {
  return (
    <>
      <main className="body">
        <div className="bodyInside">
          <h4>Create a Karinderya Menu based on your Music Taste</h4>
          <p>Open a Karinderya via:</p>
          <LoginBtn />
          <p className="PP">
            Read our <a href="#">Privacy Policy</a>
          </p>
        </div>
        <SampleSection />
      </main>
    </>
  );
};

export default Body;
