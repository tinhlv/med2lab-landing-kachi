import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

//ReCAPTCHA
// import ReCAPTCHA from "react-google-recaptcha";

interface MyFormValues {
	Name: string;
	Email: string;
	Content: string;
}

const initialValues: MyFormValues = {
	Name: '',
	Email: '',
	Content: ''
};

const SignupSchema = Yup.object().shape({
	Name: Yup.string().required('This is field required!'),
	Email: Yup.string().email('Invalid email format').required('This is field required!'),
	Content: Yup.string().required('This is field required!')
});

const ContactForm: React.FC<{}> = () => {
	// const recaptchaRef = useRef<ReCAPTCHA>(null);

	//state
	// const [validCaptcha, setValidCaptcha] = useState(false);
	const [ recaptchaValue, setRecaptchaValue ] = useState('');
	const [ isSuccess, setSuccess ] = useState(false);
	const [ isLoading, setLoading ] = useState(false);

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
							<svg
								width={`50px`}
								className="svgCheck"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 130.2 130.2"
							>
								<circle
									className="path circle"
									fill="none"
									stroke="#73AF55"
									strokeWidth="6"
									strokeMiterlimit="10"
									cx="65.1"
									cy="65.1"
									r="62.1"
								/>
								<polyline
									className="path check"
									fill="none"
									stroke="#73AF55"
									strokeWidth="6"
									strokeLinecap="round"
									strokeMiterlimit="10"
									points="100.2,40.2 51.5,88.8 29.8,67.5 "
								/>
							</svg>
						</div>
						<div className="p-4 text-xl mb-6 text-center text-[#5c5c5c]" role="alert">
							Please leave us a message by submitting the form below.<br />
							We will get in touch within 24 hours!
						</div>
						<button
							className="w-1/3 h-12 px-6 cursor-pointer rounded-lg bg-primary text-center font-medium text-white transition-colors hover:shadow-xl"
							onClick={() => {
								setSuccess(false);
							}}
						>
							OK
						</button>
					</div>
				) : (
					<React.Fragment>
						<div className="w-full">
							<h2
								className="text-4xl font-medium py-5 block text-primary mb-4 text-center"
								data-aos="fade-up"
								data-aos-anchor-placement="bottom-center"
							>
								Let's Get In Touch
							</h2>
							<div
								className="p-4 text-xl mb-6 text-center text-[#5c5c5c]"
								role="alert"
								data-aos="fade-up"
								data-aos-anchor-placement="bottom-center"
								data-aos-delay="300"
							>
								Please leave us a message by submitting the form below.<br />
								We will get in touch within 24 hours!
							</div>
						</div>
						<Formik
							initialValues={initialValues}
							validationSchema={SignupSchema}
							onSubmit={async (values, { resetForm }) => {
								//params
								const params = JSON.stringify(values, null, 2);
								const objParams = JSON.parse(params);
								const newParams = { ...objParams as String, Product: 'Kachi' };
								setLoading(true);

								const response = await fetch(`https://stage.med2lab.com/api/auth/contact/`, {
									method: 'POST',
									body: JSON.stringify(newParams),
									headers: {
										'Content-Type': 'application/json'
									}
								});
								if (response.status === 200) {
									// If the response is ok than show the success alert
									//reset data
									setRecaptchaValue('');
									resetForm();
									setSuccess(true);
									setLoading(false);
								} else {
									// Else throw an error with the message returned
									// from the API
									const error = await response.json();
									console.log(error);
									setLoading(false);
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
												className={`appearance-none block w-full border ${errors.Name &&
												touched.Name
													? 'border-[#dc3545]'
													: 'border-[#e2e2e2]'}  rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#003D7C]`}
											/>
											{errors.Name &&
											touched.Name && (
												<div className="text-[#dc3545] mt-2 text-sm font-light">
													{errors.Name}
												</div>
											)}
										</div>
										<div className="w-full md:w-1/2 px-3">
											<Field
												type="email"
												id="Email"
												name="Email"
												placeholder="Email address *"
												className={`appearance-none block w-full border ${errors.Email &&
												touched.Email
													? 'border-[#dc3545]'
													: 'border-[#e2e2e2]'} rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#003D7C]`}
											/>
											{errors.Email &&
											touched.Email && (
												<div className="text-[#dc3545] mt-2 text-sm font-light">
													{errors.Email}
												</div>
											)}
										</div>
									</div>
									<div className="flex flex-wrap -mx-3 mb-6">
										<div className="w-full px-3">
											<Field
												type="text"
												id="Content"
												name="Content"
												placeholder="Enter your Message *"
												component="textarea"
												rows="4"
												className={`appearance-none block w-full border ${errors.Content &&
												touched.Content
													? 'border-[#dc3545]'
													: 'border-[#e2e2e2]'} rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#003D7C]`}
											/>
											{errors.Content &&
											touched.Content && (
												<div className="text-[#dc3545] mt-2 text-sm font-light">
													{errors.Content}
												</div>
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
									<button
										type="submit"
										className="w-full mx-auto flex items-center justify-center h-12 px-6 cursor-pointer rounded-lg bg-primary text-center font-medium text-white transition-colors hover:shadow-xl"
									>
										{isLoading && (
											<svg
												role="status"
												className="inline mr-3 w-4 h-4 text-white animate-spin"
												viewBox="0 0 100 101"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
													fill="#E5E7EB"
												/>
												<path
													d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
													fill="currentColor"
												/>
											</svg>
										)}
										Submit Inquiry
									</button>
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
