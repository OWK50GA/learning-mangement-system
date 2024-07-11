import { Link } from "react-router-dom";

const LoggedOut = () => {
    return ( 
        <div className="flex flex-col items-center justify-center w-4/5 m-auto">
            <p className="text-3xl">
                You are now logged out.
            </p>
            <button className="bg-sky-400 p-4 see-more-cgpa mt-6 mx-auto dark:bg-slate-800 font-bold">
                <Link>Log In?</Link>
            </button>
        </div>
     );
}
 
export default LoggedOut;