import React from 'react';
import { useState } from 'react';
import {  firestore } from '../../config/firebase';

import { doc, serverTimestamp, setDoc } from 'firebase/firestore';


const inetialstate = {

  fullName: '',
  email: '',
  city: '',
  country: '',
  subject: '',
  message: '',

}

 const getRandomId=()=>{
  return  Math.random().toString(36).slice(2);
}


export default function Contact() {

  const [state, setState] = useState(inetialstate);
  const [processing, setProcessing] = useState(false)

  // to handle input entering 

  const handleChange = (e) => {

    const { name, value } = e.target;

    setState(s => ({ ...s, [name]: value }))

    console.log(state)

  }

  // to submit form 

  const handleSubmit = async (e) => {

    e.preventDefault()

    let { fullName, email, city, country, subject, message } = state;

    fullName = fullName.trim()
    subject = subject.trim()
    message = message.trim()

    if (fullName.length < 3) {
      return alert('plz enter right name')
    }

    if (subject.length < 3) {
      return alert('plz enter right subject')
    }

    if (message.length < 3) {
      return alert('plz enter your message')
    }

    if (!email) {
      return alert('plz enter right mail')
    }

    let formData = {
      fullName, email, city, country, subject, message,
      id: getRandomId(),
      dateCreated: serverTimestamp()

    }


    setProcessing(true)

    try {
       await setDoc(doc(firestore, "messages",formData.id),formData);
      // console.log("Document written with ID: ", docRef.id);
      console.log(`original Id ${formData.id} `)
      setState(inetialstate);
      alert("your msg has been sended")
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Something went wrong")
    }
    setProcessing(false)


  }



  return (
    <div className="py-5 ">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">

              <form action="Submit" onSubmit={handleSubmit}>

                <div className="row d-flex justify-content-center flex-column align-items-center">

                  <div className="col-3 mb-3">

                    <input className='form-control' type="text" name='fullName' value={state.fullName} placeholder='fullName' onChange={handleChange} />

                  </div>

                  <div className="col-3 mb-3">

                    <input className='form-control' type="email" name='email' value={state.email} placeholder='Email' onChange={handleChange} />

                  </div>
                  <div className="col-3 mb-3">

                    <input className='form-control' type="text" name='city' value={state.city} placeholder='city' onChange={handleChange} />

                  </div>
                  <div className="col-3 mb-3">

                    <input className='form-control' type="text" name='country' value={state.country} placeholder='country' onChange={handleChange} />

                  </div>
                  <div className="col-3 mb-3">

                    <input className='form-control' type="text" name='subject' value={state.subject} placeholder='Subject' onChange={handleChange} />

                  </div>

                  <div className="col-3 mb-3">

                    <textarea name="message" onChange={handleChange} value={state.message}></textarea>


                  </div>

                  <div className="col-3">
                    <button className='btn btn-primary' disabled={processing}>
                      {!processing ? <span>Send</span> : <div className="spinner spinner-grow spinner-grow-sm"></div>}
                    </button>
                  </div>
                </div>
              </form>


            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
