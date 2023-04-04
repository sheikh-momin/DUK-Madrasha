import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const StudentMoneyDetails = () => {
  const [date, setDate] = useState(); 
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div className='md:mx-40 mx-5  mt-5'>

      <div className='flex justify-center mb-5'>
        <div className="md:text-lg text-sm breadcrumbs mx-auto">
          <ul>
            <li>
              <Link  to="/dashboard/studentMoneyDetails">
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

      <form className='bg-stone-300 rounded py-10 md:w-full w-64' onSubmit={handleSubmit(onSubmit)}>
        <div className=''>
          <div className='md:flex justify-center '>
            <div className='md:mr-20 '>
              <input {...register("name")} type="text" placeholder="নাম" className="input md:w-full max-w-xs" /></div>
            <div className='md:mr-20'><input {...register("class")} type="text" placeholder="শ্রেনি" className="input md:w-full max-w-xs" /></div>
            <div><input {...register("classRoll")} type="text" placeholder="রোল" className="input md:w-full max-w-xs" /></div>
          </div>

          <div className='md:flex justify-center mt-5'>
            <div className='md:mr-20'>
              <input {...register("fatherName")} type="text" placeholder="পিতার নাম" className="input md:w-full max-w-xs" /></div>
            <div className='md:mr-20'><input {...register("mobileNumber1st")} type="text" placeholder="১ম মোবাইল নাম্বার" className="input md:w-full max-w-xs" /></div>
            <div><input {...register("mobileNumber2st")} type="text" placeholder="২য় মোবাইল নাম্বার" className="input md:w-full max-w-xs" /></div>
          </div>

          <div className='md:flex justify-center mt-5'>
            <div className='md:mr-20 '>
              <input {...register("beton")} type="text" placeholder="বেতন" className="input md:w-full max-w-xs" /></div>
            <div className='md:mr-20 '><input {...register("dayCare")} type="text" placeholder="ডে কেয়ার" className="input md:w-full max-w-xs" /></div>
            <div><input {...register("khana")} type="text" placeholder="খানা" className="input md:w-full max-w-xs" /></div>
          </div>
        </div>

        <div className="overflow-x-auto md:mx-10 mx-5 mt-10 ">
        <table className="table md:w-full w-20">
          {/* head*/}
          <thead>
            <tr>
              <th>মাশের নাম</th>
              <th>তারিখ</th>
              <th>বেতন</th>
              <th>ডে কেয়ার</th>
              <th>খানা</th>
              <th>বকেয়া</th>
              
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th><select {...register("month")} className="select select-bordered w-full max-w-xs">
                <option selected>জানুয়ারি </option>
                <option>ফেব্রুয়ারী </option>
                <option>মার্চ </option>
                <option>এপ্রিল </option>
                <option>মে </option>
                <option>জুন </option>
                <option>জুলাই  </option>
                <option> আগষ্ট </option>
                <option>সেপ্টেম্বর </option>
                <option>অক্টোবর  </option>
                <option>নভেম্বর  </option>
                <option>ডিসেম্বর   </option>
              </select></th>

              <td>
                <input type="date" {...register("date")} className="input  input-bordered w-full max-w-xs px-12" onChange={e => setDate(e.target.value)} />
              </td>
              <td><input {...register("beton2")} type="text" placeholder="বেতন" className="input input-bordered w-full max-w-xs" /></td>
              <td><input {...register("beton2")} type="text" placeholder="ডে কেয়ার" className="input input-bordered w-full max-w-xs" /></td>
              <td><input {...register("beton2")} type="text" placeholder="খানা" className="input input-bordered w-full max-w-xs" /></td>
              <td><input {...register("beton2")} type="text" placeholder="বকেয়া" className="input input-bordered w-full max-w-xs" /></td>
              
            </tr>
          </tbody>
        </table>
      </div>

      <div className="overflow-x-auto md:mx-10 mx-5">
        <table className="table md:w-full w-20">
          
          <tbody>
            {/* row 1 */}
            <tr>
              <th><select {...register("exm")} className="select select-bordered w-full max-w-xs">
                <option  selected>১ম ট্রিউ</option>
                <option>১ম সেমি</option>
                <option>২ম ট্রিউ</option>
                <option>২য় সেমি</option>
                <option>বার্ষিক</option>
              </select></th>

              <td>
                <input type="date" {...register("date")} className="input  input-bordered w-full max-w-xs px-12" onChange={e => setDate(e.target.value)} />
              </td>
              <td><input {...register("beton2")} type="text" placeholder="বেতন" className="input input-bordered w-full max-w-xs" /></td>
              <td><input {...register("beton2")} type="text" placeholder="ডে কেয়ার" className="input input-bordered w-full max-w-xs" /></td>
              <td><input {...register("beton2")} type="text" placeholder="খানা" className="input input-bordered w-full max-w-xs" /></td>
              <td><input {...register("beton2")} type="text" placeholder="বকেয়া" className="input input-bordered w-full max-w-xs" /></td>

            </tr>
          </tbody>
        </table>
      </div>


        
        <div className=' flex justify-center  mt-14' >
          <input className="btn px-14" value="সেভ করুন" type="submit" />
        </div>
      </form>

      

      
      


      
      
    </div>
  );
};

export default StudentMoneyDetails;