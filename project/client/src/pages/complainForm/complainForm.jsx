import React from 'react'
import { useState } from "react";
import axios from "axios";
import "./complainForm.css"



export default function complainForm() {

  const [username,setUsername] =useState("")
  const [designation,setdesignation] =useState("")
  const [email,setEmail] =useState("")
  const [phone,setPhone] =useState("")
  const [stat,newstat]=useState("")
  const [district,newdistrict]=useState("")
  const [address,setaddress]=useState("")
  const [org_name,setorg_name]=useState("")
  const [org_mail,setorg_mail]=useState("")
  const [org_head,setorg_head]=useState("")
  const [org_add,setorg_add]=useState("")
  const [accused_name,setaccused_name]=useState("")
  const [accused_des,setaccused_des]=useState("")
  const [accused_head,setaccused_head]=useState("")
  const [accused_rel,setaccused_rel]=useState("")
  const [accused_desc,setaccused_desc]=useState("")

  const [error,setError] =useState(false)

  const handleSubmit= async(e)=>{
    e.preventDefault()
    setError(false)
   try{ 
    
    const res= await axios.post("/complain",{
      username,
      designation,
      phone,
      stat,
      district,
      address,
      org_name,
      org_mail,
      org_head,
      org_add,
      accused_name,
      accused_des,
      accused_head,
      accused_rel,
      accused_desc,
      email,
    })
    res.data && window.location.replace("/landingPage")
  }
    catch(err){
      console.log(err)
      setError(true)
    }
   
  }
  return (
    <div>
      
    </div>
  )
}
