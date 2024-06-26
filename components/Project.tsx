import Image from "next/image";
import Link from "next/link";
// heroku link: https://project-b-23-2023-288292ef658c.herokuapp.com/reviews/profile/
// title on top, picture on left, description on right, tech stack skills under
const Project = ({ projectObject }: { projectObject: any }) => {
  const content = (
    <div>
        <p className="section_subtitle">{projectObject.title}</p>
    <div
      className="projectBox"
      style={{ backgroundImage: `url(${projectObject.image})` }}
    >
      <div className="projectContent">
        
          <div className="projectDescriptionBox">
            {projectObject.description}
          </div>
        <div className="skillList">
          {projectObject.skillList.map((skill: string, index: number) => (
            <span key={index} className="skill mx-1">
              {skill}
            </span>
          ))}
        </div>
    </div>
    </div>
    </div>
  );

  if (projectObject.link) {
    return  <a href={projectObject.link} target="_blank" rel="noopener noreferrer">{content}</a>; 
  } else {
    return content;
  }
};

export default Project;
