"use client";

import { cn } from "@/lib/utils";
import { BarChart4, GalleryThumbnails, ListStart, MapPin } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MainNav = ({ className }: React.HTMLAttributes<HTMLElement>) => {
  const pathName = usePathname();

  const routes = [
    {
      href: `/dashboard`,
      label: "Overview",
      active: pathName,
      icon: <BarChart4 />,
    },
    {
      href: `/news`,
      label: "News",
      active: pathName === `/news`,
      icon: <GalleryThumbnails />,
    },
    {
      href: `/category`,
      label: "Category",
      active: pathName === `/category`,
      icon: <ListStart />,
    },
    {
      href: `/location`,
      label: "Location",
      active: pathName === `/location`,
      icon: <MapPin />,
    },
  ];

  return (
    <nav
      className={cn(
        "items-center space-x-4 lg:space-x-6 hidden lg:flex",
        className
      )}
    >
      {routes.map((route) => (
        <Link
          href={route.href}
          key={route.href}
          className={cn(
            "text-sm font-medium transition-colos hover:text-primary",
            route.active
              ? "text-black dark:text-white"
              : "text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
