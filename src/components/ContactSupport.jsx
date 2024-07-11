import { useFormik, validateYupSchema } from "formik";
import { useEffect, useState } from "react";
import * as Yup from 'yup';

const ContactSupport = () => {

    const [rangeValue, setRangeValue] = useState(100);
    let nameError;

    const validationSchema = Yup.object({
        fullname: Yup.string().required('Required'),
        level: Yup.number().required('Required'),
        regNo: Yup.number().required('Required'),
        email: Yup.string().email('Invalid Email Format').required('Required'),
        complaint: Yup.string().required('What is your complaint?')
    })

    const formik = useFormik({
        initialValues: {
            fullname: '',
            level: rangeValue,
            regNo: '',
            email: '',
            complaint: ''
        },
        onSubmit: (values) => {
            console.log('Done')
            formik.resetForm();
        },
        validationSchema,
    })

    return ( 
        <div>
            <form action=""
                onSubmit={formik.handleSubmit}    
            >
                <div className="flex flex-col md:flex-row items-start gap-4 md:items-center mb-6 w-auto">
                    <div className="w-24">
                        <label htmlFor="fullname" className="dark:text-white">
                            Full Name:
                        </label>
                    </div>
                    <div>
                        <input 
                            type="text" 
                            className="w-64 md:w-96 dark:text-black" 
                            placeholder="e.g., Dikko Chinedu Oladapo" 
                            name="fullname" 
                            id="fullname"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.fullname}
                        />
                        {
                            formik.touched.fullname && formik.errors.fullname?
                            <div className="text-red-600">
                                {formik.errors.fullname}
                            </div>
                            :
                            null
                        }
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-start gap-4 md:items-center mb-6 w-auto">
                    <div className="w-24">
                            <label htmlFor="level" className="dark:text-white">
                                Level:
                            </label>
                    </div>
                    <div>
                            <input
                                className="w-64 md:w-96" 
                                type="range" 
                                name="level" 
                                id="level" 
                                min={"100"} 
                                max={"500"} 
                                step={"100"} 
                                value={rangeValue}
                                onChange={(e) => {
                                    setRangeValue(e.target.value);
                                    formik.handleChange;
                                }}
                                onBlur={formik.handleBlur}
                            />
                            <p>Value: {rangeValue}</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-start gap-4 md:items-center mb-6 w-auto">
                    <div className="w-24">
                            <label htmlFor="level" className="dark:text-white">
                                Reg. No:
                            </label>
                    </div>
                    <div>
                            <input
                                className="no-spinner w-64 md:w-96" 
                                type="number" 
                                name="regNo" 
                                id="regNo"
                                placeholder="202478"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.regNo}
                            />
                            {
                                formik.touched.regNo && formik.errors.regNo?
                                <div className="text-red-600">
                                    {formik.errors.regNo}
                                </div>
                                :
                                null
                            }
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-start gap-4 md:items-center mb-6 w-full">
                    <div className="w-24">
                        <label htmlFor="Name" className="dark:text-white">
                            Email:
                        </label>
                    </div>
                    <div>
                        <input 
                            type="email" 
                            className="w-64 md:w-96"
                            name="email"
                            id="email"
                            placeholder="e.g., dikkochineduoladapo@gmail.com"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {
                            formik.touched.email && formik.errors.email?
                            <div className="text-red-600">
                                {formik.errors.email}
                            </div>
                            :
                            null
                        }
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-start gap-4 mb-6 w-auto">
                    <div className="w-24">
                        <label htmlFor="complaint" className="dark:text-white">
                            Complaint:
                        </label>
                    </div>
                    <div>
                        <textarea 
                            name="complaint" 
                            id="complaint" 
                            className="w-64 md:w-96 h-40"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.complaint} 
                        />
                        {
                            formik.touched.complaint && formik.errors.complaint?
                            <div className="text-red-600">
                                {formik.errors.complaint}
                            </div>
                            :
                            null
                        }
                    </div>
                </div>
                <div className="flex items-start mb-6">
                    <button 
                        type="submit" 
                        className="bg-sky-400 p-4 see-more-cgpa mt-6 justify-start w-3/5 dark:bg-slate-800"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
     );
}
 
export default ContactSupport;