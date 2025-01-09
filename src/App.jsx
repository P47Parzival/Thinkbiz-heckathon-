import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { Package, AlertTriangle, Leaf, Heart, Plus, Clock, Gift, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Inventory from './Inventory';
import Forecast from './Forecast';
import Donations from './Donations';
import Settings from './Settings';
import backgroundImage from './images/wha.jpg'; // Adjust the path as necessary

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Package className="h-8 w-8 text-blue-600" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">Inventory Manager</h1>
            </div>
            <nav className="flex space-x-4">
              {['Dashboard', 'Inventory', 'Forecast', 'Donations', 'Settings'].map((item) => (
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
                  raised: "$350,000"
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
                  raised: "$150,000"
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
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">© 2025 Inventory Manager. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Documentation</a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Help Center</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const NavButton = ({ item }) => {
  const navigate = useNavigate();

  return (
    <button
      className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
      onClick={() => {
        if (item === 'Dashboard') {
          navigate('/');
        } else if (item === 'Inventory') {
          navigate('/inventory');
        } else if (item === 'Forecast') {
          navigate('/forecast');
        } else if (item === 'Donations') {
          navigate('/donations');
        } else if (item === 'Settings') {
          navigate('/settings');
        }
      }}
    >
      {item}
    </button>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/forecast" element={<Forecast />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/settings" element={<Settings />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

export default App;
