import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { Package, AlertTriangle, Leaf, Heart, Plus, Clock, Gift, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import OneTimeDonor from './OTD'
import Inventory from './inventorypage';
import Forecast from './forecastpage';
import Donations from './donationpage';
import Settings from './settingspage';
import DashboardPage from './dashboardpage';
import backgroundImage from './images/wha.jpg'; // Adjust the path as necessary
import ProtectedRoute from './protectedroute'; // Import the ProtectedRoute component
import { SignIn, SignUp, useAuth } from '@clerk/clerk-react';

const Homepage = () => {
  const navigate = useNavigate();

  return (
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
              {['Homepage', 'One Time Donor','Dashboard', 'Inventory', 'Forecast', 'Donations', 'Settings'].map((item) => (
                <NavButton key={item} item={item} />
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-96"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl font-bold mb-4">"Give a Meal, change a life"</h1>
          <p className="text-xl">"If you can't feed a HUNDRED people, then just feed ONE"<br/> -Mother Teressa</p>
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

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
  {/* Campaigns */}
  <div className="py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Current Campaigns</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Emergency Relief: East Africa",
            description: "Provide immediate food assistance to families affected by severe drought.",
            goal: "$500,000",
            raised: "$350,000",
            link: "https://afsafrica.org/my-food-is-african-social-media-campaign-embrace-african-culinary-heritage-and-champion-indigenous-food-systems/"
          },
          {
            title: "School Meals Program",
            description: "Help us provide nutritious meals to children in underprivileged schools.",
            goal: "$300,000",
            raised: "$275,000",
            link: "https://www.akshayapatra.org/indias-mid-day-meal-scheme/#:~:text=PM%2DPOSHAN%20helped%20ensure%20that,22%20data)%20across%20the%20country."
          },
          {
            title: "Local Food Banks Support",
            description: "Support local food banks in distributing meals to families in need.",
            goal: "$200,000",
            raised: "$150,000",
            link: "https://www.foodbanking.org/campaigns/"
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
              <a 
                href={campaign.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-4 block w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                Donate Now <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </div>
</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold mb-2">Hunger Run</h3>
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
    </div>
  );
};

const NavButton = ({ item }) => {
  const navigate = useNavigate();
  const { isSignedIn } = useAuth();

  const handleNavigation = () => {
    const routeMap = {
      Homepage: '/',
      Dashboard: '/dashboard',
      Inventory: '/inventory',
      Forecast: '/forecast',
      Donations: '/donations',
      Settings: '/settings',
      OneTimeDonor: '/OTD' // Add the route for the donor form
    };

    // If the item is not "One-Time Donor" and the user is not signed in, redirect to sign-in
    if (!isSignedIn && item !== 'OneTimeDonor') {
      navigate('/sign-in');
    } else {
      navigate(routeMap[item]);
    }
  };

  return (
    <button
      className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
      onClick={handleNavigation}
    >
      {item}
    </button>
  );
};

// export default NavButton;
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/sign-in" element={
          <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <SignIn />
          </div>
          } /> {/* Clerk sign-in route */}
        <Route path="/" element={<Homepage />} />
        <Route
          path="/inventory"
          element={
            <ProtectedRoute>
              <Inventory />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/forecast"
          element={
            <ProtectedRoute>
              <Forecast />
            </ProtectedRoute>
          }
        />
        <Route
          path="/donations"
          element={
            <ProtectedRoute>
              <Donations />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />
        {/* Add other routes here */}
        <Route path="/OTD" element={<OneTimeDonor />} />
      </Routes>
    </Router>
  );
};
export default App;
