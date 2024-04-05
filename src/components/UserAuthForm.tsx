"use client"

import { signIn } from "next-auth/react";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";
const UserAuthForm = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const LoginwithGoogle = async() => {
        setIsLoading(true);
        try {
           await signIn('google') 
        }catch (error) {
            toast.error("Something went wrong")
        } finally{
            setIsLoading(false);
        }
    }

    return (  
        <div className="flex justify-center">
            <button onClick={LoginwithGoogle}>{isLoading ? null : <FaGoogle />}</button>
        </div>
    );
}
 
export default UserAuthForm;