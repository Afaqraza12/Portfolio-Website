import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Our <span>Journey</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineering Undergrads</h4>
                <h5>University of Haripur</h5>
              </div>
              <h3>2024 - PRESENT</h3>
            </div>
            <p>
              Deepening expertise in Core Computing, Object-Oriented Programming, and Software Architectures while maintaining a focus on real-world practical implementations.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Flavor Fetch Development</h4>
                <h5>Open Source Project</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Engineered a high-performance C++ recipe management application, handling complex local File I/O storage architectures integrated with REST API database systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cross-Platform & UI Design Research</h4>
                <h5>Independent Study</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Diving deep into modern declarative UI workflows. Afaq mastering advanced Dart 3.0 reactive patterns while Mafaz establishes cohesive interactive design standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
