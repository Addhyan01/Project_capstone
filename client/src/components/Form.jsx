import { useState, useEffect } from "react"
import React from 'react'
import styles from "./Form.module.css"
import validateForm from "../utils/validateForm";



function Form() {

  
    
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [username,setUserName] = useState("");
    const [phone,setPhone] = useState("");
    const [error, setError] = useState(false);

  return (
    <div
        className={styles.container}>
            <input type="text"
            placeholder="Name"
            value={name}
            onChange={(e)=> setName(e.target.value)} />

            <input type="text"
            value={username}
            placeholder="UserName"
            onChange={(e)=> setUserName(e.target.value)} />


            <input type="email"
            value={email}
            placeholder="Email"
            onChange={(e)=> setEmail(e.target.value)} />

            


            <input type="text"
            value={phone}
            placeholder="Phone"
            onChange={(e)=> setPhone(e.target.value)} />

            <button onClick={() => validateForm(name, email, username, phone)}
            >SIGN UP</button>


           
        </div>
  )
}

export default Form;