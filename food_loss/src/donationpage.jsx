
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Gift, Calendar, User, Plus, Info, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Donations = () => {
  const [donations, setDonations] = useState([]);
  const [newDonation, setNewDonation] = useState({ items: [], recipient: "", date: "" });
  const [donationAmount, setDonationAmount] = useState("");
  const [ngos, setNgos] = useState([
    {
      name: "Visamo Foundation",
      description: "Visamo Foundation is dedicated to providing education and support to underprivileged children.",
      image: "https://prod-wishwa.s3.ap-south-1.amazonaws.com/campaign/0003-001-000000000174/images/3557-1722325904295-3.jpg",
      whatsapp: "+911234567890",
      rating: 4.225
    },
    {
      name: "Lok Ashirwad Charitable Trust",
      description: "Lok Ashirwad Charitable Trust works towards the welfare of the underprivileged.",
      image: "https://c8.alamy.com/comp/2KBMPJ0/slum-children-and-other-dwellers-are-seen-on-the-entrance-point-of-their-living-slum-and-collects-cooked-food-donate-and-distribute-by-a-social-organization-in-between-the-lockdown-days-in-the-eastern-indian-state-odisha-s-capital-city-bhubaneswar-on-april-22-2020-photo-by-strnurphoto-2KBMPJ0.jpg",
      whatsapp: "+911234567891",
      rating: 4.625
    },
    {
      name: "Shree Man Mandir Charitable Trust",
      description: "Shree Man Mandir Charitable Trust is committed to various social welfare activities.",
      image: "https://www.shutterstock.com/image-photo/panskura-west-bengal-29_09_2024-people-260nw-2526016093.jpg",
      whatsapp: "+911234567892",
      rating: 4.336
    },
    {
      name: "Bhagwati Old Age Home (Ansh Foundation)",
      description: "Bhagwati Old Age Home provides care and support to the elderly.",
      image: "https://akshayachaitanya.org/public/assets/images/swastya/swastya-gallery-4.jpg",
      whatsapp: "+911234567893",
      rating: 4.2
    },
    {
      name: "Matoshree Vrudhashram",
      description: "Matoshree Vrudhashram offers a safe and caring environment for senior citizens.",
      image: "https://www.shutterstock.com/image-photo/guwahati-india-30-june-2021-260nw-2000024270.jpg",
      whatsapp: "+911234567894",
      rating: 4.1
    }
  ]);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/api/donations");
        if (Array.isArray(data)) {
          setDonations(data);
        } else {
          console.error("API response is not an array:", data);
        }
      } catch (error) {
        console.error("Error fetching donations:", error);
      }
    };

    const fetchNgos = async () => {
      try {
        const { data } = await axios.get("/api/ngos");
        if (Array.isArray(data)) {
          setNgos(data);
        } else {
          console.error("API response is not an array:", data);
        }
      } catch (error) {
        console.error("Error fetching NGOs:", error);
      }
    };

    fetchDonations();
    fetchNgos();
  }, []);

  const handleAddDonation = async () => {
    try {
      const { data } = await axios.post("http://localhost:3000/api/donations", newDonation);
      setDonations([...donations, data]);
    } catch (error) {
      console.error("Error adding donation:", error);
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.paypal.com/sdk/js?client-id=YOUR_PAYPAL_CLIENT_ID"; // Replace with your PayPal client ID
    script.addEventListener("load", () => {
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: donationAmount
              }
            }]
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then(details => {
            alert("Payment successful!");
            // You can handle the response here, e.g., save the payment details to your database
          });
        }
      }).render("#paypal-button-container");
    });
    document.body.appendChild(script);
  }, [donationAmount]);

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

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              Donate Money
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="relative flex-grow">
                <input
                  type="number"
                  placeholder="Amount"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div id="paypal-button-container" className="flex-shrink-0"></div>
            </div>
            <button
              className="mt-4 inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Donate with PayPal
            </button>
          </CardContent>
        </Card>

        <Card className="mb-8">
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

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="w-5 h-5" />
              NGO Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ngos.map((ngo, index) => (
                <div key={index} className="p-4 border border-gray-300 rounded-lg">
                  <img src={ngo.image} alt={ngo.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                  <h3 className="text-lg font-bold text-gray-900">{ngo.name}</h3>
                  <p className="text-sm text-gray-600">{ngo.description}</p>
                  <p className="text-sm text-gray-600">Rating: {ngo.rating} / 5</p>
                  <a href={`https://wa.me/${ngo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Contact Them
                  </a>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Donations;