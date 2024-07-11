import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Help = () => {

    const [isAtIndex, setIsAtIndex] = useState(true);

    return ( 
        <div className="flex flex-col md:flex-row justify-between w-full dark:text-white">
            <div className="help-left w-full md:w-80">
                <nav className="nav mt-6 ml-8 help-nav cursor-help">
                    {
                        isAtIndex?
                        <NavLink className="link block py-1">Getting Started</NavLink>
                        :
                        <Link className="link block py-1"
                            onClick={() => setIsAtIndex(true)}
                        >
                            Getting Started
                        </Link>    
                    }
                    {/* <NavLink className="link block py-1">Getting Started</NavLink> */}
                    <NavLink className="link block py-1" to={'faqs'}
                        onClick={() => setIsAtIndex(false)}
                    >
                        FAQs
                    </NavLink>
                    <NavLink className="link block py-1" to={'resources'}
                        onClick={() => setIsAtIndex(false)}
                    >
                        Resources
                    </NavLink>
                    <NavLink className="link block py-1" to={'contact-support'}
                        onClick={() => setIsAtIndex(false)}
                    >
                        Contact Support
                    </NavLink>
                </nav>
            </div>
            <div className="help-content grow w-full md:w-auto ml-10 md:ml-20 mt-10">
                <Outlet />
            </div>
        </div>
     );
}
 
export default Help;