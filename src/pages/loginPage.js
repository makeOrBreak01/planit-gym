import React, { useState } from "react"
import { auth } from "../config/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth"; 

export default function LoginPage() {
    
    const [signUpEmail, setSignUpEmail] = useState("");
    const [signUpPassword, setSignUpPassword] = useState("");

    const signUp = async () => {
        console.log("signup button clicked -")
        try {
            const user = await createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword); 
        } catch(err) {
            console.log('sign up failed')
        }
    }; 
/*
    const login = async () => {};

    const logout = async () => {};*/
    return(
        <div className="authPage">
            <div className="loginSection"> 
                <h3>Log in</h3>
                <input placeholder="username / email..."/>
                <input placeholder="password..." />
                <button>Log in</button>
            </div>   

            <div className="signUpSection">
            <h3>Create an account</h3>
                <input placeholder="username / email..." onChange={(event)=> {setSignUpEmail(event.target.value)}}/>
                <input placeholder="password..." onChange={(event)=> {setSignUpPassword(event.target.value)}}/>
                <button onClick={signUp}>Sign up</button>
            </div>   
        </div>

        
    )
}