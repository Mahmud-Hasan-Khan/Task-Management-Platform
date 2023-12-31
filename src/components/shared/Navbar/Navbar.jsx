import { Link, NavLink, useNavigate } from "react-router-dom";
import navLogo from '../../../assets/images/Logo.png';
import { FcHome } from "react-icons/fc";
import MenuDropdown from "./MenuDropdown";
import { TbTestPipe } from "react-icons/tb";
import { MdHomeRepairService } from "react-icons/md";
import DarkTheme from "./DarkTheme";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-hot-toast";
import { CiLogin } from "react-icons/ci";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {

    try {
      await logOut();
      toast.success('Logout successful');
      // console.log('user login');
      navigate(location?.state ? location?.state : "/")
    }
    catch (err) {
      toast.error(err.message);
    }
  }

  const navLinks = <div className='space-y-2'>
    <li>
      <NavLink to='/' className={({ isActive }) => (isActive ? 'navActive' : 'navInActive')}><FcHome /> Home</NavLink>
    </li>

    <li>
      <NavLink to="/departments" className={({ isActive }) => (isActive ? 'navActive' : 'navInActive')}><MdHomeRepairService className="text-[#e00000] " />Departments</NavLink>
    </li>
  </div>

  return (
    <div className="navbar sticky top-0 z-10 bg-base-200 border-b-[1px] xl:px-20 md:px-10 sm:px-2 px-0">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-32">
            {navLinks}
          </ul>
        </div>
        <Link to="/"><img className='w-[60%] lg:w-[90%]' src={navLogo} alt="logo" /> </Link>
      </div>
      <div className="navbar-center hidden lg:block">
        <ul className="menu menu-horizontal space-x-2 text-base font-medium">
          <li>
            <NavLink to='/' className={({ isActive }) => (isActive ? 'navActive' : 'navInActive')}><FcHome /> Home</NavLink>
          </li>
          <li>
            <NavLink to="/allTests" className={({ isActive }) => (isActive ? 'navActive' : 'navInActive')}><TbTestPipe className="text-[#e00000] " /> All Tests</NavLink>
          </li>
          {
            user && <>
              <Link className='btn-login' to="/dashboard/userHome">Dashboard</Link>
            </>
          }
        </ul>
      </div>
      <div className="navbar-end space-x-1 lg:space-x-2 mr-3 lg:mr-0">
        <MenuDropdown></MenuDropdown>
        <div>
          {user ? <>
            <Link onClick={handleLogout} className='border-b-2 border-[#00d260] px-2 py-1 shadow-lg text-center' to="/">Logout
            </Link>
          </> : <>
            <Link className='border-2 border-[#00d260] px-3 py-1 shadow-lg flex items-center text-center justify-center rounded-lg text-[#00d260] font-medium hover:shadow-md hover:font-bold hover:transition' to="/login"><CiLogin className="text-xl mr-1" /> Login
            </Link>
          </>}
        </div>
        <DarkTheme></DarkTheme>
      </div>
    </div>
  );
};

export default Navbar;