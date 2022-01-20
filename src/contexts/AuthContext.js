import React, { useContext, useState, useEffect } from "react"
import { Navigate } from "react-router-dom"
import { auth } from "../Firebase/firebase"
import { getProfile } from "../Firebase/Firestore/addProfile"
const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [profile, setProfile] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
       auth.signOut()
     
    }
 
  useEffect(() => {
    if(currentUser){
      getProfile(currentUser.uid, setProfile) 
    }
   
  }, [currentUser])
  
  

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })
   return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    profile
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}