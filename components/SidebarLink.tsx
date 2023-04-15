"use client";
import Link from "next/link";
import { Settings, User, Grid, Calendar } from "react-feather";
import { usePathname } from "next/navigation"; // only works in client
import clsx from "clsx";
import { ElementType } from "react";

// Define a type for the icons object
interface IconsDictionary {
  [key: string]: ElementType;
}

// Create the icons object with the defined type
const icons: IconsDictionary = {
  Settings,
  User,
  Grid,
  Calendar,
};

// Define a type for the 'link' prop
interface SidebarLinkProps {
  link: {
    label: string;
    icon: string;
    link: string;
  };
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ link }) => {
  const pathname = usePathname();
  let isActive = false;

  if (pathname === link.link) {
    isActive = true;
  }

  const Icon = icons[link.icon];
  return (
    <Link href={link.link} className="w-full flex justify-center items-center">
      <Icon
        size={40}
        className={clsx(
          "stroke-gray-400 hover:stroke-violet-600 transition duration-200 ease-in-out",
          isActive && "stroke-violet-600"
        )}
      />
    </Link>
  );
};

export default SidebarLink;
