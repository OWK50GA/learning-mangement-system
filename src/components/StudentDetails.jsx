// import { useContext } from "react";
// import { ThemeContext } from "../Contexts/ThemeContext";
// import { student1 } from '../fakeData'

import { Ladder } from "phosphor-react";
import { useEffect } from "react";
import { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa6";
import { GiBookshelf } from "react-icons/gi";
import { IoBookSharp } from "react-icons/io5";
import { LuScrollText } from "react-icons/lu";
import { SiSololearn } from "react-icons/si";

const StudentDetails = () => {

    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(true);

    // const randomNum = Math.floor((Math.random() * 20) + 1)
    const getStudent = () => {
        fetch(`https://freetestapi.com/api/v1/students/1`)
            .then(res => res.json())
            .then((data) => {
                setStudent(data);
                setLoading(false);
            })
            .catch(error => console.error('Error: ', error));
    }

    useEffect(() => {
        getStudent();
    }, []);

    return (
        <div className="student-details w-11/12 mx-auto my-12 dark:text-white">
            {!loading && (
                <div className="welcome-message font-bold">
                <h3>Welcome, {student.name}</h3>
                <p>Matric Number: {`${student.address.zip}${student.id}`}</p>
            </div>
            )}
            {loading && (
                <div className="welcome-message font-bold">
                <h3>Welcome, User</h3>
                <p>Looks like you're not connected</p>
                </div>
            )}
            <div className="cards flex gap-5 mt-10">
                <div className="card bg-white dark:bg-slate-800 flex justify-center items-center">
                    <div className="flex flex-col w-full justify-center items-center">
                        <Ladder size={"50px"} color="#FF99CC" className="mr-20 colored-comps"/>
                        <div className="mt-3">
                            <h2 className="text-3xl">400</h2>
                            <p className="">Level</p>
                        </div>
                    </div>
                </div>
                <div className="card bg-white dark:bg-slate-800 flex justify-center items-center">
                    <div className="flex flex-col w-full justify-center items-center">
                        <FaRegCalendarAlt size={"50px"} color="#964B00" className="mr-20 colored-comps"/>
                        <div className="mt-3">
                            <h2 className="text-3xl">Harmattan</h2>
                            <p className="">Semester</p>
                        </div>
                    </div>
                </div>
                <div className="card bg-white dark:bg-slate-800 flex justify-center items-center">
                    <div className="flex flex-col w-full justify-center items-center">
                        <GiBookshelf size={"50px"} color="#7A288A" className="mr-20 colored-comps"/>
                        <div className="mt-3 card-text">
                            <h2 className="text-3xl">09</h2>
                            <p className="">Courses</p>
                        </div>
                    </div>
                </div>
                <div className="card bg-white dark:bg-slate-800 flex justify-center items-center">
                    <div className="flex flex-col w-full justify-center items-center">
                        <SiSololearn size={"50px"} color="#ACFFAC" className="mr-20 colored-comps"/>
                        <div className="mt-3 card-text">
                            <h2 className="text-3xl">20</h2>
                            <p className="">Lectures/Wk</p>
                        </div>
                    </div>
                </div>
                <div className="card bg-white dark:bg-slate-800 flex justify-center items-center">
                    <div className="flex flex-col w-full justify-center items-center">
                        <LuScrollText size={"50px"} color="#8BC34A" className="mr-20"/>
                        {!loading && (
                            <div className="mt-3 card-text">
                                <h2 className="text-3xl">{student.gpa}</h2>
                                <p className="">CGPA</p>
                            </div>
                        )}
                        {loading && (
                            <div className="mt-3 card-text">
                                <h2 className="text-3xl">XXX</h2>
                                <p className="">CGPA</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default StudentDetails;