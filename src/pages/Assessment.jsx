import { assessmentData } from "../fakeData";

const Assessment = () => {
    return ( 
        <div className="assessment flex flex-col w-4/5 m-auto mt-12">
            <p className="text-3xl text-sky-950 text-center mt-16 dark:text-white">No Assessments Yet!</p> 
            {/* {
                assessmentData?
                    <p className="text-3xl text-sky-950 text-center mt-16">No Assessments Yet!</p> : null
            } */}
        </div>
     );
}
 
export default Assessment;