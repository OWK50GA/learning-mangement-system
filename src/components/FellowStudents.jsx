import { useEffect, useRef, useState } from "react"
import { BiSearch } from "react-icons/bi"
import StudentList from "./StudentList"

const FellowStudents = () => {

    const [loading, setLoading] = useState(true)
    const [students, setStudents] = useState(null)
    const [displayedStudents, setDisplayedStudents] = useState(null)
    const getStudents = () => {
        fetch(`https://freetestapi.com/api/v1/students`)
            .then(res => res.json())
                .then((data) => {
                    setStudents(data)
                    setLoading(false)
                    setDisplayedStudents(data)
                    // console.log(students)
                })
    }


    const [searchTerm, setSearchTerm] = useState('');
    const searchRef = useRef('');

    useEffect(() => {
        getStudents();
    }, [loading])

    // if (!loading) {
    //     const newStudents = students.filter(student => student.name.includes('John'))
    //     console.log(newStudents)
    // }

    return (
        <div className="fellow-students overflow-y-scroll">
            <div className="w-4/5 m-auto">
                <p>Search for a student</p>
                <div>
                    <input 
                        type="text" 
                        placeholder="Search by name"
                        className="mr-1 md:mr-4 w-4/5 h-7 md:w-64 md:h-10"
                        ref={searchRef}
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value)
                            const currentValue = searchRef.current.value;
                            const newStudents = students.filter(student => student.name.toLowerCase().includes(currentValue.toLowerCase()))
                            // console.log(newStudents)
                            setDisplayedStudents(newStudents)
                            // console.log(students)
                        }}
                    />
                    {/* <button 
                        className="search-btn bg-sky-600 p-1 md:p-3 rounded-lg text-white"
                        type="submit"
                        onClick={() => {
                            
                        }}
                    >
                        Search
                    </button> */}
                </div>
            </div>
            <StudentList displayedStudents={displayedStudents} loading={loading}/>
        </div>
    );
}
 
export default FellowStudents;