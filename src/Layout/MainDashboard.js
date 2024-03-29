import React from 'react';
import { Outlet } from 'react-router-dom/dist';
import Drawer from '../Shared/Drawer/Drawer';
import PrivateFooter from '../Shared/PrivateFooter/PrivateFooter';
import PrivateNavbar from '../Shared/PrivateNavbar/PrivateNavbar';

const MainDashboard = () => {
  return (
    <div>
      <PrivateNavbar></PrivateNavbar>
      <div className='flex'>
        <div className='bg-[#0e0e0e]'><Drawer></Drawer></div>
        <div className='bg-slate-400 w-full'><Outlet></Outlet></div>
      </div>
      <PrivateFooter></PrivateFooter>
    </div>
  );
};

export default MainDashboard;