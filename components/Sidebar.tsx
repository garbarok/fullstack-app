import Card from "./Card";
import Image from "next/image";
import logo from "@/assets/logo_transparent.png";
import SidebarLink from "./SidebarLink";
import Link from "next/link";

const links = [
  { label: "Home", icon: "Grid", link: "/home" },
  {
    label: "Calendar",
    icon: "Calendar",
    link: "/calendar",
  },
  { label: "Profile", icon: "User", link: "/profile" },
  {
    label: "Settings",
    icon: "Settings",
    link: "/settings",
  },
];

const Sidebar = () => {
  return (
    <Card className="flex h-full w-40 flex-wrap items-center justify-between">
      <div className="flex w-full items-center justify-center">
        <Link href="/">
          <Image src={logo} alt="GoalGlider logo" priority className="w-auto" />
        </Link>
      </div>
      {links.map((link) => (
        <SidebarLink link={link} key={link.link} />
      ))}
    </Card>
  );
};

export default Sidebar;
