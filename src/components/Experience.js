import React, { useEffect } from 'react';

export const Experience = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  return (
    <section className="experience-section">
      <div className="container">
        <h2>Professional Experience</h2>
        <p>A detailed overview of my roles as a Software Engineer and Front-End Developer, focusing on delivering high-performance applications and improving user experience.</p>
        
        <div className="experience-list">
          <div className="experience-item">
            <h3>Software Engineer | University of Florida | Sep 2024 – Present</h3>
            <p>Published and optimized 10+ billion healthcare records into MySQL, resulting in a 40% improvement in query performance and reducing data retrieval time from 5 minutes to 3 minutes.</p>
            <p>Developed a full-stack solution using <strong>React</strong>, <strong>MySQL</strong>, and RESTful APIs, improving scalability by 200% and reducing data access time from 2 to 0.5 seconds.</p>
          </div>

          <div className="experience-item">
            <h3>Software Engineer Intern | Jazwares, LLC | May 2024 – Aug 2024</h3>
            <p>Developed responsive web applications using <strong>React</strong> & <strong>Tailwind</strong>, improving cross-browser compatibility and boosting engagement by 15%.</p>
            <p>Implemented state management using <strong>Redux</strong> and custom React hooks, optimizing web performance and reducing load times by 30%.</p>
          </div>

          <div className="experience-item">
            <h3>Software Engineer | Chargebee, Inc | Jan 2022 – Jul 2023</h3>
            <p>Led the refactoring of multiple websites from <strong>Angular</strong> to <strong>React</strong>, ensuring seamless integration with backend systems, saving 20 hours weekly for 3 employees.</p>
            <p>Developed an interactive dashboard using <strong>React.js</strong>, improving customer satisfaction by 35% by enabling real-time financial insights.</p>
          </div>

          <div className="experience-item">
            <h3>Software Engineer Intern | Chargebee, Inc | Jan 2021 – Jul 2021</h3>
            <p>Built asynchronous microservices using <strong>Java</strong> and <strong>Spring Boot</strong>, reducing payment gateway response time by 50% and improving transaction monitoring efficiency by 40%.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
