"use client";
import React from "react";

import { OphelixFull, OphelixText } from "@/components/icons/OphelixLogo";
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
  },
  {
    label: "Service Promise",
  },
  {
    label: "Your Concerns",
  },
];

function ShopJewelButton() {
  return <Button variant={"secondary"}> Shop Jewel </Button>;
}

export default function NavBar() {
  return (
    <NavigationMenu color={"primary"} className={"bg-primary w-full block"}>
      <Container minor className={"w-full"}>
        <NavigationMenuList className={"w-full flex flex-row justify-between"}>
          <div>
            <NavigationMenuItem>
              <OphelixText />
            </NavigationMenuItem>
          </div>
          <div className={"flex flex-row text-primary-foreground gap-4"}>
            {MENU_LINKS.map((item) => (
              <NavigationMenuItem key={item.label}>
                {item.label}
              </NavigationMenuItem>
            ))}
            <ShopJewelButton />
          </div>
        </NavigationMenuList>
      </Container>
    </NavigationMenu>
  );
}
