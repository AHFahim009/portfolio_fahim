import { useState } from "react";

const ProjectsDisplay = ({ project }) => {
  const { detail } = project;
  const [showFull, setShowFull] = useState(false);

  const toggleShowFull = () => {
    setShowFull(!showFull);
  };

  const getShortText = (text) => {
    const words = text.split(" ");
    const shortText = words.slice(0, 5).join(" ");

    return shortText;
  };

  return (
    <div className="card card-compact w-96 shadow-xl">
      <figure className=" h-[400px]">
        <img className=" object-cover " src={project.image} alt="Shoes" />
      </figure>
      <div className="card-body shadow-2xl text-gray-300 ">
        <h2 className="card-title">{project.name}</h2>
        <p
          className="text-xl  "
          onMouseEnter={toggleShowFull}
          onMouseLeave={toggleShowFull}
        >
          {showFull ? detail : getShortText(detail)}
        </p>
        <div className="card-actions justify-start mt-2">
          <a className="btn btn-xs  bg-purple-900 text-white ">View Code</a>
          <a
            href={project.preview}
            className="btn btn-xs  bg-purple-900 text-white "
          >
            Preview
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDisplay;
