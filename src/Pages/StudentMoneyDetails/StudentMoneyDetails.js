import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const StudentMoneyDetails = () => {
  const [date, setDate] = useState(); 
  const { register, handleSubmit } = useForm();


  const handleForm = data => {
    const name = data.name
    const classNumber = data.classNumber
    const classRoll = data.classRoll
    const fatherName = data.fatherName
    const mobileNumber1st = data.mobileNumber1st
    const mobileNumber2nd = data.mobileNumber2nd
    const dayCare = data.dayCare
    const dayCare2 = data.dayCare2
    const dayCare3 = data.dayCare3
    const beton = data.beton
    const beton2 = data.beton2
    const beton3 = data.beton3
    const khana = data.khana
    const khana2 = data.khana2
    const khana3 = data.khana3
    const month = data.month
    const date = data.date
    const date2 = data.date2
    const bokeya = data.bokeya
    const bokeya2 = data.bokeya2
    const exm = data.exm


    const reportedItem = {
    name : name,
    classNumber : classNumber,
    classRoll :classRoll,
    fatherName :fatherName,
    mobileNumber1st :mobileNumber1st,
    mobileNumber2nd :mobileNumber2nd,
    dayCare :dayCare,
    dayCare2 :dayCare2,
    dayCare3 :dayCare3,
    beton :beton,
    beton2 :beton2,
    beton3 :beton3,
    khana :khana,
    khana2 :khana2,
    khana3 :khana3,
    month :month,
    date :date,
    date2 :date2,
    bokeya :bokeya,
    bokeya2 :bokeya2,
    exm :exm,
    }

    fetch('https://duk-madrasha-server-orcin.vercel.app/studentMoney', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(reportedItem)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        toast.success('তথ্য সঠিক ভাবে আপডেট হয়েছে');
      })
  }
  return (
    <div className='md:mx-40 mx-2  mt-5'>
      <div className='bg-slate-700 text-center text-white mb-2 py-3 rounded text-2xl  '>
        <h1>ছাত্রের বেতন</h1>
    </div>

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

      <form className='bg-stone-300 rounded py-10 md:w-full w-72' onSubmit={handleSubmit(handleForm)}>
        <div className='flex justify-center'>
          <div className=''>
            <div className='md:flex justify-center '>
              <div className='md:mr-20 mb-2 md:mb-0'>
                <input {...register("name")} type="text" placeholder="নাম" className="input md:w-full max-w-xs" /> </div>
              <div className='md:mr-20 mb-2 md:mb-0'><input {...register("classNumber")} type="text" placeholder="শ্রেনি" className="input md:w-full max-w-xs" /></div>
              <div className='mb-2 md:mb-0'><input {...register("classRoll")} type="text" placeholder="রোল" className="input md:w-full max-w-xs" /></div>
            </div>

            <div className='md:flex justify-center mt-5'>
              <div className='md:mr-20 mb-2 md:mb-0'>
                <input {...register("fatherName")} type="text" placeholder="পিতার নাম" className="input md:w-full max-w-xs" /></div>
              <div className='md:mr-20 mb-2 md:mb-0'><input {...register("mobileNumber1st")} type="text" placeholder="১ম মোবাইল নাম্বার" className="input md:w-full max-w-xs" /></div>
              <div className='mb-2 md:mb-0'><input {...register("mobileNumber2nd")} type="text" placeholder="২য় মোবাইল নাম্বার" className="input md:w-full max-w-xs" /></div>
            </div>

            <div className='md:flex justify-center mt-5'>
              <div className='md:mr-20 mb-2 md:mb-0'>
                <input {...register("beton")} type="text" placeholder="বেতন" className="input md:w-full max-w-xs" /></div>
              <div className='md:mr-20 mb-2 md:mb-0'><input {...register("dayCare")} type="text" placeholder="ডে কেয়ার" className="input md:w-full max-w-xs" /></div>
              <div className='mb-2 md:mb-0'><input {...register("khana")} type="text" placeholder="খানা" className="input md:w-full max-w-xs" /></div>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto md:mx-10  mt-10 ">
        <table className="table md:w-full ">
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
                <td><input {...register("dayCare2")} type="text" placeholder="ডে কেয়ার" className="input input-bordered w-full max-w-xs" /></td>
              <td><input {...register("khana2")} type="text" placeholder="খানা" className="input input-bordered w-full max-w-xs" /></td>
              <td><input {...register("bokeya")} type="text" placeholder="বকেয়া" className="input input-bordered w-full max-w-xs" /></td>
              
            </tr>
          </tbody>
        </table>
      </div>

      <div className="overflow-x-auto md:mx-10 ">
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
                <input type="date" {...register("date2")} className="input  input-bordered w-full max-w-xs px-12" onChange={e => setDate(e.target.value)} />
              </td>
              <td><input {...register("beton3")} type="text" placeholder="বেতন" className="input input-bordered w-full max-w-xs" /></td>
                <td><input {...register("dayCare3")} type="text" placeholder="ডে কেয়ার" className="input input-bordered w-full max-w-xs" /></td>
              <td><input {...register("khana3")} type="text" placeholder="খানা" className="input input-bordered w-full max-w-xs" /></td>
                <td><input {...register("bokeya2")} type="text" placeholder="বকেয়া" className="input input-bordered w-full max-w-xs" /></td>

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