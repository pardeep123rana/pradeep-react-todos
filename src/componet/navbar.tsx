import File from "./file";
import Add from "./add";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full">
      <File />
      <Add />
      <nav className="text-black flex justify-center items-center mt-7 ">
        <ul className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-10">
          <li>
            <NavLink
              to="/all"
              className={({ isActive }) =>
                `text-xl ${
                  isActive
                    ? "text-purple-600 text-2xl font-bold"
                    : "hover:text-purple-600"
                }`
              }
            >
              All
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/active"
              className={({ isActive }) =>
                `text-xl ${
                  isActive
                    ? "text-purple-600 text-2xl font-bold"
                    : "hover:text-purple-600"
                }`
              }
            >
              Active
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/completed"
              className={({ isActive }) =>
                `text-xl ${
                  isActive
                    ? "text-purple-600 text-2xl font-bold"
                    : "hover:text-purple-600"
                }`
              }
            >
              Completed
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
