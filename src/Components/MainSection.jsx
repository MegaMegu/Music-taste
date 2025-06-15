import { useState } from "react";
import Design from "./Design";
import CustomSection from "./CustomSection";

const MainSection = () => {
  const [active, setActive] = useState(0); // 0 for Mang Roy

  return (
    <>
      <Design active={active} setActive={setActive} />
      <CustomSection active={active} />
    </>
  );
};

export default MainSection;
