import eva_lightleft from '../assets/images/eva_lightbgleft.png';
import eva_lightright from '../assets/images/eva_lightbgright.png';

import { useFormik } from 'formik';
import { useEffect } from 'react';
import * as Yup from 'yup';

const initialValues = {
  name: '',
  email: '',
  phone: '',
  college: '',
};

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  phone: Yup.string()
    .matches(/^[0-9]+$/, 'Invalid phone number')
    .min(10, 'Invalid phone number')
    .required('Required'),
  college: Yup.string().required('Required'),
});

const Registeration = props => {
  const { setBasicRegistrationFormValid } = props;

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log('submit registration');
    },
  });

  const {
    handleChange,
    handleSubmit,
    handleBlur,
    touched,
    errors,
    isValid,
    dirty,
  } = formik;

  useEffect(() => {
    setBasicRegistrationFormValid(isValid && dirty);
  }, [isValid, dirty]);

  return (
    <div className="bg-[#24263B] pt-12">
      <div>
        <img
          className="lg:float-left lg:w-auto lg:h-auto md:float-left md:w-40 md:h-auto float-left w-20 h-auto"
          src={eva_lightleft}
          alt="Registration eva"
        />
        <img
          className="lg:float-right lg:w-auto lg:h-auto md:float-right md:w-40 md:h-auto float-right w-20 h-auto"
          src={eva_lightright}
          alt="Registration eva"
        />
      </div>
      <div className="lg:text-6xl lg:pt-28 md:text-4xl md:pt-16 text-[#22C3FF] pt-12 text-center font-poppins font-bold text-3xl">
        REGISTER
      </div>
      <div className="lg:text-xl lg:pt-2 md:text-md md:pt-2 text-center text-[#ffffff] pt-2  font-poppins font-semibold">
        Basic Details
      </div>

      <form className="lg:w-full md:w-full w-full" onSubmit={handleSubmit}>
        <div className="lg:mx-96 md:mx-48 mx-8">
          <div className="lg:w-full lg:pt-12 md:w-full md:items-center md-center md:pt-8 items-center pt-10 place-content-center">
            <div className="pb-2">
              <label
                className="lg:text-2xl md:text-2xl text-sm text-white font-poppins font-semibold mb-1 pr-4"
                for="name"
              >
                Name :
              </label>
            </div>
            <div className="">
              <input
                className="w-full bg-[#23354E] appearance-none border-2 border-[#23354E] rounded text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-[#22C3FF]-500"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.name && errors.name ? (
                <div className="text-red-500 text-sm mt-2">{errors.name}</div>
              ) : null}
            </div>
          </div>

          <div className="lg:w-full lg:pt-8 md:w-full md:items-center md-center md:pt-6 items-center pt-6 place-content-center">
            <div className="pb-2">
              <label
                className="lg:text-2xl md:text-2xl text-sm text-white font-poppins font-semibold mb-1 pr-4"
                for="email"
              >
                Email :
              </label>
            </div>
            <div className="">
              <input
                className="w-full bg-[#23354E] appearance-none border-2 border-[#23354E] rounded text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-[#22C3FF]-500 h-10 p-2"
                id="email"
                name="email"
                type="mail"
                placeholder="Enter your email"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && errors.email ? (
                <div className="text-red-500 text-sm mt-2">{errors.email}</div>
              ) : null}
            </div>
          </div>

          <div className="lg:w-full lg:pt-8 md:w-full md:items-center md-center md:pt-6 items-center pt-6 place-content-center">
            <div className="pb-2">
              <label
                className="lg:text-2xl md:text-2xl text-sm text-white font-poppins font-semibold mb-1 pr-4"
                for="phone"
              >
                Phone :
              </label>
            </div>
            <div className="">
              <input
                className="w-full bg-[#23354E] appearance-none border-2 border-[#23354E] rounded text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-[#22C3FF]-500"
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.phone && errors.phone ? (
                <div className="text-red-500 text-sm mt-2">{errors.phone}</div>
              ) : null}
            </div>
          </div>

          <div className="lg:w-full lg:pt-8 lg:pb-12 md:w-full md:items-center md-center md:pt-6 items-center pt-6 pb-8 place-content-center">
            <div className="pb-2">
              <label
                className="lg:text-2xl md:text-2xl text-sm text-white font-poppins font-semibold mb-1 pr-4"
                for="collge"
              >
                College :
              </label>
            </div>
            <div className="">
              <input
                className="w-full bg-[#23354E] appearance-none border-2 border-[#23354E] rounded text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-[#22C3FF]-500"
                id="college"
                name="college"
                type="text"
                placeholder="Enter your college name"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.college && errors.college ? (
                <div className="text-red-500 text-sm mt-2">
                  {errors.college}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Registeration;
