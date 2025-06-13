// Heading.jsx
import { useNavigate } from "react-router-dom";
import "./Styles/heading.css";

const Heading = ({ openModal, backgroundStyle }) => {
  const navigate = useNavigate();
  const headerDynamicStyle = {
    background: backgroundStyle || "linear-gradient(135deg, #0e2148, #483aa0)",
  };

  const handleLoginClick = () => {
    navigate("/");
  };

  return (
    // Apply the dynamic style to the <header> element
    <header className="heading" style={headerDynamicStyle}>
      <h1 onClick={handleLoginClick}> Music Taste</h1>
      <div className="about-us">
        <button onClick={openModal}>
          <svg
            width="64px"
            height="64px"
            viewBox="0 0 24.00 24.00"
            xmlns="http://www.w3.org/2000/svg"
            fill="#0fff"
            stroke="#0fff"
            transform="rotate(180)matrix(1, 0, 0, -1, 0, 0)"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <title></title>{" "}
              <g id="Complete">
                {" "}
                <g id="info-circle">
                  {" "}
                  <g>
                    {" "}
                    <circle
                      cx="12"
                      cy="12"
                      data-name="--Circle"
                      fill="none"
                      id="_--Circle"
                      r="10"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.4"
                    ></circle>{" "}
                    <line
                      fill="none"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.4"
                      x1="12"
                      x2="12"
                      y1="12"
                      y2="16"
                    ></line>{" "}
                    <line
                      fill="none"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.4"
                      x1="12"
                      x2="12"
                      y1="8"
                      y2="8"
                    ></line>{" "}
                  </g>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Heading;
