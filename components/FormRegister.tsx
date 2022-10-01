import React, { useState } from "react";
import Link from 'next/link';
import {
    Formik,
    Form,
    Field
} from 'formik';
import * as Yup from 'yup';

//Imagge
import bgImage from '../public/images/banner-register.png';

interface FormRegisteeValues {
    FirstName: string;
    LastName: string;
    Email: string;
    Password: string,
    confirm_password: string,
    Institution: string,
}

export interface MessageView {
    Title: string,
    Message: string
}

const initialValues: FormRegisteeValues = {
    FirstName: '',
    LastName: '',
    Email: '',
    Password: '',
    confirm_password: '',
    Institution: ''
};

const SignupSchema = Yup.object().shape({
    FirstName: Yup.string().required("This is field required!"),
    LastName: Yup.string().required("This is field required!"),
    Email: Yup.string().email("Invalid email format").required("This is field required!"),
    Password: Yup.string().min(8, "Minimum 8 characters").required("This is field required!"),
    confirm_password: Yup.string().oneOf([Yup.ref("Password")], "Password's not match").required("This is field required!")
});

const FormRegister: React.FC<{}> = () => {
    //state
    const [isSuccess, setSuccess] = useState(false);
    const [stateData, setData] = useState<MessageView>()
    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={SignupSchema}
                onSubmit={async (values, { resetForm }) => {
                    const raw = JSON.stringify({
                        Mode: "Register",
                        Product: "ucr",
                        Email: values.Email,
                        FirstName: values.FirstName,
                        LastName: values.LastName,
                        Institution: values.Institution,
                        Role: "",
                        isMedicalEducator: "No",
                        isAdministrator: "No",
                        Password: values.Password,
                        CAPTCHAToken: '',
                        PrivacyPolicyVersion: "1.0",
                        PlatformUseAgreementVersion: "1.0",
                    });

                    await fetch(`https://stage.med2lab.com/api/auth/register/`, {
                        method: "POST",
                        body: raw,
                        headers: {
                            "Content-Type": "application/json",
                        },
                        redirect: 'follow'
                    }).then((response) => {
                        if (response.status === 200) {
                            //reset data
                            resetForm();
                            setSuccess(true);
                        }
                        // parse response data
                        response.json().then(data => {
                            setData(data?.MessageView);
                        })
                    }).catch(err => {
                        console.log(err)
                    });
                }}
            >
                {({ errors, touched }) => (
                    <div className="section" data-anchor="register" style={{ backgroundImage: `url(${bgImage?.src})` }}>
                        <div className="flex items-center justify-center max-w-screen-xl flex-wrap p-8 md:p-0">
                        <div className="md:mb-0 md:w-3/5">
                            <p>Would you like to see how our modules work?</p>
                            <p>Simply fill out the form on the right for FREE access to our demos</p>
                        </div>
                        <div className="w-full md:w-2/5" data-aos="fade-in">
                            <Form className="ml-auto bg-white rounded-lg" id="Form-Register">
                                {isSuccess ? (
                                    <div className="text-center p-9">
                                        <div className="flex justify-center mb-6">
                                            <svg width={`50px`} className="svgCheck" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                                                <circle className="path circle" fill="none" stroke="#73AF55" strokeWidth="6" strokeMiterlimit="10" cx="65.1" cy="65.1" r="62.1" />
                                                <polyline className="path check" fill="none" stroke="#73AF55" strokeWidth="6" strokeLinecap="round" strokeMiterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 " />
                                            </svg>
                                        </div>
                                        <h4 className="text-2xl text-primary">
                                            {stateData?.Title}
                                        </h4>
                                        <div className="text-sm my-4 text-center text-[#5c5c5c]" role="alert">
                                            <div dangerouslySetInnerHTML={{ __html: stateData?.Message ?  stateData?.Message : "" }} />
                                        </div>
                                        <Link href="http://dev-us.med2lab.com/nus/login">
                                            <span className="w-1/2 mx-auto block cursor-pointer rounded-lg mt-4 bg-primary p-3 text-center font-medium text-white transition-colors hover:bg-primary hover:shadow-xl">Go To Log In Page</span>
                                        </Link>
                                    </div>
                                ) : (
                                    <div className='p-4 pt-0'>
                                        <h2 className="text-lg font-medium py-4 block text-secondary border-b border-[#e2e2e2] mb-4 text-center">REGISTER</h2>
                                        <div className="p-4 text-sm bg-[#E2E8F0] mb-6" role="alert">
                                            Fill in the form below to register and try out the demo modules!
                                        </div>
                                        <div className="flex flex-wrap -mx-3 mb-3">
                                            <div className="px-3 mb-6 md:mb-0">
                                                <Field
                                                    type="text"
                                                    id="FirstName"
                                                    name="FirstName"
                                                    placeholder="First Name *"
                                                    className={`appearance-none block w-full border ${errors.FirstName && touched.FirstName ? "text-[#dc3545]" : "border-[#e2e2e2]"}  rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#003D7C]`}
                                                />
                                                {errors.FirstName && touched.FirstName && (
                                                    <div className="text-[#dc3545] mt-2 text-sm font-light">{errors.FirstName}</div>
                                                )}
                                            </div>
                                            <div className="w-full md:w-1/2 px-3">
                                                <Field
                                                    type="text"
                                                    id="LastName"
                                                    name="LastName"
                                                    placeholder="Last Name *"
                                                    className={`appearance-none block w-full border ${errors.LastName && touched.LastName ? "border-[#dc3545]" : "border-[#e2e2e2]"}  rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#003D7C]`}
                                                />
                                                {errors.LastName && touched.LastName && (
                                                    <div className="text-[#dc3545] mt-2 text-sm font-light">{errors.LastName}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap -mx-3 mb-3">
                                            <div className="w-full px-3">
                                                <Field
                                                    type="text"
                                                    id="Email"
                                                    name="Email"
                                                    placeholder="Email *"
                                                    className={`appearance-none block w-full border ${errors.Email && touched.Email ? "border-[#dc3545]" : "border-[#e2e2e2]"}  rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#003D7C]`}
                                                />
                                                {errors.Email && touched.Email && (
                                                    <div className="text-[#dc3545] mt-2 text-sm font-light">{errors.Email}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap -mx-3 mb-3">
                                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                <Field
                                                    type="password"
                                                    id="Password"
                                                    name="Password"
                                                    placeholder="Password *"
                                                    className={`appearance-none block w-full border ${errors.Password && touched.Password ? "border-[#dc3545]" : "border-[#e2e2e2]"}  rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#003D7C]`}
                                                />
                                                {errors.Password && touched.Password && (
                                                    <div className="text-[#dc3545] mt-2 text-sm font-light">{errors.Password}</div>
                                                )}
                                            </div>
                                            <div className="w-full md:w-1/2 px-3">
                                                <Field
                                                    type="password"
                                                    id="confirm_password"
                                                    name="confirm_password"
                                                    placeholder="Confirm Password *"
                                                    className={`appearance-none block w-full border ${errors.confirm_password && touched.confirm_password ? "border-[#dc3545]" : "border-[#e2e2e2]"}  rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#003D7C]`}
                                                />
                                                {errors.confirm_password && touched.confirm_password && (
                                                    <div className="text-[#dc3545] mt-2 text-sm font-light">{errors.confirm_password}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap -mx-3 mb-3">
                                            <div className="w-full px-3">
                                                <Field
                                                    type="text"
                                                    id="Institution"
                                                    name="Institution"
                                                    placeholder="Organization (optional)"
                                                    className={`appearance-none block w-full border border-[#e2e2e2] rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#003D7C]`}
                                                />
                                            </div>
                                        </div>
                                        <div className="md:flex md:items-center">
                                            <button className="w-full h-12 px-6 cursor-pointer rounded-lg bg-primary text-center font-medium text-white transition-colors hover:shadow-xl">REGISTER FOR DEMO</button>
                                        </div>
                                        <p className='mt-3 text-center'>Already have an account? <a className="text-[#003D7C]" href="http://dev-us.med2lab.com/nus/login">Click here</a> to log in</p>
                                    </div>
                                )}
                            </Form>
                        </div>
                        </div>
                    </div>
                )}
            </Formik>
        </>
    );
};

export default FormRegister;