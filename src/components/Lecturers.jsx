import { Link } from "react-router-dom";
import { staffData } from "../fakeData";

const Lecturers = () => {
    return ( 
        <div>
            <table className="table table-auto dark:text-white">
                    <thead>
                        <tr>
                            <td className="table-data px-3 py-5">S/N</td>
                            <td className="table-data px-3">Name</td>
                            <td className="table-data px-3">Position(s) in Department</td>
                            <td className="table-data px-3">Contact</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            staffData.map((staff) => (
                                <tr>
                                    <td className="table-data px-3 py-5">{staff.id}</td>
                                    <td className="table-data px-3">{`${staff.title} ${staff.name}`}</td>
                                    <td className="table-data px-3">
                                        <div>
                                            {staff.positions.map((position) => (
                                                <p>{position}</p>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="table-data px-3">
                                        <button disabled className="btn bg-sky-600 p-3 rounded-lg text-white">Send Email</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
        </div>
     );
}
 
export default Lecturers;