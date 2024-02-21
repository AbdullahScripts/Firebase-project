import React, { useState } from 'react'
import { auth } from '../../config/firebase';
import {signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


const inetialstate = {

  email: '',
  password: ''

}


export default function Login() {

  const [state, setState] = useState(inetialstate);
  const [processing, setProcessing] = useState(false)

  const navigate=useNavigate()
  // to handle input entering 

  const handleChange = (e) => {

    const { name, value } = e.target;

    setState(s => ({ ...s, [name]: value }))

    // console.log(state)

  }

  // to submit form 

  const handleSubmit = e => {

    e.preventDefault()

    let { email, password } = state;

    // console.log(state)


    // console.log(email,password,)
    setProcessing(true)

    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        navigate('/')
        // ...
      })
      .catch((error) => {
        console.log(error)
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // ..
      }).finally(()=>{

        setProcessing(false)
      })  ;

   



  }



  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card">

            <form action="Submit" onSubmit={handleSubmit}>

              <div className="row d-flex justify-content-center flex-column align-items-center">

                <div className="col-3 mb-3">

                  {/* <label >Enter Email</label>  */}
                  <input className='form-control' type="email" name='email' placeholder='Email' onChange={handleChange} />
                </div>
                
                <div className="col-3 mb-3">
                  {/* <label >Enter Password</label> */}
                  <input type="password" className='form-control' name='password'  placeholder='Password' onChange={handleChange} />
                </div>
            
                <div className="col-3">
                  <button className='btn btn-primary' disabled={processing}>
                    {!processing? <span>Login</span>: <div className="spinner spinner-grow spinner-grow-sm"></div> }
                  </button>
                </div>
              </div>
            </form>


          </div>
        </div>
      </div>
    </div>
  )
}
