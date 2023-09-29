

function KopoNtheledi() {
  // Define your education, soft skills, and technical skills here
  const education = [
    {
      type: "High School",
      school: "Sample High School",
      year: "2008-2012",
    },
    {
      type: "Higher Education",
      school: "Sample University",
      degree: "Bachelor's in Computer Science",
      year: "2012-2016",
    },
    {
      type: "CodeSpace",
      school: "CodeSpace Academy",
      program: "Full Stack Web Development",
      year: "2020-2021",
    },
  ];

  const softSkills = ["Communication", "Teamwork", "Problem Solving"];
  
  const technicalSkills = [
    "JavaScript",
    "React",
    "Node.js",
    "HTML",
    "CSS",
    "Python",
    "Database Management",
  ];

  return (
    <div className="about-me">
      <h2>About Me</h2>

      <h3>Education</h3>
      <ul>
        {education.map((edu, index) => (
          <li key={index}>
            {edu.type} - {edu.school} ({edu.year})
            {edu.degree && ` - ${edu.degree}`}
            {edu.program && ` - ${edu.program}`}
          </li>
        ))}
      </ul>

      <h3>Soft Skills</h3>
      <ul>
        {softSkills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h3>Technical Skills</h3>
      <ul>
        {technicalSkills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default KopoNtheledi;
