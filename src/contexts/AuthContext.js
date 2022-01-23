import React, { useContext, useState, useEffect } from "react"
import { auth } from "../Firebase/firebase"
import {  globalProfile } from "../redux/actions/profileAction"
const AuthContext = React.createContext()
export function useAuth() {
  return useContext(AuthContext)
}
export function AuthProvider({ children }) {
  const [user, setUser] = useState()
  const [profile, setProfile] = useState([])
  useEffect(() => {
    if(user){
      globalProfile(user.uid, setProfile)
    }     
  },[user])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user)
      setLoading(false)
    })
   return unsubscribe
  }, [])

  const value = {
    user,  
    profile
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}