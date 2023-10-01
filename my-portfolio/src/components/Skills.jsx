export default function Skills() {

const softSkills = ["Communication", 
  "Teamwork", 
  "Problem Solving", 
  "Agile", 
  "Attention to detail", 
  "Continuous Learning",
"Adaptability"];
  
  const technicalSkills = [
    "JavaScript",
    "React",
    "Node.js",
    "HTML",
    "CSS",
    "TypeScript",
    "Git",
    
  ];
  

  return (
    <div>
        
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
  )

}