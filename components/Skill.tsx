
// for passing in props from now on: {prop} : {prop:type}
const Skill = ({ name }: { name: string }) => {
  return (
    <>
      <div className="skill flex items-center text-center justify-center w-28 h-12 sm:w-40 sm:h-16">{name}</div>
    </>
  );
};

export default Skill;
