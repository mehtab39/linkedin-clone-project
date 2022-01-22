import React from "react"
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext";


export default function PrivateRoute({ children }) {
  const {user} = useAuth()
 return user ? children : <Navigate to="/sign" />;
      }


