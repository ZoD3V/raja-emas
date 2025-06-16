"use client";

import { cn } from "@/lib/utils";
import { BarChart4, GalleryThumbnails, ListStart, MapPin } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MobileNavProps {
  active: boolean;
  className?: React.HTMLAttributes<HTMLElement>;
}

const MobileNav = ({ className, active }: MobileNavProps) => {
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
        `${
          active
            ? "absolute z-[999] right-5 top-20 flex flex-col w-[250px] bg-white dark:bg-black shadow-sm border border-gray-200 dark:border-gray-500 px-10 py-5 rounded-md transition-all duration-300 lg:hidden"
            : "hidden transition-all duration-300"
        }`,
        className
      )}
    >
      {routes.map((route) => (
        <Link
          href={route.href}
          key={route.href}
          className={cn(
            "font-medium transition-colors duration-200 hover:text-primary dark:hover:text-blue-400 py-2 text-base flex items-center justify-start",
            route.active
              ? "text-black dark:text-blue-400"
              : "text-muted-foreground dark:text-gray-400"
          )}
        >
          <div className="pr-4">{route.icon}</div>
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MobileNav;
