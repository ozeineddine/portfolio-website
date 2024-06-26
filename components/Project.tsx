import Image from "next/image";

// title on top, picture on left, description on right, tech stack skills under
const Project = ({ projectObject }: { projectObject: any }) => {
  return (
    <div className="projectBox">
      <p className="section_subtitle">{projectObject.title}</p>
      <div className="flex flex-row">
        <div>
          <Image
            src={projectObject.image}
            width={100}
            height={75}
            alt="Wordle GUI Clone Picture"
          />
        </div>
        <div className="projectDescriptionBox">{projectObject.description}</div>
      </div>
      <div>map projectObject.skills here</div>
    </div>
  );
};

export default Project;
