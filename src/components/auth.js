import { auth } from "../config/firebase-config"
import { createUserWithEmailAndPassword } from "firebase/auth"

export const auth = () => {
    const signIn = () => {};
    
    return (
        <div>
            <input placeholder="Email"/>
            <input placeholder="Password"/>
            <button>Sign In</button>
        </div>
    )
}