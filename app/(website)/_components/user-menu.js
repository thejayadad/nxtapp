'use client'

import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";


const UserMenu = () => {
  return (
    <>
    <Dropdown>
    <DropdownTrigger>
    <Avatar
        isBordered
        as="button"
        className="transition-transform"
        color="secondary"
        name="Jason Hughes"
        size="md md:lg"
        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
    />
    </DropdownTrigger>
    <DropdownMenu aria-label="Profile Actions" variant="flat">
    <DropdownItem>
        Item 1
    </DropdownItem>

    </DropdownMenu>
    </Dropdown>
    </>
  )
}

export default UserMenu