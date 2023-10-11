/* eslint-disable react/jsx-no-duplicate-props */
"use client";   // this page is for frontend part.
import Link from "next/link";
import React from "react";
//once the user is sucessfully signed-up I want him to redirect or get redirected to the homepage, for this I need to use router.Following is the way you can do it.
import {useRouter} from "next/navigation";
//import {axios} from "axios";

export default function Signuppage() {
    
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: ""
    })

    const onSignup = async () => {

    }

    return(
        <div className="flex flex0col items-center justify-center min-h-screen py-2">
            <h1>SignUp</h1>
            <hr />
            <label htmlFor="username">username</label>
            <input 
                className="p-2 border border-gray-300 rounded-lgmb-4 focus:outline-none focus:border-gray-600"
                id="username" 
                type="text" 
                value={user.username} 
                onChange={(e) => setUser({...user, username: e.target.value})} placeholder="username"
                
                />
            <label htmlFor="email">email</label>
            <input 
                className="p-2 border border-gray-300 rounded-lgmb-4 focus:outline-none focus:border-gray-600"
                id="email" 
                type="text" 
                value={user.email} 
                onChange={(e) => setUser({...user, email: e.target.value})} 
                placeholder="email"
               
                />
            <label htmlFor="password">password</label>
            <input 
                className="p-2 border border-gray-300 rounded-lgmb-4 focus:outline-none focus:border-gray-600"
                id="password" 
                type="password" 
                value={user.password} 
                onChange={(e) => setUser({...user, password: e.target.value})} 
                placeholder="password"
               
                />
            <button
                onClick={onSignup}
                className="2 border border-gray-300 rounded-lgmb-4 focus:outline-none focus:border-gray-600">
                    Signup Here
            </button>
            <Link href="/login">Login Page</Link>
                

        </div>
    
    );
}
function SignupPage() {
    throw new Error("Function not implemented.");
}

