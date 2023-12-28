import { NavLink, Outlet } from "react-router-dom";
// icon
import { SlNotebook } from "react-icons/sl";
import { TbTestPipe } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { FcHome } from "react-icons/fc";


const Dashboard = () => {

    return (
        <div className='relative min-h-screen md:flex bg-gray-100'>
            {/* Sidebar Component */}
            <ul className="menu p-4 bg-white space-y-4">

                <li><NavLink className={({ isActive }) => (isActive ? 'dashboard-nav-active' : 'dashboard-nav-inActive')} to="/dashboard/userProfile"><CgProfile></CgProfile>User Profile</NavLink></li>

                <li><NavLink className={({ isActive }) => (isActive ? 'dashboard-nav-active' : 'dashboard-nav-inActive')} to="/dashboard/appointments"><SlNotebook></SlNotebook>Appointments</NavLink></li>

                <li><NavLink className={({ isActive }) => (isActive ? 'dashboard-nav-active' : 'dashboard-nav-inActive')} to="/dashboard/testResults"><TbTestPipe></TbTestPipe>Test Results</NavLink></li>

                <div className="divider"></div>

                <li><NavLink className={({ isActive }) => (isActive ? 'dashboard-nav-active' : 'dashboard-nav-inActive')} to='/'><FcHome></FcHome>Home</NavLink></li>


            </ul>
            <div className='flex-1'>
                <div className='p-2 lg:p-5 flex justify-center'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;