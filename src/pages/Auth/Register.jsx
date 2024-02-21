import React, { useState } from 'react'
import { auth } from '../../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';


const inetialstate = {

  email: '',
  password: '',
  confirmPassword: ''

}


export default function Register() {

  const [state, setState] = useState(inetialstate);
  const [processing, setProcessing] = useState(false)

  // to handle input entering 

  const handleChange = (e) => {

    const { name, value } = e.target;

    setState(s => ({ ...s, [name]: value }))

    console.log(state)

  }

  // to submit form 

  const handleSubmit = e => {

    e.preventDefault()

    let { email, password, confirmPassword } = state;

    console.log(state)
    
    if (password !== confirmPassword) {

      return alert("password does't match");

    }

    // console.log(email,password,confirmPassword)
    setProcessing(true)

    
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        alert('user signup completed')
        setState(inetialstate)
        // ...
      })
      .catch((error) => {
        console.log(error)
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // ..
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
                  <input className='form-control' type="email" name='email' value={state.email} placeholder='Email' onChange={handleChange} />
                </div>
                
                <div className="col-3 mb-3">
                  {/* <label >Enter Password</label> */}
                  <input type="password" className='form-control' name='password' value={state.password}  placeholder='Password' onChange={handleChange} />
                </div>
                <div className="col-3 mb-3">
                  {/* <label >Confirm Password</label>  */}
                  <input type="password" className='form-control' name='confirmPassword' value={state.confirmPassword}  placeholder='Password' onChange={handleChange} />
                </div>
                <div className="col-3">
                  <button className='btn btn-primary' disabled={processing}>
                    {!processing? <span>Register</span>: <div className="spinner spinner-grow spinner-grow-sm"></div> }
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
