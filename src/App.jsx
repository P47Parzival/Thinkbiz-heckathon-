// import React from 'react';
// import { BarChart, LineChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import { Package, AlertTriangle, Leaf, Heart, Plus, Clock, Gift } from 'lucide-react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import Dashboard from './dashboardpage'

// const Dashboard = () => {
//   const navigate = useNavigate()

//   // Sample data for charts
//   const inventoryData = [
//     { name: 'Mon', value: 240 },
//     { name: 'Tue', value: 300 },
//     { name: 'Wed', value: 280 },
//     { name: 'Thu', value: 320 },
//     { name: 'Fri', value: 290 },
//     { name: 'Sat', value: 250 },
//     { name: 'Sun', value: 225 }
//   ];

//   const forecastData = [
//     { name: 'Week 1', actual: 400, predicted: 380 },
//     { name: 'Week 2', actual: 380, predicted: 390 },
//     { name: 'Week 3', actual: 420, predicted: 400 },
//     { name: 'Week 4', actual: 390, predicted: 385 }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-white shadow">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center">
//               <Package className="h-8 w-8 text-blue-600" />
//               <h1 className="ml-2 text-2xl font-bold text-gray-900">Inventory Manager</h1>
//             </div>
//             <nav className="flex space-x-4">
//               {['Dashboard', 'Inventory', 'Forecast', 'Donations', 'Settings'].map((item) => (
//                 <button key={item} className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100">
//                   {item}
//                 </button>
//               ))}
//             </nav>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Statistics Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           {[
//             { title: 'Total Inventory', value: '1,234', icon: Package, color: 'blue' },
//             { title: 'Near-Expiry Items', value: '27', icon: AlertTriangle, color: 'yellow' },
//             { title: 'Wastage Avoided', value: '450kg', icon: Leaf, color: 'green' },
//             { title: 'Donations Made', value: '89', icon: Heart, color: 'red' }
//           ].map((stat) => (
//             <Card key={stat.title}>
//               <CardHeader className="flex flex-row items-center justify-between pb-2">
//                 <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
//                 <stat.icon className={`h-4 w-4 text-${stat.color}-500`} />
//               </CardHeader>
//               <CardContent>
//                 <div className="text-2xl font-bold">{stat.value}</div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Charts */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//           <Card>
//             <CardHeader>
//               <CardTitle>Real-time Inventory Usage</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="h-64">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <BarChart data={inventoryData}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="name" />
//                     <YAxis />
//                     <Tooltip />
//                     <Bar dataKey="value" fill="#3b82f6" />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </div>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardHeader>
//               <CardTitle>Demand Forecast Trends</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="h-64">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <LineChart data={forecastData}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="name" />
//                     <YAxis />
//                     <Tooltip />
//                     <Line type="monotone" dataKey="actual" stroke="#3b82f6" />
//                     <Line type="monotone" dataKey="predicted" stroke="#10b981" strokeDasharray="5 5" />
//                   </LineChart>
//                 </ResponsiveContainer>
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Quick Actions */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {[
//             { title: 'Add New Inventory', icon: Plus },
//             { title: 'View Near-Expiry Items', icon: Clock },
//             { title: 'Initiate Donation', icon: Gift }
//           ].map((action) => (
//             <button
//               key={action.title}
//               className="flex items-center justify-center p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
//             >
//               <action.icon className="h-5 w-5 mr-2 text-blue-600" />
//               <span className="text-gray-700 font-medium">{action.title}</span>
//             </button>
//           ))}
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="bg-white border-t mt-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <div className="flex justify-between items-center">
//             <p className="text-sm text-gray-500">© 2025 Inventory Manager. All rights reserved.</p>
//             <div className="flex space-x-4">
//               <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Documentation</a>
//               <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Help Center</a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// const NavButton = ({ item }) => {
//   const navigate = useNavigate();

//   return (
//     <button
//       className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
//       onClick={() => {
//         if (item === 'Dashboard') {
//           navigate('/dashboardpage.jsx');
//         } else if (item === 'Forecast') {
//           navigate('/forecast');
//         } else if (item === 'Donations') {
//           navigate('/donations');
//         } else if (item === 'Settings') {
//           navigate('/settings');
//         }
//       }}
//     >
//       {item}
//     </button>
//   );
// };

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/inventory" element={<Inventory />} />
//         <Route path="/forecast" element={<Forecast />} />
//         <Route path="/donations" element={<Donations />} />
//         <Route path="/settings" element={<Settings />} />
//         {/* Add other routes here */}
//       </Routes>
//     </Router>
//   );
// };



// export default Dashboard;