"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

import * as React from "react";

import { cn } from "@/lib/utils";
import Image from "next/image";

const components: { title: string; category: string, href: string }[] = [
  {
    title: "Modular Kitchen",
    category: "interiors",
    href: "/categorie/modular kitchen",
  },
  {
    title: "Wardrobes",
    category: "interiors",
    href: "/categorie/wardrobes",
  },
  {
    title: "TV units",
    category: "interiors",
    href: "/categorie/tv units",
  },
  {
    title: "Wooden beds",
    category: "beds",
    href: "/categorie/wooden beds",
  },
  {
    title: "Upholstery Beds",
    category: "beds",
    href: "/categorie/upholstery beds",
  },
  {
    title: "Wooden dining",
    category: "dining",
    href: "/categorie/wooden dining",
  },
  {
    title: "PVD dining",
    category: "dining",
    href: "/categorie/pvd dining",
  },
];

const interiorComponents = components.filter(
  (component) => component.category === "interiors"
);
const bedComponents = components.filter(
  (component) => component.category === "beds"
);
const diningComponents = components.filter(
  (component) => component.category === "dining"
);

export function NavBarlinksMenu() {
  return (
    <NavigationMenu className="font-gt">
      <NavigationMenuList className="bg-transparent">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            Sofa
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-4">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/categorie/corner sofa"
                  >
                    <Image
                      className="h-full w-full object-cover rounded-xl"
                      width={250}
                      height={260}
                      src={
                        "https://plus.unsplash.com/premium_photo-1683141389818-77fd3485334b?q=80&w=1538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      }

                      alt="Sofa set"
                    />
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Corner Sofa
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed sofas for all your needs.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/categorie/lounger sofa" title="Lounger Sofa"></ListItem>
              <ListItem href="/categorie/wooden sofa" title="Wooden Sofa"></ListItem>
              <ListItem href="/categorie/3+2 sofa" title="3 + 2 Sofa"></ListItem>
              <ListItem href="/categorie/wing chairs" title="Wing Chairs"></ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:scale-105 hover:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent bg-brand-bg-DEFALUT">
            Interiors
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[380px] md:grid-rows-3">
              {/* i want to filter out the components based on their categories, in this i want the category to be interiors */}

              {interiorComponents.map((component, i) => (
                <Link href={component.href} key={i}>

                  <ListItem
                    key={component.title}
                    title={component.title}
                  ></ListItem>
                </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:scale-105 hover:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
            Beds
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[380px] md:grid-rows-2">
              {bedComponents.map((component, i) => (
                <Link href={component.href} key={i}>
                  <ListItem
                    key={component.title}
                    title={component.title}
                  ></ListItem>
                </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:scale-105 hover:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
            Dining
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[380px] md:grid-rows-2">
              {diningComponents.map((component, i) => (
                <Link href={component.href} key={i}>
                  <ListItem
                    key={component.title}
                    title={component.title}
                  ></ListItem>
                </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

// export default NavBarlinksMenu;
