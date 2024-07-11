import { CiSettings } from "react-icons/ci";

const Settings = () => {
    return ( 
        <div className="my-12 p-10 mx-auto w-4/5 gap-36">
            <p className="settings flex items-center w-fit text-xl">
                Settings
                <CiSettings className="hamburger-icon"/>
            </p>

            <div>
                Toggle Dark Mode
                
            </div>
        </div>
     );
}
 
export default Settings;