import React from 'react'
import {Button} from "@nextui-org/button";
import {
    Navbar, 
    NavbarBrand, 
    NavbarContent, 
    NavbarItem, 
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem
  } from "@nextui-org/react";
import Logo from './logo';
import { UserButton } from "@clerk/nextjs";

  


const Header = () => {
  return (
    <header className='mt-6 flex items-center'>
       <Navbar>
        <NavbarBrand>
            <Logo />
        </NavbarBrand>
        <NavbarContent
        justify='end'
        >   
       <UserButton />
        </NavbarContent>
       </Navbar>
    </header>
  )
}

export default Header