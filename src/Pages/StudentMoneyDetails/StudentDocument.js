import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import Loader from '../../Shared/Loader/Loader';
import { useForm } from "react-hook-form";

const StudentDocument = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  const [searchBtn, setSearchBtn] = useState('')
  const [searchText, setSearchText] = useState('')
  // const [studentDocument, setStudentDocument] = useState([])
  const [loading, setLoading] = useState(true)
  const {user}= useContext(AuthContext)
  
  const handleSearch=(e)=>{
    const roll = e.target.value
    setSearchText(roll);
  }
  const handleSearchBtn=()=>{
    setSearchBtn(searchText);
  }

  const { data:studentDocument=[] }= useQuery({
    queryKey: ['studentMoney','searchBtn'],
    queryFn: () => fetch(`https://duk-madrasha-server-orcin.vercel.app/studentMoney2/${searchBtn}`)
                    .then(res => res.json())
                    
  })

  
  // useEffect(() => {
  //   if (user?.email ){
      
  //       .then(data => {
  //         setStudentDocument(data)
          
  //       })
  //     setLoading(false)
  //   }

  // }, [user])
  // console.log(studentDocument);
  // console.log(searchBtn);
  // if(searchBtn){
  //   setLoading(false)
  // }
  // if (loading) {
  //   return <Loader></Loader>;
  // }

  

  
  return (
    <div className='md:mx-40 mx-2 mt-5 '>
      <div className='bg-slate-700 text-center text-white mb-2 py-3 rounded text-2xl  '>
        <h1>ডকুমেন্ট</h1>
      </div>
      <div className='flex justify-center mb-5'>
        <div className="md:text-lg text-sm  breadcrumbs mx-auto">
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
      

      <div className='bg-sky-200 rounded py-10 md:px-5'>
        <div className='flex justify-center mb-10'>
          <div className="form-control ">
            <label className="input-group ">
              <input onChange={handleSearch} type="text" placeholder="ছাত্রের রোল খুজুন" className="input input-bordered " />
              <span onClick={handleSearchBtn}><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></span>
            </label>
          </div>
        </div>

        

        <div>
          {
            studentDocument ? 
            studentDocument?.map((document) =>
            
            document?.classRoll === searchBtn ? 
                <div className='flex justify-center'>
                  <div>
                    <div className='md:flex justify-between '>
                      <div className='md:mr-20 '>
                        <h1 className='text-xl'>নাম: <span className='font-bold'>{document?.name}</span></h1></div>
                      <div className='md:mr-20'><h1 className='text-xl'>শ্রেনি: <span className='font-bold'>{document?.classNumber}</span> </h1></div>
                      <div><h1 className='text-xl'>রোল: <span className='font-bold'>{document?.classRoll}</span> </h1></div>
                    </div>

                    <div className='md:flex justify-between mt-5'>
                      <div className='md:mr-20'>
                        <h1 className='text-xl'>পিতার নাম: <span className='font-bold'>{document?.fatherName}</span> </h1></div>
                      <div className='md:mr-20'><h1 className='text-xl'>১ম মোবাইল: <span className='font-bold'>{document?.mobileNumber1st}</span> </h1></div>
                      <div><h1 className='text-xl'>২য় মোবাইল: <span className='font-bold'>{document?.mobileNumber2nd}</span> </h1></div>
                    </div>

                    <div className='md:flex justify-between mt-5'>
                      <div className='md:mr-20 '>
                        <h1 className='text-xl'>বেতন: <span className='font-bold'>{document?.beton}</span> </h1></div>
                      <div className='md:mr-20 '><h1 className='text-xl'>ডে কেয়ার: <span className='font-bold'>{document?.dayCare}</span> </h1></div>
                      <div><h1 className='text-xl'>খানা: <span className='font-bold'>{document?.khana}</span> </h1></div>
                    </div>
                  </div>
                </div>
            :
            <></>
          )
          :
          <></>
          }
        </div>


        <div className="overflow-x-auto w-72 md:w-full  mt-10">
          <table className="table w-full">
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

              {
                studentDocument ? 
                studentDocument?.map((document)=>
                  document?.classRoll === searchBtn ? 
                  <tr>
                    <td>{document?.name}</td>
                    <td>{document?.date}</td>
                    <td>{document?.beton2}</td>
                    <td>{document?.dayCare2}</td>
                    <td>{document?.khana2}</td>
                    <td>{document?.bokeya}</td>
                  </tr> 
                  :
                  <></>
                )
                :
                <></>
              }
              
            </tbody>
          </table>
        </div>

        <div className="divider"></div> 

        <div className="overflow-x-auto   w-72 md:w-full">
          <table className="table w-full">
            

            <tbody>
              {/* row 1 */}
              {
              studentDocument ? 
                studentDocument?.map((document) =>
                  document?.classRoll === searchBtn ?
                    <tr>
                      <td>{document?.name}</td>
                      <td>{document?.date2}</td>
                      <td>{document?.beton3}</td>
                      <td>{document?.dayCare3}</td>
                      <td>{document?.khana3}</td>
                      <td>{document?.bokeya2}</td>
                    </tr>
                    :
                    <></>
                )
                :
                <></>
              }
              
            </tbody>
          </table>
        </div>



        
      </div>
    </div>
  );
};

export default StudentDocument;