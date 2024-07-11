import { Book, UsersThree } from "phosphor-react";
import { Link, Outlet } from "react-router-dom";
import UserProfile from "../components/UserProfile";
import { useEffect, useState } from "react";
import Lecturers from '../components/Lecturers'
import FellowStudents from "../components/FellowStudents";

const Users = () => {

    const options = ['My Profile', 'Fellow Students', 'Lecturers']
    const [currentOption, setCurrentOption] = useState(options[0]);

    return ( 
        <div className="users w-4/5 mt-7 m-auto rounded-2xl">
            <div className="flex gap-16 bg-sky-500 px-10 py-4 dark:bg-slate-800">
                {/* <Link to={''} className="link hover:bg-emerald-50">User Profile</Link>
                <Link to={"clubs"} className="link hover:bg-emerald-50">Clubs/Groups</Link>
                <Link to={"lecturers"} className="link hover:bg-emerald-50">Lecturers</Link> */}
                <select 
                    name="" 
                    id=""
                    onChange={(e) => setCurrentOption(e.target.value)}
                >
                    {options.map((option) => (
                        <option value={option}>{option}</option>
                    ))}
                </select>
            </div>

            {currentOption === options[0] && <UserProfile />}
            {currentOption === options[2] && <Lecturers />}
            {currentOption === options[1] && <FellowStudents />}
        </div>
     );
}
 
export default Users;