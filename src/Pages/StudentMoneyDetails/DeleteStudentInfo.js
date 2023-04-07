import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider';
import { FcDeleteDatabase } from 'react-icons/fc';

const DeleteStudentInfo = ({ allStudent, id, index}) => {
  const { user } = useContext(AuthContext)
  const deleteInfo =()=>{
    
      fetch(`http://localhost:5000/studentMoney/${id}`, {
        method: 'DELETE',
        headers: {
          authorization: `bearer ${user}`
        },
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success('মুছে ফেলা হয়েছে');
          }
        })
    
    console.log(id);
  }
  return (
    <div onClick={deleteInfo}>
      <FcDeleteDatabase size="28"></FcDeleteDatabase>
    </div>
  );
};

export default DeleteStudentInfo;