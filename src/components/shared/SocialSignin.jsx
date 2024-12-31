"use client"
import { signIn, useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { BsGithub, BsGoogle } from "react-icons/bs";

const SocialSignin = () => {
    const router = useRouter()
    const session = useSession()
    const searchParams = useSearchParams()
    const path = searchParams.get('redirect')
    const handleSocialLogin = (provider) => {
        const res = signIn(provider, { 
            redirect: true,
            callbackUrl: path ? path : '/' 
        });
    }
    
    return (
        <div className="flex items-center justify-center space-x-3">
            <button onClick={() => handleSocialLogin('google')} className="btn  flex items-center justify-center text-green-500">
                <BsGoogle />
            </button>

            <button onClick={() => handleSocialLogin('github')} className="btn  flex items-center justify-center text-primary">
                <BsGithub />
            </button>
        </div>
    );
};

export default SocialSignin;