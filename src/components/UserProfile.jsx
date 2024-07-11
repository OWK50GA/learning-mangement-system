import { useEffect, useState } from "react";

const UserProfile = () => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const getUser = () => {
        fetch(`https://freetestapi.com/api/v1/students/1`)
        .then(res => res.json())
            .then((data) => {
                setUser(data);
                setLoading(false)
                console.log(user)
            })
    }

    useEffect(() => {
        getUser();
    }, [loading])

    return ( 
        <div className="user-profile mt-8 dark:text-white">
            <table className="table table-auto">
                <tr>
                    <td className="table-data px-3 py-4">Full Name</td>
                    {
                        !loading &&
                        <td className="table-data px-3 py-4">{user.name}</td>
                    }
                    {
                        loading &&
                        <td className="table-data px-3 py-4">Not connected</td>
                    }
                </tr>
                <tr>
                    <td className="table-data px-3 py-4">Reg No</td>
                    {
                        !loading &&
                        <td className="table-data px-3 py-4">{`2020${user.id}${user.age}`}</td>
                    }
                    {
                        loading &&
                        <td className="table-data px-3 py-4">Not connected</td>
                    }
                </tr>
                <tr>
                    <td className="table-data px-3 py-4">Gender</td>
                    {
                        !loading &&
                            user.gender === 'Male'?
                                <td className="table-data px-3 py-4">
                                M
                                </td>
                                :
                                <td className="table-data px-3 py-4">
                                    F
                                </td>
                    }
                    {loading &&
                        <td className="table-data px-3 py-4">
                            Not connected
                        </td>
                    }
                </tr>
                <tr>
                    <td className="table-data px-3 py-4">Email</td>
                    {
                        !loading &&
                        <td className="table-data px-3 py-4">{user.email}</td>
                    }
                    {
                        loading &&
                        <td className="table-data px-3 py-4">Not connected</td>
                    }
                </tr>
            </table>
        </div>
     );
}
 
export default UserProfile;