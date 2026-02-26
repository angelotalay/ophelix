"use client";
import React from "react";
import { UserIcon } from "@heroicons/react/24/outline";
import { OphelixText } from "@/components/icons/OphelixLogo";
import Container from "@/components/layout/Container";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import MENU_LINKS from "@/components/nav/navbar.copy";

function ShopJewelButton() {
  return (
    <Button
      variant={"outline"}
      className={"h-fit rounded-full bg-white text-primary"}
      size={"sm"}
    >
      Shop Jewel
    </Button>
  );
}

function UserButton() {
  return (
    // For now, we have the hover accent do nothing
    <Button variant={"ghost"} size={"icon-lg"} className="hover:bg-extra-dark">
      <UserIcon className="size-6 text-white" />
    </Button>
  );
}

export default function NavBar() {
  return (
    <NavigationMenu color="primary" className="w-full bg-primary">
      <div className="w-full md:px-12 md:py-4">
        <NavigationMenuList className="flex w-full items-center justify-between">
          <NavigationMenuItem className={"flex justify-start"}>
            <OphelixText />
          </NavigationMenuItem>
          <div className="flex items-center gap-4 text-primary-foreground">
            {MENU_LINKS.map((item) => (
              <NavigationMenuLink key={item.label} href={item.link}>
                {item.label}
              </NavigationMenuLink>
            ))}
            <ShopJewelButton />
            <UserButton />
          </div>
        </NavigationMenuList>
      </div>
    </NavigationMenu>
  );
}
