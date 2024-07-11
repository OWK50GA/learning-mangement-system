import { Outlet } from "react-router-dom";
import HarmburgerMenu from "../components/HarmburgerMenu";
import { useContext, useEffect, useState } from "react";
import { Bell, Hamburger, Notification, Sun, X } from "phosphor-react";
import { BiMenu } from "react-icons/bi";
import { ThemeContext, UserContext } from "../Contexts/ThemeContext";
import { CiDark, CiMenuBurger } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";

const RootLayout = () => {

    const [harmburgerShow, setHarmburgerShow] = useState(false)
    const { darkModeValue, setDarkModeValue } = useContext(ThemeContext);
    const { user, setUser } = useContext(ThemeContext);
    const [loading, setLoading] = useState(true)

    const getUser = () => {
        fetch(`https://freetestapi.com/api/v1/students/1`)
        .then(res => res.json())
            .then((data) => {
                setUser(data);
                setLoading(false)
                console.log(user)
            })
    }

    useEffect(() => {
        getUser();
    }, [loading])

    console.log(darkModeValue)

    return ( 
        <div className={darkModeValue? "body dark dark:bg-dark-mode-body" : "body"}>
            <div className="p-3.5 bg-sky-400 w-full dark:bg-slate-800">
                <div className="flex justify-between m-auto w-11/12">
                    <div className="left-icons flex gap-6">
                        {harmburgerShow? 
                            <X 
                                className="hamburger-icon"
                                color={darkModeValue? "white" : "black"}
                                onClick={() => {
                                    setHarmburgerShow(!harmburgerShow)
                                }}
                            /> 
                            :
                            <BiMenu strokeWidth={0.002}
                            src="src\assets\hamburger.png" 
                            alt="" 
                            className="hamburger-icon dark:fill-white"
                            onClick={() => setHarmburgerShow(!harmburgerShow)}
                            />
                            }
                        <img src="src\assets\4624f8dd-4da6-48da-86ed-87b55b3f360d.jpg" alt="" className="dept-icon"/>
                    </div>
                    <div className="flex gap-5">
                        {
                            darkModeValue?
                            <Sun className="hamburger-icon"
                                color="white"
                                onClick={() => {
                                    setDarkModeValue(!darkModeValue)
                                }}
                            />
                            :
                            <CiDark className="hamburger-icon dark:fill-white"
                                onClick={() => {
                                    setDarkModeValue(!darkModeValue)
                                }}
                        />
                        }
                        {/* <Bell className="hamburger-icon"/> */}
                        {/* <RxAvatar i/> */}
                        {user?
                            <img src={user.image} alt="" className="avatar rounded-3xl"/>
                            :
                            <img src="src\assets\OIP.jpg" alt="" className="avatar rounded-3xl"/>
                        }
                    </div>
                </div>
            </div>

            <main className="main dark:bg-dark-mode-body h-fit">
                <div className="page flex dark:bg-dark-mode-body">
                    <HarmburgerMenu harmburgerShow={harmburgerShow} setHarmburgerShow={setHarmburgerShow}/>
                    <Outlet />
                </div>
            </main>
        </div>
     );
}
 
export default RootLayout;