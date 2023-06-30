import { skills } from "../../Constants";

const Skills = () => {
  return (
    <div className="bg-[#0a192f] text-gray-300 py-16  ">
      <h1 className=" text-2xl lg:text-4xl text-center mb-2 ">Skills</h1>
      <p className=" text-center ">
        These are the technologies i've worked with
      </p>
      {/* technologies  */}
      <section className="flex flex-wrap justify-center items-center  lg:flex-row  px-4 lg:px-8 pb-12 gap-10 mt-8 ">
        {skills.map((skill) => (
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            key={skill.name}
          >
            <img className="w-20 h-20 object-contain" src={skill.icon} alt="" />
            <h1 className="text-center">{skill.name}</h1>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Skills;
