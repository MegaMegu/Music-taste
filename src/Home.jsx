import React, { useState } from "react";
import Heading from "./Components/Heading";
import HomeBody from "./Components/HomeBody";
import Modal from "./Components/Modal";
import Footer from "./Components/Footer";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Heading
        openModal={() => setIsModalOpen(true)}
        backgroundStyle={"linear-gradient(101deg, #483aa0, #0e2148)"}
      />
      <HomeBody />
      <Footer backgroundStyle={"linear-gradient(101deg, #483aa0, #0e2148)"} />
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Home;
