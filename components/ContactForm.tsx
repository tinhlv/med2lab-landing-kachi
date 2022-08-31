import React, { useState } from "react";
import {
  Formik,
  Form,
  Field
} from 'formik';
import * as Yup from 'yup';

//ReCAPTCHA
// import ReCAPTCHA from "react-google-recaptcha";

interface MyFormValues {
  Name: string;
  Email: string;
  Message: string;
}

const initialValues: MyFormValues = {
  Name: '',
  Email: '',
  Message: ''
};

const SignupSchema = Yup.object().shape({
  Name: Yup.string().required("This is field required!"),
  Email: Yup.string().email("Invalid email format").required("This is field required!"),
  Message: Yup.string().required("This is field required!"),
});

const ContactForm: React.FC<{}> = () => {
  // const recaptchaRef = useRef<ReCAPTCHA>(null);

  //state
  // const [validCaptcha, setValidCaptcha] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState("");
  const [isSuccess, setSuccess] = useState(false);
  const [isLoading, setLoading] = useState(false);

  // const onReCAPTCHAChange = async (captchaCode: any) => {
  //   // If the reCAPTCHA code is null or undefined indicating that
  //   // the reCAPTCHA was expired then return early
  //   if (!captchaCode) {
  //     return;
  //   }
  //   try {
  //     setRecaptchaValue(captchaCode);
  //     setValidCaptcha(false);
  //   } catch (error) {
  //     alert("Something went wrong");
  //   } finally {
  //     // recaptchaRef.current.reset();
  //   }
  // }

  return (
    <div className="section" data-anchor="contact">
      <div className="p-4 max-w-xl mx-auto">
        {isSuccess ? (
          <div className="w-full text-center">
            <div className="flex justify-center mb-4">
              <svg width={`50px`} className="svgCheck" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                <circle className="path circle" fill="none" stroke="#73AF55" strokeWidth="6" strokeMiterlimit="10" cx="65.1" cy="65.1" r="62.1" />
                <polyline className="path check" fill="none" stroke="#73AF55" strokeWidth="6" strokeLinecap="round" strokeMiterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 " />
              </svg>
            </div>
            <div className="p-4 text-xl mb-6 text-center text-[#5c5c5c]" role="alert">
              Please leave us a message by submitting the form below.<br />
              We will get in touch within 24 hours!
            </div>
            <button className="w-1/3 h-12 px-6 cursor-pointer rounded-lg bg-primary text-center font-medium text-white transition-colors hover:shadow-xl" onClick={() => { setSuccess(false) }}>
              OK
            </button>
          </div>
        ) : (
          <React.Fragment>
            <div className="w-full">
              <h2 className="text-4xl font-medium py-5 block text-primary mb-4 text-center" data-aos="fade-up" data-aos-anchor-placement="bottom-center">Let's Get In Touch</h2>
              <div className="p-4 text-xl mb-6 text-center text-[#5c5c5c]" role="alert" data-aos="fade-up" data-aos-anchor-placement="bottom-center" data-aos-delay="300">
                Please leave us a message by submitting the form below.<br />
                We will get in touch within 24 hours!
              </div>
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={SignupSchema}
              onSubmit={async (values, { resetForm }) => {
                //params
                const formData = new FormData();
                formData.append("Name", values.Name);
                formData.append("Email", values.Email);
                formData.append("Message", values.Message);

                const response = await fetch(`https://stage.med2lab.com/api/auth/contact/`, {
                  method: "POST",
                  body: formData,
                  headers: {
                    "Content-Type": "application/json",
                  },
                });
                if (response.status === 200) {
                  // If the response is ok than show the success alert
                  //reset data
                  setRecaptchaValue("");
                  resetForm();
                  setSuccess(true);
                  setLoading(false);
                } else {
                  // Else throw an error with the message returned
                  // from the API
                  const error = await response.json();
                  console.log(error);
                }
              }}
            >
              {({ errors, touched }) => (
                <Form data-aos="fade-up" data-aos-anchor-placement="bottom-center" data-aos-delay="500">
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <Field
                        type="text"
                        id="Name"
                        name="Name"
                        placeholder="Name *"
                        className={`appearance-none block w-full border ${errors.Name && touched.Name ? "border-[#dc3545]" : "border-[#e2e2e2]"}  rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#003D7C]`}
                      />
                      {errors.Name && touched.Name && (
                        <div className="text-[#dc3545] mt-2 text-sm font-light">{errors.Name}</div>
                      )}
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <Field
                        type="email"
                        id="Email"
                        name="Email"
                        placeholder="Email address *"
                        className={`appearance-none block w-full border ${errors.Email && touched.Email ? "border-[#dc3545]" : "border-[#e2e2e2]"} rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#003D7C]`}
                      />
                      {errors.Email && touched.Email && (
                        <div className="text-[#dc3545] mt-2 text-sm font-light">{errors.Email}</div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                      <Field
                        type="text"
                        id="Message"
                        name="Message"
                        placeholder="Enter your Message *"
                        component="textarea"
                        rows="4"
                        className={`appearance-none block w-full border ${errors.Message && touched.Message ? "border-[#dc3545]" : "border-[#e2e2e2]"} rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#003D7C]`}
                      />
                      {errors.Message && touched.Message && (
                        <div className="text-[#dc3545] mt-2 text-sm font-light">{errors.Message}</div>
                      )}
                    </div>
                  </div>
                  {/* <div className="w-full flex flex-wrap justify-center -mx-3 mb-6">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={`6LesE3AbAAAAAMol_86G85cUhbHO01QOfw6QDsl5`}
                      render="explicit"
                      onChange={onReCAPTCHAChange}
                      asyncScriptOnLoad={() => { }}
                      className="mockclass"
                    />
                    {validCaptcha && (
                      <div className="text-[#dc3545] mt-2 text-sm font-light">This is field required!</div>
                    )}
                  </div> */}
                  <div className="md:flex md:items-center w-80 mx-auto">
                    {isLoading && (
                      <span className="spinner-border spinner-border-sm mr-2"></span>
                    )}
                    <button type="submit" className="w-full h-12 px-6 cursor-pointer rounded-lg bg-primary text-center font-medium text-white transition-colors hover:shadow-xl">Submit Inquiry</button>
                  </div>
                </Form>
              )}
            </Formik>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default ContactForm;