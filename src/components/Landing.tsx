import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              NAEEM
              <br />
              <span>AHMED</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Ai Researcher</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Machine Learning</div>
              <div className="landing-h2-2"> Computer Vision</div>
            </h2>
            <h2>
              <div className="landing-h2-info-1">Tech</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
