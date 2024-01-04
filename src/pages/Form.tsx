import React, { useState } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  occupation: string;
  interest: string;
  permanentAddress: string;
  currentAddress: string;
}

const MyForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    occupation: '',
    interest: '',
    permanentAddress: '',
    currentAddress: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Reset the form
    setFormData({
      firstName: '',
      lastName: '',
      mobile: '',
      email: '',
      occupation: '',
      interest: '',
      permanentAddress: '',
      currentAddress: '',
    });
  };

  return (
    <>
      <title>Form</title>
      <div className="flex items-center min-h-screen">
        <form onSubmit={handleSubmit} className=" space-y-4 space-x-5 bg-red-100 shadow-md rounded mb-auto w-full md:w-full lg:w-full xl:w-full 2xl:w-full sm:w-full">
          <p className="font-extrabold text-3xl justify-center items-center">DETAILS FORM</p>
          <br />
          <div className="flex mb-4 gap-2">
            <label htmlFor="firstName" className=" text-gray-700 text-sm font-bold mb-2">
              First Name:
            </label>
            <input
              placeholder="Eg: John"
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded py-2 md:h-full sm:w-70 md:w-70 lg:w-40 xl:w-60 2xl:w-80 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex mb-4 gap-2">
            <label htmlFor="lastName" className="text-gray-700 text-sm font-bold mb-2">
              Last Name:
            </label>
            <input
              placeholder="Eg: Doe"
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded py-2 md:h-full sm:w-70 md:w-70 lg:w-40 xl:w-60 2xl:w-80 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex mb-4 gap-2">
            <label htmlFor="mobile" className=" text-gray-700 text-sm font-bold mb-2">
              Mobile:
            </label>
            <input
              placeholder="Eg: 1234567890"
              type="text"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded py-2 md:h-full sm:w-70 md:w-70 lg:w-40 xl:w-60 2xl:w-80 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex mb-4 gap-2">
            <label htmlFor="email" className=" text-gray-700 text-sm font-bold mb-2">
              Email:
            </label>
            <input
              placeholder="Eg: john@example.com"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded py-2 md:h-full sm:w-70 md:w-70 lg:w-40 xl:w-60 2xl:w-80 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex mb-4 gap-2">
            <label htmlFor="occupation" className=" text-gray-700 text-sm font-bold mb-2">
              Occupation:
            </label>
            <input
              placeholder="Eg: Software Developer"
              type="text"
              id="occupation"
              name="occupation"
              value={formData.occupation}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded py-2 md:h-full sm:w-70 md:w-70 lg:w-40 xl:w-60 2xl:w-80 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex mb-4 gap-2">
            <label htmlFor="interest" className=" text-gray-700 text-sm font-bold mb-2">
              Interest:
            </label>
            <input
              placeholder="Eg: Music, Sports"
              type="text"
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded py-2 md:h-full sm:w-70 md:w-70 lg:w-40 xl:w-60 2xl:w-80 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex mb-4 gap-2">
            <label htmlFor="permanentAddress" className=" text-gray-700 text-sm font-bold mb-2">
              Permanent Address:
            </label>
            <input
              placeholder="Eg: 123 Main St, City, Country"
              type="text"
              id="permanentAddress"
              name="permanentAddress"
              value={formData.permanentAddress}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded py-2 md:h-full sm:w-70 md:w-70 lg:w-40 xl:w-60 2xl:w-80 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex mb-4 gap-2">
            <label htmlFor="currentAddress" className=" text-gray-700 text-sm font-bold mb-2">
              Current Address:
            </label>
            <input
              placeholder="Eg: 456 Street Ave, City, Country"
              type="text"
              id="currentAddress"
              name="currentAddress"
              value={formData.currentAddress}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded py-2 md:h-full sm:w-70 md:w-70 lg:w-40 xl:w-60 2xl:w-80 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default MyForm;
