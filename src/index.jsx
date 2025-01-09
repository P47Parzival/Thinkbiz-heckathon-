import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Dashboard from './App.jsx'
// import Dashboard from './dashboardpage'
// import Inventory from './inventorypage'
// import Forecast from './forecastpage'
// import Donations from './donationpage'
// import Settings from './settingspage'
import Homepage from './homepage'
// import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Dashboard></Dashboard>
    <Inventory></Inventory>
    <Forecast></Forecast>
    <Donations></Donations>
    <Settings></Settings> */}
    <Homepage></Homepage>
  </StrictMode>,
)
