import React from 'react';
import { Link } from 'react-router-dom';

const NavButton = ({ item }) => {
  const routeMap = {
    Homepage: '/',
    OTD: '/onetimedonor',
    Dashboard: '/dashboard',
    Inventory: '/inventory',
    Forecast: '/forecast',
    Donations: '/donations',
    Settings: '/settings'
  };

  return (
    <Link to={routeMap[item]} className="text-gray-900 hover:text-blue-600">
      {item}
    </Link>
  );
};

export default NavButton;