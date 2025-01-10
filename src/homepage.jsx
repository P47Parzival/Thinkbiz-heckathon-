import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Package } from 'lucide-react';
import backgroundImage from './images/wha.jpg'; // Adjust the path as necessary
import DashboardPage from './dashboardpage';
import Inventory from './inventorypage';
import Forecast from './forecastpage';
import Donations from './donationpage';
import Settings from './settingspage';
import OneTimeDonor from './onetimedonor';
import SignIn from './(auth)/SignIn/SignIn.jsx';
import NavButton from './NavButton';
import ProtectedRoute from './protectedroute'// Import the ProtectedRoute component

const Homepage = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Package className="h-8 w-8 text-blue-600" />
                <h1 className="ml-2 text-2xl font-bold text-gray-900">Hunger Run</h1>
              </div>
              <nav className="flex space-x-4">
                {['Homepage', 'OTD', 'Dashboard', 'Inventory', 'Forecast', 'Donations', 'Settings'].map((item) => (
                  <NavButton key={item} item={item} />
                ))}
              </nav>
            </div>
          </div>
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/onetimedonor" element={<OneTimeDonor />} />
          <Route path="/dashboard" element={<ProtectedRoute element={DashboardPage} />} />
          <Route path="/inventory" element={<ProtectedRoute element={Inventory} />} />
          <Route path="/forecast" element={<ProtectedRoute element={Forecast} />} />
          <Route path="/donations" element={<ProtectedRoute element={Donations} />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
};

const HomeContent = () => (
  <>
    {/* Hero Section */}
    <section
      className="relative bg-cover bg-center h-96"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl font-bold mb-4">"Give a Meal, change a life"</h1>
        <p className="text-xl">"If you can't feed a HUNDRED people, then just feed ONE"<br /> -Mother Teresa</p>
      </div>
    </section>

    {/* Writing Section */}
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
        <p className="text-lg text-gray-700 mb-4">
          In a world where millions of people grapple with the harsh reality of food insecurity, the role of world hunger charities becomes more vital than ever.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Imagine a world where your understanding and actions contribute to a brighter future, where the daunting figure of millions facing hunger is drastically reduced.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          This article not only sheds light on the dire situation of global hunger but also unveils some powerful solutions at hand.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          As you journey through these insights, you’ll discover:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
          <li>How world hunger charities are making impactful strides.</li>
          <li>How your informed actions can be part of this transformative wave.</li>
        </ul>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">World Hunger Statistics</h2>
        <p className="text-lg text-gray-700 mb-4">
          Hunger is a global challenge that impacts millions, and the scale of the problem can seem so overwhelming we are tempted to believe there are no solutions.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          But when we commit to act compassionately and collectively, we can bring about change.
        </p>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-bold mb-2">Inventory Manager</h3>
            <p className="text-sm">© 2025 Inventory Manager. All rights reserved.</p>
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
            <p className="text-sm">Contact us: info@inventorymanager.com</p>
          </div>
        </div>
      </div>
    </footer>
  </>
);

export default Homepage;

