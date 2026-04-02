import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* CURRENT */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>PhD Researcher</h4>
                <h5>Nanjing University of Information Science & Technology</h5>
              </div>
              <h3>2024 – Present</h3>
            </div>
            <p>
              Pursuing a PhD in Computer Science with a focus on Machine Learning,
              Deep Learning, and advanced AI systems. Research includes sentiment
              analysis, computer vision, and multimodal intelligent systems.
            </p>
          </div>

          {/* LECTURER CURRENT */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Lecturer – Computer Science</h4>
                <h5>Government Postgraduate College, Haripur</h5>
              </div>
              <h3>2022 – Present</h3>
            </div>
            <p>
              Teaching core Computer Science subjects including AI, Data Structures,
              Operating Systems, and Programming. Mentoring students and supervising
              projects with a focus on real-world applications and modern technologies.
            </p>
          </div>

          {/* PREVIOUS LECTURER */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Lecturer – Computer Science</h4>
                <h5>Abbottabad University of Science & Technology</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Delivered courses in Mobile App Development, NLP, Database Systems,
              and Simulation & Modeling with emphasis on practical implementation
              and student-driven projects.
            </p>
          </div>

          {/* EARLIER EXPERIENCE */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Lecturer / Research Assistant / Developer</h4>
                <h5>University of Haripur & Other Institutions</h5>
              </div>
              <h3>2020 – 2022</h3>
            </div>
            <p>
              Taught Machine Learning, Programming, and Software Engineering courses.
              Worked as a Research Assistant and contributed to AI-based systems.
              Also developed C#/.NET applications including POS and management systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
