
"use client";   // this page is for frontend part.
import Link from "next/link";
import React from "react";
//once the user is sucessfully signed-up I want him to redirect or get redirected to the homepage, for this I need to use router.Following is the way you can do it.
import {useRouter} from "next/navigation";
//import {axios} from "axios";

export default function LoginPage() {
    
    const [user, setUser] = React.useState({
        email: "",
        password: "",
       
    })

    const onLogin = async () => {

    }

    return(
        <div className="flex flex0col items-center justify-center min-h-screen py-2">
            <h1>Login</h1>
            <hr />
           
            <label htmlFor="email">email</label>
            <input 
                className="p-2 border border-gray-300 rounded-lgmb-4 focus:outline-none focus:border-gray-600"
                id="email" 
                type="text" 
                value={user.email} 
                onChange={(e) => setUser({...user, email: e.target.value})} placeholder="email"
               // placeholder="email"
                />
            <label htmlFor="password">password</label>
            <input 
                className="p-2 border border-gray-300 rounded-lgmb-4 focus:outline-none focus:border-gray-600"
                id="password" 
                type="password" 
                value={user.password} 
                onChange={(e) => setUser({...user, password: e.target.value})} placeholder="password"
               // placeholder="password"
                />
            <button
                onClick={onLogin}
                className="2 border border-gray-300 rounded-lgmb-4 focus:outline-none focus:border-gray-600">
                    Login Here
            </button>
            <Link href="/signup">Signup Page</Link>
                

        </div>
    
    );
}
function SignupPage() {
    throw new Error("Function not implemented.");
}

