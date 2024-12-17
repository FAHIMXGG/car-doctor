import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
    const navItems = [
        {
            title: 'Home',
            Path: '/'
        },
        {
            title: 'About',
            Path: '/about'
        },
        {
            title: 'Services',
            Path: '/services'
        },
        {
            title: 'Blog',
            Path: '/blog'
        },
        {
            title: 'Contacts',
            Path: '/contacts'
        },
    ]
    return (
        <div className='bg-base-100 text-slate-900'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    {/* <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div> */}
                    <Link href='/'>
                        <Image alt='logo' src="/assets/logo.svg" height={40} width={60} />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className='flex items-center space-x-6'>
                        {
                            navItems.map((item, index) => (
                                <Link className='font-semibold hover:text-primary duration-300' href={item.Path} key={item.Path}>
                                    {item.title}
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <div className="navbar-end">
                    <div className='flex space-x-3 items-center'>
                        <CiShoppingCart  className='text-xl '/>
                        <CiSearch  className='text-xl '/>
                        <Link href='/' className="btn btn-outline btn-primary px-8">Appointment</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;