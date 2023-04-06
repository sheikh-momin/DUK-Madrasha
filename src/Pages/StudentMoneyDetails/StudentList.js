import React from 'react';
import { Link } from 'react-router-dom';
// import { MdDeleteForever } from 'react-icons/md';
import { FcDeleteDatabase } from 'react-icons/fc';

const StudentList = () => {
  const handleStudentInfoDelete=()=>{
    
  }
  return (
    <div className='md:mx-40 mx-5 mt-5'>
      <div className='bg-slate-700 text-center text-white mb-2 py-3 rounded text-2xl  '>
        <h1>ছাত্র লিস্ত</h1>
      </div>
      <div className='flex justify-center mb-5'>
        <div className="text-lg  breadcrumbs mx-auto">
          <ul>
            <li>
              <Link to="/dashboard/studentMoneyDetails">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                হোম
              </Link>
            </li>
            <li>
              <Link to="/dashboard/studentDocument">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                ডকুমেন্ট
              </Link>
            </li>
            <li>
              <Link to="/dashboard/studentList">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                ছাত্র লিস্ত
              </Link>
            </li>
          </ul>
        </div>
      </div>
      

      <div className='bg-green-200 py-10 px-5 rounded'>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head*/}
            <thead>
              <tr>
                <th></th>
                <th>নাম</th>
                <th>শ্রেনি</th>
                <th>রোল</th>
                <th>ডিলিট</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td onClick={handleStudentInfoDelete}><FcDeleteDatabase size="28"></FcDeleteDatabase></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentList;