import React, { useEffect, useState } from "react";
import axios from "axios";
import { Plus, Trash2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Inventory = () => {
  const [inventory, setInventory] = useState([]);
  const [form, setForm] = useState({ name: "", category: "", quantity: "", expiryDate: "" });

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/api/inventory");
        if (Array.isArray(data)) {
            setInventory(data);
        } else {
            console.error("API response is not an array:", data);
        }
      } catch (error) {
        console.error("Error fetching inventory:", error);
      }
    };

    fetchInventory();
  }, []);

  const handleAddItem = async () => {
    try {
      const { data } = await axios.post("http://localhost:3000/api/inventory", form);
      setInventory([...inventory, data]);
      setForm({ name: "", category: "", quantity: "", expiryDate: "" });
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  

  const handleDeleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/inventory/${id}`);
      setInventory(inventory.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Inventory Management</h1>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Add New Item</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <input
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Category</option>
                <option value="Dairy">Dairy</option>
                <option value="Vegetables">Vegetables</option>
                <option value="Bakery">Bakery</option>
                <option value="Meat">Meat</option>
                <option value="Other">Other</option>
              </select>
              <input
                type="number"
                placeholder="Quantity"
                value={form.quantity}
                onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="date"
                placeholder="Expiry Date"
                value={form.expiryDate}
                onChange={(e) => setForm({ ...form, expiryDate: e.target.value })}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              onClick={handleAddItem}
              className="mt-4 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Item
            </button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Inventory List</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expiry Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {inventory.map((item) => (
                    <tr key={item._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.category}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.quantity}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {new Date(item.expiryDate).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button
                          onClick={() => handleDeleteItem(item._id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
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

export default Inventory;