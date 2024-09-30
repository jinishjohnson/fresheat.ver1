import React, { useState } from "react";
import axios from "axios"; // Import Axios
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Example() {
  const url ="http://localhost:5000"

  const [formData, setFormData] = useState({
    name:"",
    email: "",
    phone: "",
    password: ""
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send POST request to the backend API
      const response = await axios.post(`${url}/signup`, formData);

      if (response.status === 201) {
        setSuccessMessage("Registration successful!");
      }
    } catch (error) {
      // Handle errors
      setErrorMessage(error.response?.data?.message || "Registration failed. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Link to="/">
          <img alt="Fresheat.in" src={Logo} className="mx-auto h-16 w-auto" />
        </Link>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-green-500">
          Sign up for a free membership
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
        <div>
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-green-500">
              full name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-green-900 shadow-sm ring-1 ring-inset ring-green-300 placeholder:text-green-400 focus:ring-1 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-green-500">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-green-900 shadow-sm ring-1 ring-inset ring-green-300 placeholder:text-green-400 focus:ring-1 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium leading-6 text-green-500">
              Phone number
            </label>
            <div className="mt-2">
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-green-900 shadow-sm ring-1 ring-inset ring-green-300 placeholder:text-green-400 focus:ring-1 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-green-500">
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-green-900 shadow-sm ring-1 ring-inset ring-green-300 placeholder:text-green-400 focus:ring-1 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-900"
            >
              Sign up
            </button>
          </div>
        </form>

        {/* Success and Error Messages */}
        {successMessage && <p className="mt-4 text-center text-green-500">{successMessage}</p>}
        {errorMessage && <p className="mt-4 text-center text-red-500">{errorMessage}</p>}
      </div>
    </div>
  );
}
