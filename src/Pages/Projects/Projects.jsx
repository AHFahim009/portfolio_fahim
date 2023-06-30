import { projects } from "../../Constants";
import ProjectsDisplay from "./ProjectsDisplay";

const Projects = () => {
  return (
    <div name="work" className="   bg-[#0a192f] text-gray-300  ">
      <h1 className="text-center text-3xl ">
        <span className="border-b-2 border-red-500 rounded-2xl py-2">
          My Projects
        </span>
      </h1>

      <section className="grid  md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-5 lg:px-12 px-4 py-8 ">
        {projects.map((p) => (
          <>
            <ProjectsDisplay key={p.id} project={p} />
          </>
        ))}
      </section>
    </div>
  );
};

export default Projects;
