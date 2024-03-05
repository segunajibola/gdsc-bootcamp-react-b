import React, { useState } from "react";

function ControlledForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mt-10">
      <div className="flex flex-col">
        <label htmlFor="firstName" className="text-gray-700">
          First Name:
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          className="border border-gray-400 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="lastName" className="text-gray-700">
          Last Name:
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          className="border border-gray-400 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password" className="text-gray-700">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="border border-gray-400 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
}

export default ControlledForm;
