import { FieldArray, FormikProvider, useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import eva_lightleft from '../assets/images/eva_lightbgleft.png';
import eva_lightright from '../assets/images/eva_lightbgright.png';

const initialValues = {
  teamName: '',
  theme: '',
  teamMembers: [''],
};

const validationSchema = Yup.object({
  teamName: Yup.string().required('Required'),
  theme: Yup.string().required('Required'),
  teamMembers: Yup.array()
    .of(Yup.string().required('Team member name is required'))
    .min(1, 'At least one team member is required'),
});

const Registration2 = props => {
  const { setTeamDetailsRegistrationFormValid } = props;
  const [numInputs, setNumInputs] = useState(1);
  const handleAddInput = () => {
    setNumInputs(numInputs + 1);
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log('submit registration');
    },
  });

  const {
    values,
    handleChange,
    handleSubmit,
    handleBlur,
    touched,
    errors,
    isValid,
    dirty,
    setFieldValue,
  } = formik;

  useEffect(() => {
    setTeamDetailsRegistrationFormValid(isValid && dirty);
  }, [isValid, dirty]);

  const AddButtonDisplay = () => {
    const max = 4;
    if (numInputs < max) {
      return (
        <div className="pt-2 text-white">
          <button
            className="float-right text-lg hover:text-[#22C3FF]"
            type="button"
            onClick={handleAddInput}
          >
            Add +
          </button>
        </div>
      );
    } else {
      return (
        <div className="pt-2 text-red-600">
          <div className="float-right text-lg">Maximum 4</div>
        </div>
      );
    }
  };

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
        Team Details
      </div>
      <FormikProvider value={formik}>
        <form className="lg:w-full md:w-full w-full" onSubmit={handleSubmit}>
          <div className="lg:mx-96 md:mx-48 mx-8">
            <div className="lg:w-full lg:pt-12 md:w-full md:items-center md-center md:pt-8 items-center pt-10 place-content-center">
              <div className="pb-2">
                <label
                  className="lg:text-2xl md:text-2xl text-sm text-white font-poppins font-semibold mb-1 pr-4"
                  for="teamName"
                >
                  Team Name :
                </label>
              </div>
              <div className="">
                <input
                  className="w-full bg-[#23354E] appearance-none border-2 border-[#23354E] rounded text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-[#22C3FF]-500"
                  id="teamName"
                  name="teamName"
                  type="text"
                  placeholder="Enter Your Team Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.teamName && errors.teamName ? (
                  <div className="text-red-500 text-sm mt-2">
                    {errors.teamName}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="lg:w-full lg:pt-8 md:w-full md:items-center md-center md:pt-6 items-center pt-6 place-content-center">
              <div className="">
                <label
                  className="lg:text-2xl md:text-2xl text-sm text-white font-poppins font-semibold mb-1 pr-4"
                  for="inline-email"
                >
                  Team Members :
                </label>
              </div>

              <FieldArray
                name="teamMembers"
                render={arrayHelpers => {
                  return (
                    <>
                      {values?.teamMembers?.map((member, index) => (
                        <div className="pt-2">
                          <input
                            className="w-full bg-[#23354E] appearance-none border-2 border-[#23354E] rounded text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-[#22C3FF]-500 h-10 p-2"
                            key={index}
                            type="text"
                            name={`teamMembers[${index}]`}
                            placeholder={`Team Member Name ${index + 1}`}
                            value={values?.teamMembers[index]}
                            onChange={async e =>
                              setFieldValue(
                                `teamMembers[${index}]`,
                                e?.target?.value
                              )
                            }
                            onBlur={handleBlur}
                          />

                          {}

                          {touched?.teamMembers?.[index] &&
                          errors?.teamMembers?.[index] ? (
                            <div className="text-red-500 text-sm mt-2">
                              {errors?.teamMembers[index]}{' '}
                            </div>
                          ) : null}
                        </div>
                      ))}

                      <div className="flex justify-end gap-8">
                        {values?.teamMembers?.length >= 2 ? (
                          <div className="pt-2 text-red-500">
                            <button
                              className="float-right text-lg hover:text-[#22C3FF]"
                              type="button"
                              onClick={() => arrayHelpers.pop()}
                            >
                              Remove -
                            </button>
                          </div>
                        ) : null}

                        {values?.teamMembers?.length < 4 ? (
                          <div className="pt-2 text-white">
                            <button
                              className="float-right text-lg hover:text-[#22C3FF]"
                              type="button"
                              onClick={() => arrayHelpers.push('')}
                            >
                              Add +
                            </button>
                          </div>
                        ) : (
                          <div className="pt-2 text-red-600">
                            <div className="float-right text-lg">Maximum 4</div>
                          </div>
                        )}
                      </div>
                    </>
                  );
                }}
              />
            </div>

            <div className="lg:w-full lg:pt-8 lg:pb-12 md:w-full md:items-center md-center md:pt-6 items-center pt-6 pb-8 place-content-center">
              <div className="pb-2">
                <label
                  className="lg:text-2xl md:text-2xl text-sm text-white font-poppins font-semibold mb-1 pr-4"
                  for="theme"
                >
                  Theme :
                </label>
              </div>
              <div className="">
                <input
                  className="w-full bg-[#23354E] appearance-none border-2 border-[#23354E] rounded text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-[#22C3FF]-500"
                  id="theme"
                  name="theme"
                  type="text"
                  placeholder="Select Theme"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.theme && errors.theme ? (
                  <div className="text-red-500 text-sm mt-2">
                    {errors.theme}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </form>
      </FormikProvider>
    </div>
  );
};

export default Registration2;
