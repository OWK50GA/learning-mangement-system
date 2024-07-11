import { TfiDashboard } from "react-icons/tfi";
import { PiUsersFour } from "react-icons/pi";
import { IoCalendarOutline } from "react-icons/io5";
import { FaPencilAlt } from "react-icons/fa";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import { SlLogout } from "react-icons/sl";

import { NavLink } from "react-router-dom";

const HarmburgerMenu = ({harmburgerShow, setHarmburgerShow}) => {

    return ( 
        <div className={harmburgerShow? "harmburger-menu dark:bg-slate-800" : "harmburger-menu hidden"}>
            <div className="harmburger-list md:flex md:flex-col md:gap-8 md:mt-16 px-6 dark:text-white">
                <div className="harmburger-item flex items-center">
                    <TfiDashboard className="harmburger-icon mx-5"/>
                    <NavLink 
                        to={"/"} className="harmburger-menu-text"
                        onClick={()=> setHarmburgerShow(false)}>
                        Dashboard
                    </NavLink>
                </div>
                <div className="harmburger-item flex items-center">
                    <PiUsersFour className="harmburger-icon mx-5"/>
                    <NavLink
                        to={"users"} 
                        className={"harmburger-menu-text"}
                        onClick={()=> setHarmburgerShow(false)}>
                        Users
                    </NavLink>
                </div>
                <div className="harmburger-item flex items-center">
                    <IoCalendarOutline className="harmburger-icon mx-5"/>
                    <NavLink
                        to={"calendar"} 
                        className={"harmburger-menu-text"}
                        onClick={()=> setHarmburgerShow(false)}>
                        Calendar
                    </NavLink>
                </div>
                <div className="harmburger-item flex items-center">
                    <FaPencilAlt className="harmburger-icon mx-5" />
                    <NavLink
                        to={"assessment"} 
                        className={"harmburger-menu-text"}
                        onClick={()=> setHarmburgerShow(false)}>
                        Assessment
                    </NavLink>
                </div>
                <div className="harmburger-item flex items-center">
                    <IoMdHelpCircleOutline className="harmburger-icon mx-5" />
                    <NavLink
                        to={"help"} 
                        className={"harmburger-menu-text"}
                        onClick={()=> setHarmburgerShow(false)}>
                        Help
                    </NavLink>
                </div>
                {/* <div className="harmburger-item flex items-center">
                    <FiSettings className="harmburger-icon mx-5" />
                    <NavLink
                        to={"settings"} 
                        className={"harmburger-menu-text"}
                        onClick={()=> setHarmburgerShow(false)}>
                        Settings
                    </NavLink>
                </div> */}
                <div className="harmburger-item flex items-center">
                    <SlLogout className="harmburger-icon mx-5"/>
                    <NavLink
                        to={'logged-out'} 
                        className={"harmburger-menu-text"}
                        onClick={()=> setHarmburgerShow(false)}>
                        Log Out</NavLink>
                </div>
                
                
                
                
                
            </div>
        </div>
     );
}
 
export default HarmburgerMenu;