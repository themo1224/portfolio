import logo from "../assets/MB_logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 max-w-13" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4  text-2xl">
        <FaLinkedin></FaLinkedin>
        <FaGithub></FaGithub>
      </div>
    </nav>
  )
}

export default Navbar;