import colorSharp from "../assets/img/color-sharp.png";
import "./Skills.css";

export const Skills = () => {
  const skills = [
    "ReactJS",
    "Redux",
    "Typescript",
    "Next.js",
    "Webpack",
    "UI/UX",
    "Web Development",
    "Machine Learning",
    "Data Analysis",
    "Python",
    "SQL",
    "CI/CD"
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2 className="skillss">Skills</h2>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <h5>{skill}</h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
