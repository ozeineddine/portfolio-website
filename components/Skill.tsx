
// for passing in props from now on: {prop} : {prop:type}
const Skill = ({ name }: { name: string }) => {
  return (
    <>
      <div className="skill flex items-center justify-center w-32 h-10">{name}</div>
    </>
  );
};

export default Skill;
