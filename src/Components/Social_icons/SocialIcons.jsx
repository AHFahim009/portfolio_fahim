import { FaFacebook, FaGithub } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <section className=" z-10 fixed flex-col top-[35%] left-0 text-white hidden lg:block">
      <ul>
        <li className="w-[125px] h-[60px] flex justify-between items-center">
          <a
            className="flex justify-between w-full text-gray-300 items-center ml-[-90px] hover:ml-[10px] duration-300 bg-blue-600 p-1 rounded-lg"
            href="/"
          >
            Facebook <FaFacebook size={30} />
          </a>
        </li>
        <li className="w-[125px] h-[60px] flex justify-between items-center">
          <a
            className="flex justify-between w-full text-gray-300 items-center ml-[-90px] hover:ml-[10px] duration-300 bg-gray-700 p-1 rounded-lg"
            href="/"
          >
            Github <FaGithub size={30} />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default SocialIcons;
