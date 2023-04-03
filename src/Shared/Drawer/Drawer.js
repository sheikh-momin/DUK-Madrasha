import React from 'react';
import { Link } from 'react-router-dom';

const Drawer = () => {
  return (
    <div className=''>
      <div className="drawer drawer-mobile bg-gradient-to-r from-cyan-500 to-blue-400">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80  text-base-content ">
            
            <li className='mx-auto'><Link className='text-white ' to="/dashboard">ড্যাশবোর্ড</Link></li>
            <li className='mx-auto'><Link className='text-white ' to="/dashboard/studentMoneyDetails">ছাত্র বেতন</Link></li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer;