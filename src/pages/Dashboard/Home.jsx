import { collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { firestore } from '../../config/firebase';

export default function Home() {
  const [documents, setDocuments] = useState([]);
  const [processing, setProcessing] = useState(false);
  const [buttonProcessing,setButtonProcessing ]=useState(false)


  const readDocuments = async () => {
    setProcessing(true)
    const querySnapshot = await getDocs(collection(firestore, "messages"));

    let array = [];

    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      const data = doc.data()
      array.push(data);
      // doc.data() is never undefined for query doc snapshots

    });
    setDocuments(array)
    setProcessing(false)
  }


  useEffect(() => {


    readDocuments()




  }, [])

const handleUpdate=async (message)=>{
  setButtonProcessing(true)
  try {
    // await setDoc(doc(firestore, "messages",message.id),{fullName:'Abdullah'},{merge:true});   is tarah porana data sath rkhny k liye merge pass kia gya hy 
    await updateDoc(doc(firestore, "messages",message.id),{fullName:'Abdullah'});
  
   alert("your msg has been Updated")
 } catch (e) {
   console.error("Error adding document: ", e);
   alert("Something went wrong")
 }
 setButtonProcessing(false)
 readDocuments()
}

const handleDelete=async (message)=>{
setButtonProcessing(true)
  try {
   
    await deleteDoc(doc(firestore, "messages",message.id));
  
   alert("your msg has been deleted")
 } catch (e) {
   console.error("Error deleting document: ", e);
   alert("Something went wrong")
 }
 setButtonProcessing(false)
 readDocuments()
}



  if (processing) {
    return <div className="text-center mt-5 pt-5">
      <div className=" spinner spinner-grow spinner-sm"></div>
    </div>
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="text-center">Messages</h1>
          <div className="row mt-5">
            <div className="col">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th >Sr#</th>
                      <th >Full Name</th>
                      <th >Email</th>
                      <th >City</th>
                      <th >Country</th>
                      <th >Subject</th>
                      <th >Message</th>
                      <th >Action</th>

                    </tr>
                  </thead>
                  <tbody>

                    {documents.map((doc, i) => {

                      return <tr key={i}>
                        <th >{i + 1}</th>
                        <th >{doc.fullName}</th>
                        <th >{doc.email}</th>
                        <th >{doc.city}</th>
                        <th >{doc.country}</th>
                        <th >{doc.subject}</th>
                        <th >{doc.message}</th>
                        <th >
                          <button className="btn btn-info btn-sm" disabled={buttonProcessing}  onClick={() => { handleUpdate(doc) }}>update</button>
                          <button className="btn btn-danger btn-sm m-2" disabled={buttonProcessing} onClick={() => { handleDelete(doc) }}>Delete</button>
                        </th>

                      </tr>

                    })}




                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
