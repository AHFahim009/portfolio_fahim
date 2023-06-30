import { useState } from "react";
import { navLinks } from "../../Constants";
import { Link } from "react-scroll";

const Navbar = () => {
  const [active, setActive] = useState("");
  console.log(active);
  const navItems = (
    <>
      {navLinks.map((link) => (
        <li
          className={`${
            active === link.id
              ? "border-b-2 duration-100 rounded-md border-blue-700"
              : ""
          } cursor-pointer`}
          onClick={() => setActive(link.id)}
          key={link.id}
        >
          <Link to={link.id} smooth={true} duration={500}>
            {link.title}
          </Link>
        </li>
      ))}
    </>
  );

  return (
    <div className="  bg-[#0a192f] ">
      <nav className="navbar  text-white lg:px-8 lg:fixed z-20 ">
        <div className="navbar-start">
          <div className="dropdown  ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow   text-white rounded-box  flex flex-col justify-start items-start gap-2 px-4 py-4 bg-gray-800  "
            >
              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">AH Fahim</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1  text-xl">{navItems}</ul>
        </div>
        <div className="navbar-end lg:hidden">
          <button className="btn btn-outline text-white">Resume</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
