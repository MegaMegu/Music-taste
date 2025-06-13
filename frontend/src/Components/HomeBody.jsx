import React from "react";
import "./Styles/homeBody.css";
import CustomSection from "./CustomSection";
import Customizer from "./Customizer";

const HomeBody = () => {
  return (
    <>
      <main className="homeBody">
        <section>
          <CustomSection />
        </section>
        <section className="customizer">
          <Customizer />
          <button className="savebtn">Save And Share</button>
        </section>
      </main>
    </>
  );
};

export default HomeBody;
