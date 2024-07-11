import { Link } from "react-router-dom";
import FAQs from "./FAQs";

const Resources = () => {
    return ( 
        <div className="resources text-lg md:text-xl dark:text-white">
            <table className="table-auto">
                <thead className="">
                    <tr className="py-2">
                        <th className="px-7">Resource</th>
                        <th className="px-7">Link</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="py-2">
                        <td className="px-7">
                            Lorem, ipsum.
                        </td>
                        <td className="px-7">
                            <a>
                                Lorem Ipsum
                            </a>
                        </td>
                    </tr>
                    <tr className="py-2">
                        <td className="px-7">
                            Lorem, ipsum.
                        </td>
                        <td className="px-7">
                            <Link>Lorem Ipsum</Link>
                        </td>
                    </tr>
                    <tr className="py-2">
                        <td className="px-7">
                            Lorem, ipsum.
                        </td>
                        <td className="px-7">
                            <Link>Lorem Ipsum</Link>
                        </td>
                    </tr>
                    <tr className="py-2">
                        <td className="px-7">
                            Lorem, ipsum.
                        </td>
                        <td className="px-7">
                            <Link>Lorem Ipsum</Link>
                        </td>
                    </tr>
                </tbody>
                <tfoot>

                </tfoot>
            </table>
        </div>
     );
}
 
export default Resources;