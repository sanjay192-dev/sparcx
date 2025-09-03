import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer'; // Import Footer

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer /> {/* Include Footer */}
    </div>
  );
};

export default Layout;
