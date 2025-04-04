import React, { useState } from 'react';

const OneTimeDonor = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    ngo: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send data to the backend
    const response = await fetch('/api/donate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Your information has been securely forwarded to the NGO.');
      setFormData({ name: '', email: '', phone: '', ngo: '', message: '' });
    } else {
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4 text-center">One-Time Donor</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Name (Optional)</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="John Doe"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
            placeholder="email@example.com"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="+1234567890"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">NGO</label>
          <input
            type="text"
            name="ngo"
            value={formData.ngo}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="NGO Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Optional message to NGO"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default OneTimeDonor;

// import React, { useState } from "react";
// import axios from "axios";

// const OneTimeDonor = () => {
//   const [name, setName] = useState("");
//   const [foodDetails, setFoodDetails] = useState("");
//   const [contact, setContact] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("/api/donations", {
//         name,
//         foodDetails,
//         contact,
//       });
//       console.log("Donation successful:", response.data);
//     } catch (error) {
//       console.error("Error making donation:", error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-3xl font-bold text-gray-900 mb-8">One-Time Food Donation</h1>
//         <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-md">
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
          
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="foodDetails">
//               Food Donation Details
//             </label>
//             <textarea
//               id="foodDetails"
//               value={foodDetails}
//               onChange={(e) => setFoodDetails(e.target.value)}
//               placeholder="Please describe what food items you want to donate and their quantity"
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">
//               Contact Number
//             </label>
//             <input
//               type="tel"
//               id="contact"
//               value={contact}
//               onChange={(e) => setContact(e.target.value)}
//               placeholder="Enter your 10-digit phone number"
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//           >
//             Submit Donation
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default OneTimeDonor;