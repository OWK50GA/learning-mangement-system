const TimeLine = () => {
    return ( 
        <div className="dark:text-white">
            <div className="calendar-title">
                <h2 className="element text-2xl mb-7">Calendar</h2>
            </div>
            <table className="table table-auto">
                <thead className="table-head">
                    <th className="table-data">S/N</th>
                    <th className="table-data px-1">Date</th>
                    <th className="table-data px-1">Activity</th>
                    <th className="table-data px-1">Venue</th>
                    <th className="table-data px-1">Status</th>
                </thead>
                <tr>
                    <td className="table-data py-5">1</td>
                    <td className="table-data px-1">Orientation for 1st Year students</td>
                    <td className="table-data px-1">15th Vingtember, 2198</td>
                    <td className="table-data px-1">Lorem.</td>
                    <td className="table-data px-1">Lorem.</td>
                </tr>
                <tr>
                    <td className="table-data py-5">2</td>
                    <td className="table-data px-1">Lorem ipsum dolor, sit amet consectetur adipisicing.</td>
                    <td className="table-data px-1">Lorem, ipsum dolor.</td>
                    <td className="table-data px-1">Lorem, ipsum dolor.</td>
                    <td className="table-data px-1">Lorem, ipsum dolor.</td>
                </tr>
                <tr>
                    <td className="table-data py-5">2</td>
                    <td className="table-data px-1">Lorem ipsum dolor, sit amet consectetur adipisicing.</td>
                    <td className="table-data px-1">Lorem, ipsum dolor.</td>
                    <td className="table-data px-1">Lorem, ipsum dolor.</td>
                    <td className="table-data px-1">Lorem, ipsum dolor.</td>
                </tr>
                <tr>
                    <td className="table-data py-5">2</td>
                    <td className="table-data px-1">Lorem ipsum dolor, sit amet consectetur adipisicing.</td>
                    <td className="table-data px-1">Lorem, ipsum dolor.</td>
                    <td className="table-data px-1">Lorem, ipsum dolor.</td>
                    <td className="table-data px-1">Lorem, ipsum dolor.</td>
                </tr>
            </table>
        </div>
     );
}
 
export default TimeLine;