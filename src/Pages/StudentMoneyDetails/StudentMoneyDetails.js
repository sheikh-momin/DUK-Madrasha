import React from 'react';

const StudentMoneyDetails = () => {
  return (
    <div className='md:mx-40 mx-5'>
      <div className='flex justify-center'>
        <div className='mr-5 md:mx-20'>
          
        <input type="text" placeholder="নাম" className="input w-full max-w-xs" /></div>
        <div className='mr-5 md:mx-20'><input type="text" placeholder="শ্রেনি" className="input w-full max-w-xs" /></div>
        <div><input type="text" placeholder="রোল" className="input w-full max-w-xs" /></div>
      </div>

      <div className='flex justify-center'>
        <div className='mr-5 md:mx-20'>
          
        <input type="text" placeholder="পিতার নাম" className="input w-full max-w-xs" /></div>
        <div className='mr-5 md:mx-20'><input type="text" placeholder="১ম মোবাইল নাম্বার" className="input w-full max-w-xs" /></div>
        <div><input type="text" placeholder="২য় মোবাইল নাম্বার" className="input w-full max-w-xs" /></div>
      </div>
      <div className='flex justify-center'>
        <div className='mr-5 md:mx-20'>
          
        <input type="text" placeholder="বেতন" className="input w-full max-w-xs" /></div>
        <div className='mr-5 md:mx-20'><input type="text" placeholder="ডে কেয়ার" className="input w-full max-w-xs" /></div>
        <div><input type="text" placeholder="খানা" className="input w-full max-w-xs" /></div>
      </div>
      
    </div>
  );
};

export default StudentMoneyDetails;