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
                        Product: "Kachi",
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
                    <div className="section relative bg-cover bg-center h-full" data-anchor="register" style={{ backgroundImage: `url(${bgImage?.src})` }}>
                        <div className="container p-8 mx-auto">
                            <div className="relative md:absolute mb-8 md:mb-0 md:w-5/12 top-0 left-0 right-0 bg-[#57d2da] p-8 h-full w-full flex items-center justify-center flex-col opacity-90">
                                <div data-aos="fade-in">
                                    <p className="text-4xl text-white mb-6">Would you like to see how our modules work?</p>
                                    <p className="text-3xl text-white">Simply fill out the form on the right for FREE access to our demos</p>
                                </div>
                            </div>
                            <div className="flex items-center flex-wrap">
                                <div className="w-full md:w-5/12 mr-auto"></div>
                                <div className="w-full md:w-5/12 ml-auto shadow-md" data-aos="fade-in">
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
                                                <Link href="http://dev-us.med2lab.com/kachi/login">
                                                    <span className="w-1/2 mx-auto block cursor-pointer rounded-lg mt-4 bg-primary p-3 text-center font-medium text-white transition-colors hover:bg-primary hover:shadow-xl">Go To Log In Page</span>
                                                </Link>
                                            </div>
                                        ) : (
                                            <div className='p-4 pt-0'>
                                                <h2 className="text-lg font-medium py-4 block text-primary border-b border-[#e2e2e2] mb-4 text-center">REGISTER</h2>
                                                <div className="flex flex-wrap mb-3">
                                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
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
                                                <div className="flex flex-wrap mb-3">
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
                                                <div className="flex flex-wrap mb-3">
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
                                                <div className="flex flex-wrap mb-3">
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
                        <div className="arrow-scroll">
                            <a href="#contact">
                                <span className="text mb-2 block text-xs">More</span>
                                <span className="arrow-scroll__item" />
                                <span className="arrow-scroll__item" />
                            </a>
                        </div>
                    </div>
                )}
            </Formik>
        </>
    );
};

export default FormRegister;