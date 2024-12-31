"use client";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import SocialSignin from "@/components/shared/SocialSignin";

const SearchParamsWrapper = ({ children }) => {
    const searchParams = useSearchParams();
    const redirectPath = searchParams?.get("redirect") || "/";
    return children(redirectPath);
};

const Login = () => {
    const router = useRouter();

    const handleLogin = async (event, redirectPath) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        const res = await signIn("credentials", {
            email,
            password,
            redirect: true,
            callbackUrl: redirectPath,
        });

        if (res?.status === 200) {
            router.push(redirectPath);
        }
    };

    return (
        <div className="container px-24 mx-auto py-24">
            <div className="grid grid-cols-2 gap-12 items-center">
                <div>
                    <Image
                        src="/assets/images/login/login.svg"
                        height="540"
                        width="540"
                        alt="login image"
                    />
                </div>
                <div className="border-2 p-12">
                    <h6 className="text-3xl font-semibold text-primary text-center mb-12">
                        Sign In
                    </h6>
                    <Suspense fallback={<div>Loading...</div>}>
                        <SearchParamsWrapper>
                            {(redirectPath) => (
                                <form
                                    onSubmit={(event) => handleLogin(event, redirectPath)}
                                    action=""
                                >
                                    <label htmlFor="email">Email</label> <br />
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="your email"
                                        className="mt-3 w-full input input-bordered"
                                    />
                                    <br /> <br />
                                    <label htmlFor="password">Password</label> <br />
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="your password"
                                        className="w-full mt-3 input input-bordered"
                                    />
                                    <br />
                                    <button
                                        type="submit"
                                        className="w-full btn btn-primary mt-12 text-lg mb-5"
                                    >
                                        Sign In
                                    </button>
                                    <SocialSignin />
                                </form>
                            )}
                        </SearchParamsWrapper>
                    </Suspense>
                    <div>
                        <h6 className="my-12 text-center">or sign in with</h6>
                        <h6 className="my-12 text-center">
                            Don&apos;t have an account?{" "}
                            <Link className="text-primary font-semibold" href="/signup">
                                Sign Up
                            </Link>
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
