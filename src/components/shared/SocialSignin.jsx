"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense } from "react";
import { BsGithub, BsGoogle } from "react-icons/bs";

// This component fetches the `redirect` parameter safely with Suspense.
const SearchParamsWrapper = ({ children }) => {
  const searchParams = useSearchParams();
  const path = searchParams?.get("redirect") || "/";
  return children(path);
};

const SocialSignin = () => {
  const router = useRouter();
  const session = useSession();

  const handleSocialLogin = (provider, path) => {
    const res = signIn(provider, {
      redirect: true,
      callbackUrl: path,
    });
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchParamsWrapper>
        {(path) => (
          <div className="flex items-center justify-center space-x-3">
            <button
              onClick={() => handleSocialLogin("google", path)}
              className="btn flex items-center justify-center text-green-500"
            >
              <BsGoogle />
            </button>

            <button
              onClick={() => handleSocialLogin("github", path)}
              className="btn flex items-center justify-center text-primary"
            >
              <BsGithub />
            </button>
          </div>
        )}
      </SearchParamsWrapper>
    </Suspense>
  );
};

export default SocialSignin;
