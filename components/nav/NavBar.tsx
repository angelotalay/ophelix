"use client";
import React, { useRef, useEffect } from "react";
import { UserIcon } from "@heroicons/react/24/outline";
import { OphelixText } from "@/components/icons/OphelixLogo";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import RoundedButton from "@/components/buttons/RoundedButton";
import MENU_LINKS from "@/components/nav/navbar.copy";

function ShopJewelButton() {
  return (
    <RoundedButton variant={"outline"} size={"sm"} intent={"background"}>
      Shop Jewel
    </RoundedButton>
  );
}

function UserButton() {
  return (
    // For now, we have the hover accent do nothing also do we need a custom button here?
    <Button variant={"ghost"} size={"icon-lg"} className="hover:bg-extra-dark">
      <UserIcon className="size-6 text-white" />
    </Button>
  );
}

export default function NavBar() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const setHeight = (): void => {
      const height: number | undefined = ref.current?.offsetHeight;
      if (height) {
        document.documentElement.style.setProperty(
          "--navbar-height",
          `${height}px`,
        );
      }
    };

    setHeight();

    const resizeObserver = new ResizeObserver(setHeight);
    resizeObserver.observe(ref.current);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <NavigationMenu
      color="primary"
      className="sticky top-0 z-50 w-full bg-primary"
      ref={ref}
    >
      <div className="mx-auto w-full max-w-7xl md:px-12 md:py-4">
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
