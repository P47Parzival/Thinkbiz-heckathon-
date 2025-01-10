# Janab Donations

At Inventory Manager, our mission is to ensure that no food goes to waste and that every meal reaches those in need. We work tirelessly to connect surplus food with communities facing food insecurity, providing immediate relief and long-term support.

Through our various programs and initiatives, we aim to create a sustainable food system where everyone has access to nutritious meals. Join us in our mission to make a difference, one meal at a time.

<footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold mb-2">Janabs</h3>
              <p className="text-sm">© 2025 Janabs Donation. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-sm hover:text-gray-400">Documentation</a>
              <a href="#" className="text-sm hover:text-gray-400">Help Center</a>
              <a href="#" className="text-sm hover:text-gray-400">Privacy Policy</a>
              <a href="#" className="text-sm hover:text-gray-400">Terms of Service</a>
            </div>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <div className="flex space-x-4">
              <a href="#" className="text-sm hover:text-gray-400">Facebook</a>
              <a href="#" className="text-sm hover:text-gray-400">Twitter</a>
              <a href="#" className="text-sm hover:text-gray-400">Instagram</a>
              <a href="#" className="text-sm hover:text-gray-400">LinkedIn</a>
            </div>
            <div>
              <p className="text-sm">Contact us: donations@janabs.com</p>
            </div>
          </div>
        </div>
      </footer>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Current Campaigns</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Emergency Relief: East Africa",
                  description: "Provide immediate food assistance to families affected by severe drought.",
                  goal: "$500,000",
                  raised: "$50,000"
                },
                {
                  title: "School Meals Program",
                  description: "Help us provide nutritious meals to children in underprivileged schools.",
                  goal: "$300,000",
                  raised: "$275,000"
                },
                {
                  title: "Local Food Banks Support",
                  description: "Support local food banks in distributing meals to families in need.",
                  goal: "$200,000",
                  raised: "$50,000"
                }
              ].map((campaign) => (
                <Card key={campaign.title} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{campaign.title}</h3>
                    <p className="text-gray-600 mb-4">{campaign.description}</p>
                    <div className="space-y-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full" 
                          style={{ width: `${(parseInt(campaign.raised.replace(/\D/g, '')) / parseInt(campaign.goal.replace(/\D/g, ''))) * 100}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Raised: {campaign.raised}</span>
                        <span className="text-gray-600">Goal: {campaign.goal}</span>
                      </div>
                    </div>
                    <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors flex items-center justify-center">
                      Donate Now <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-4">
            At Inventory Manager, our mission is to ensure that no food goes to waste and that every meal reaches those in need. We work tirelessly to connect surplus food with communities facing food insecurity, providing immediate relief and long-term support.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Through our various programs and initiatives, we aim to create a sustainable food system where everyone has access to nutritious meals. Join us in our mission to make a difference, one meal at a time.
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Harsh Reality</h2>
          <p>In a world where millions of people grapple with the harsh reality of food insecurity, the role of world hunger charities becomes more vital than ever.

Imagine a world where your understanding and actions contribute to a brighter future, where the daunting figure of millions facing hunger is drastically reduced.

This article not only sheds light on the dire situation of global hunger but also unveils some powerful solutions at hand. <br/><br/>

As you journey through these insights, you’ll discover:<br/><br/>

• How world hunger charities are making impactful strides.<br/>
• How your informed actions can be part of this transformative wave.<br/><br/>

<h2 className="text-3xl font-bold text-gray-900 mb-8">World hunger Statistics</h2>
Hunger is a global challenge that impacts millions, and the scale of the problem can seem so overwhelming we are tempted to believe there are no solutions.

But when we commit to act compassionately and collectively, we can bring about change.

Let’s examine the scale of the problem first.

Here are some statistics reported by Action Against Hunger, the Global Hunger Index, Our World in Data, and World Vision:</p>
        </div>
      </section>

import React, { useState } from "react";
import axios from "axios";

const OneTimeDonor = () => {
  const [name, setName] = useState("");
  const [foodDetails, setFoodDetails] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/donations", {
        name,
        foodDetails,
        contact,
      });
      console.log("Donation successful:", response.data);
    } catch (error) {
      console.error("Error making donation:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">One-Time Food Donation</h1>
        <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="foodDetails">
              Food Donation Details
            </label>
            <textarea
              id="foodDetails"
              value={foodDetails}
              onChange={(e) => setFoodDetails(e.target.value)}
              placeholder="Please describe what food items you want to donate and their quantity"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">
              Contact Number
            </label>
            <input
              type="tel"
              id="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Enter your 10-digit phone number"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit Donation
          </button>
        </form>
      </div>
    </div>
  );
};

export default OneTimeDonor;

