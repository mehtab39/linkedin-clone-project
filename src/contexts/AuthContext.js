import React, { useContext, useState, useEffect } from "react"
import { Navigate } from "react-router-dom"
import { auth } from "../Firebase/firebase"
import { getProfile } from "../Firebase/Firestore/updateProfile"
const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [pass, setpass] = useState(false)
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
      setLoading(true)
      getProfile(currentUser.uid, setProfile) 
      setLoading(false)
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