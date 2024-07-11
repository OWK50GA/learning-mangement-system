const StudentList = (props) => {

    const loading = props.loading
    const displayedStudents = props.displayedStudents
    return ( 
        <div className="dark:text-white">
            <table>
                    <thead>
                        <tr>
                            <td className="table-data px-3 py-5">S/N</td>
                            <td className="table-data px-3">Name</td>
                            <td className="table-data px-3 py-5">Gender</td>
                            <td className="table-data px-3">Contact</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            loading &&
                            <div>Please wait. Connecting</div>
                        }
                        {
                            !loading &&
                            displayedStudents.map((student, index) => (
                                <tr key={student.id}>
                                    <td className="table-data px-3 py-5">{index + 1}</td>
                                    <td className="table-data px-3 py-5">{student.name}</td>
                                    <td className="table-data px-3 py-5">{student.gender}</td>
                                    <td className="table-data px-3">
                                        <button disabled className="btn bg-sky-600 p-1 md:p-4 rounded-lg text-white">
                                            <a href={`mailto:${student.email}? &body=Hello, ${student.name}...`}>Send Email</a>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
            </table>
        </div>
     );
}
 
export default StudentList;