function Education() {
  const education = [
    {
      type: "CodeSpace",
      school: "CodeSpace Academy",
      program: "Full Stack Web Development",
      year: "2022-Currently",
    },

    {
      type: "Higher Education",
      school: "Orbit Tvet College",
      degree: "Electrical Engineering",
      year: "2020-2021",
    },
    {
      type: "High School",
      school: "HTS Rustenburg",
      year: "2015-2019",
    },
  ];

  return (
    <div>
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
    </div>
  );
}

export default Education;
