import React, { useEffect, useState } from 'react'
import { auth } from '../../config/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth';
export default function Home() {

  const [user, setUser] = useState({})
  const [processing, setProcessing] = useState(false)
  const [screen, setScreen] = useState(true)

  useEffect(() => {
    setProcessing(true)
    // const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        setScreen(false)
        // prompt('user Loged in')
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // const uid = user.uid;
        // ...
      } else {
        console.log('User is signed out')
        setScreen(true)
      }
      setProcessing(false)
    });
    console.log('working')
  }, [])

  const handleLogOut = () => {

    signOut(auth)
      .then(() => {
        alert('log Out successfully')
        setScreen(true)
      }).catch((err) => {
        console.log(err)
        alert('something went wrong')
        setScreen(false)
      })

  }

  if (screen) { 

    return <div className="container text-center">
      <div className="row">
        <div className="col">
          <h1>plz sign Up or log in</h1>
        </div>
      </div>
    </div>

  }

  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <button className="btn btn-danger btn-sm" onClick={handleLogOut}>Log Out</button>
          {!processing ? <><h1>Email:{user.email}</h1>
            <h1>User ID:{user.uid}</h1></> : <div className="spinner spinner-border"></div>}
        </div>
      </div>
    </div>
  )
}
