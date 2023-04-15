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
    link: "/",
  },
  { label: "Profile", icon: "User", link: "/" },
  {
    label: "Settings",
    icon: "Settings",
    link: "/",
  },
];

const Sidebar = () => {
  return (
    <Card className="h-full w-40 flex items-center justify-between flex-wrap">
      <div className="w-full flex justify-center items-center">
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
