import { timeTableData } from '../fakeData'

const TimeTable = () => {
    return ( 
        <div className='dark:text-white'>
            <h1>TimeTable</h1>
            <div>
                <table className="table table-auto">
                    <thead>
                        <tr>
                            <td className="table-data px-1 md:px-3 py-5">Day</td>
                            <td className="table-data px-1 md:px-3">8:30 - 9:30</td>
                            <td className="table-data px-1 md:px-3">9:30 - 10:30</td>
                            <td className="table-data px-1 md:px-3">11:30 - 12:30</td>
                            <td className="table-data px-1 md:px-3">12:30 - 1:30</td>
                            <td className="table-data px-1 md:px-3">1:30 - 2:30</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            timeTableData.map((datum) => (
                                <tr>
                                    <td className='table-data px-1 py-5'>{datum.day}</td>
                                    <td className='table-data px-1'>{datum.periods[0]}</td>
                                    <td className='table-data px-1'>{datum.periods[1]}</td>
                                    <td className='table-data px-1'>{datum.periods[2]}</td>
                                    <td className='table-data px-1'>{datum.periods[3]}</td>
                                    <td className='table-data px-1'>{datum.periods[4]}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
     );
}
 
export default TimeTable;