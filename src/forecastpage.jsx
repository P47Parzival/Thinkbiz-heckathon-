import React, { useEffect, useState } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpCircle, TrendingUp } from "lucide-react";

const Forecast = () => {
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    const fetchForecastData = async () => {
        try {
          const { data } = await axios.get("http://localhost:3000/api/forecast");
          if (Array.isArray(data)) { // Check if the response is an array
            setForecastData(data);
          } else {
            console.error("API response is not an array:", data);
          }
          setLoading(false);
        } catch (error) {
          console.error("Error fetching forecast data:", error);
          setLoading(false);
        }
      };
  
      fetchForecastData();
    }, []);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border rounded-lg shadow-lg">
          <p className="font-medium text-gray-900">Week {label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <TrendingUp className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">Demand Forecast</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ArrowUpCircle className="w-5 h-5 text-green-500" />
                Forecast Accuracy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-green-600">94%</p>
              <p className="text-sm text-gray-600 mt-1">Average accuracy over last 30 days</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Forecast Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="text-sm text-gray-600">
                  • Predicted demand shows an upward trend
                </li>
                <li className="text-sm text-gray-600">
                  • Peak demand expected in week 3
                </li>
                <li className="text-sm text-gray-600">
                  • Seasonal patterns aligned with historical data
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Demand Forecast Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[500px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={forecastData}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-50" />
                  <XAxis 
                    dataKey="week" 
                    tick={{ fill: '#6B7280' }}
                    tickLine={{ stroke: '#6B7280' }}
                  />
                  <YAxis 
                    tick={{ fill: '#6B7280' }}
                    tickLine={{ stroke: '#6B7280' }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend 
                    wrapperStyle={{ paddingTop: '20px' }}
                    iconType="circle"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="actual" 
                    stroke="#3B82F6" 
                    strokeWidth={2}
                    dot={{ fill: '#3B82F6', r: 4 }}
                    name="Actual Demand"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="predicted" 
                    stroke="#10B981" 
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={{ fill: '#10B981', r: 4 }}
                    name="Predicted Demand"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
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
    </div>
  );
};

export default Forecast;