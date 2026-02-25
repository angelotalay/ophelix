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

const MENU_LINKS = [
  {
    label: "Why Ophelix Exists",
    link: "/why-ophelix",
  },
  {
    label: "Service Promise",
    link: "/service-promise",
  },
  {
    label: "Your Concerns",
    link: "/your-concerns",
  },
];

function ShopJewelButton() {
  return (
    <Button
      variant={"outline"}
      className={"rounded-full  bg-white text-primary h-fit"}
      size={"sm"}
    >
      Shop Jewel
    </Button>
  );
}

function UserButton() {
  return (
    // For now, we have the hover accent do nothing ß
    <Button
      variant={"ghost"}
      size={"icon-lg"}
      className={"hover:bg-extra-dark"}
    >
      <UserIcon className={"text-white size-6"} />
    </Button>
  );
}

export default function NavBar() {
  return (
    <NavigationMenu color="primary" className="bg-primary w-full">
      <Container minor className="w-full">
        <NavigationMenuList className="flex w-full items-center justify-between">
          <NavigationMenuItem>
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
      </Container>
    </NavigationMenu>
  );
}
