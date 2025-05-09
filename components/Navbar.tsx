"use client";

import React, { useState } from 'react'
import { Button } from "@/components/ui/Button";
import ThemeButton from './ui/ThemeButton';
import Link from "next/link";
import { SlMenu } from "react-icons/sl";
import { CgClose } from "react-icons/cg";


const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleOff = () => {
    setIsMenuOpen(false);
  };

  let Links = [
    {name: "Projects", link: "/#projectHighlights", newTab: false},
    {name: "Services", link: "/#expertise", newTab: false},
    {name: "About", link: "/#about", newTab: false},
    {name: "Resume", link: "/Asia-Thompson-Public-Resume.pdf", newTab: true},
    {name: "Contact", link: "/#contact", newTab: false}
]

const defaultNavbarStyle = `lg:flex gap-10 font-bold uppercase tracking-wider`

  return (
    <div>
      <div className='w-screen max-w-[1920px] sticky top-0 mx-auto p-6 md:px-12 lg:px-24 xl:px-32 xl:py-10  flex justify-between items-center z-20'>
        <div className='w-1/3 md:w-1/6 lg:w-32'>
          <Link href="/">
          <div className="relative w-40 h-auto">
            <img 
              src="/asia-thompson-logo.svg" 
              className="block dark:hidden w-full h-full" 
              alt='default light mode friendly logo'
            />
            <img 
            src="/asia-thompson-logo-dark.svg"  
            className="hidden dark:block w-full h-full" 
            alt='dark mode friendly logo'
            />
          </div>
          </Link>
        </div>
        <div className='flex gap-12'>
          <ThemeButton />
          <Button className="text-black dark:text-white" variant="outline" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <CgClose className='w-8 h-8'/> : <SlMenu className='w-8 h-8'/>}
          </Button>
          <nav className={isMenuOpen ? `absolute top-[125%] right-20 flex flex-col ${defaultNavbarStyle}` : `hidden`}>
            {
                Links.map((link) => (
                  <Link key={link.name} href={link.link} legacyBehavior passHref> 
                    <a 
                      className='hover:underline'
                      onClick={toggleOff}
                      target={link.newTab ? "_blank" : "_self"}
                      rel={link.newTab ? "noopener noreferrer" : undefined}
                    >
                      {link.name}
                    </a>
                  </Link>
                ))
            }
          </nav>
        </div>
      </div> 
      <div className={ isMenuOpen ? `fixed w-screen h-screen top-0 left-0 bg-white opacity-80 z-10 dark:bg-black` : `hidden`}>

      </div> 
    </div>
  )
}

export default Navbar