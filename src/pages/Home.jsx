import { useEffect, useContext } from "react";
import DeptNews from "../components/DeptNews";
import LineGraph from "../components/LineGraph";
import StudentDetails from "../components/StudentDetails";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeContext } from "../Contexts/ThemeContext";

const Home = ({harmburgerShow}) => {

    useEffect(() => {
        toast("This LMS is better adapted for Desktop use")
    }, [])
    const { darkModeValue, setDarkModeValue } = useContext(ThemeContext);

    return ( 
        <div className="home m-auto dark:bg-dark-mode-body">
            <ToastContainer theme={darkModeValue? "dark" : "light"} className={"block md:hidden"}/>
            <StudentDetails harmburgerShow={harmburgerShow}/>
            <div className="home-bottom flex w-11/12 m-auto justify-between">
                <DeptNews />
                <LineGraph />
            </div>
        </div>
    );
}
 
export default Home;