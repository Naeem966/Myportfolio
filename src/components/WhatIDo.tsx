import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>

      <div className="what-box">
        <div className="what-box-in">

          {/* CARD 1 */}
          <div className="what-border2">
            <svg width="100%">
              <line x1="0" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
              <line x1="100%" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
            </svg>
          </div>

          <div className="what-content what-noTouch" ref={(el) => setRef(el, 0)}>
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
              </svg>
            </div>

            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>MACHINE LEARNING & AI RESEARCH</h3>
              <h4>Data-Driven Intelligent Systems</h4>
              <p>
                Researcher and AI specialist focused on Machine Learning, Deep Learning,
                and Natural Language Processing. I develop intelligent systems for real-world
                applications including sentiment analysis, medical imaging, and computer vision.
              </p>

              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Machine Learning</div>
                <div className="what-tags">Deep Learning</div>
                <div className="what-tags">NLP</div>
                <div className="what-tags">Computer Vision</div>
                <div className="what-tags">TensorFlow</div>
                <div className="what-tags">PyTorch</div>
                <div className="what-tags">Scikit-learn</div>
              </div>

              <div className="what-arrow"></div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="what-content what-noTouch" ref={(el) => setRef(el, 1)}>
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
              </svg>
            </div>

            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>TEACHING & SYSTEM DEVELOPMENT</h3>
              <h4>From Theory to Practical Implementation</h4>
              <p>
                Lecturer and developer with experience in teaching core Computer Science
                subjects while building real-world systems using Python, Flask, and modern
                ML frameworks. I focus on bridging academic knowledge with industry applications.
              </p>

              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Python</div>
                <div className="what-tags">Flask / Django</div>
                <div className="what-tags">OpenCV</div>
                <div className="what-tags">Data Analysis</div>
                <div className="what-tags">Web Development</div>
                <div className="what-tags">Research & Publications</div>
                <div className="what-tags">Teaching</div>
              </div>

              <div className="what-arrow"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");

  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
