import { useState } from "react";
import TimeLine from "../components/TimeLine";
import TimeTable from "../components/TimeTable";
import Popup from "../components/Popup";

const Calendar = () => {

    const options = ['School Calendar', 'TimeTable']
    const [currentOption, setCurrentOption] = useState(options[0]); 

    return ( 
        <div className="calendar my-12 text-left p-10 mx-auto w-4/5 rounded-lg">
            <select name="" id="" onChange={(e) => {
                setCurrentOption(e.target.value)
            }}>
                <option value={options[0]}>{options[0]}</option>
                <option value={options[1]}>{options[1]}</option>
            </select>
            {currentOption === options[0] && <TimeLine />}
            {currentOption === options[1] && <TimeTable />}

            {/* <button className="bg-sky-400 p-4 see-more-cgpa mt-6 mx-auto float-right dark:bg-slate-800">
                Add Custom Timetable
            </button>

            <Popup trigger={true}>
                <div>Form</div>
                <form action="">
                    <div>
                        <label htmlFor="title">Table Title</label>
                        <input type="text" name="title" id="" />
                    </div>
                    <div>
                        <p>Monday:</p>
                        <div>
                            <label htmlFor="title">Course(s) To Read</label>
                            <input type="text" name="title" id="" />
                        </div>
                        <div>
                            <label htmlFor="title">Time to read</label>
                            <input type="text" name="title" id="" />
                        </div>
                        <div>
                            <button className="bg-sky-400 p-2 see-more-cgpa mt-6 mx-auto float-right dark:bg-slate-800">
                                Add New Course
                            </button>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="title">Table Title</label>
                        <input type="text" name="title" id="" />
                    </div>
                </form>
            </Popup> */}
        </div>
     );
}
 
export default Calendar;