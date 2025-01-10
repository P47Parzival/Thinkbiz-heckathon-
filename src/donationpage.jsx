import React, { useEffect, useState } from "react";
import axios from "axios";
import { Gift, Calendar, User, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Donations = () => {
  const [donations, setDonations] = useState([]);
  const [newDonation, setNewDonation] = useState({ items: [], recipient: "", date: "" });

  useEffect(() => {
    const fetchDonations = async () => {
        try {
          const { data } = await axios.get("http://localhost:3000/api/donations");
          if (Array.isArray(data)) { // Check if the response is an array
            setDonations(data);
          } else {
            console.error("API response is not an array:", data);
          }
          setLoading(false);
        } catch (error) {
          console.error("Error fetching donations:", error);
          setLoading(false);
        }
      };

    fetchDonations();
  }, []);

  const handleAddDonation = async () => {
    try {
      const { data } = await axios.post("http://localhost:3000/api/donations", newDonation);
      setDonations([...donations, data]);
    } catch (error) {
      console.error("Error adding donation:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Gift className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">Donations Management</h1>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="w-5 h-5" />
              New Donation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Recipient"
                  value={newDonation.recipient}
                  onChange={(e) => setNewDonation({ ...newDonation, recipient: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="date"
                  placeholder="Date"
                  value={newDonation.date}
                  onChange={(e) => setNewDonation({ ...newDonation, date: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <button
              onClick={handleAddDonation}
              className="mt-4 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Donation
            </button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Donation History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-hidden rounded-lg border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recipient</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {donations.map((donation, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{donation.recipient}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(donation.date).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Completed
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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

export default Donations;