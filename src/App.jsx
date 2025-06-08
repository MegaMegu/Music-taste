// App.jsx
import { useState } from "react";
import "./App.css";
import Heading from "./Components/Heading";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Modal from "./Components/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Heading openModal={() => setIsModalOpen(true)} />
      <Body />
      <Footer />
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default App;
