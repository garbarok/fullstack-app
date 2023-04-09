import "@/styles/global.css";
import clsx from "clsx";
import GlassPane from "@/components/GlassPane";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function DashboardRootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="h-screen w-screen candy-mesh p-6">
        <GlassPane className="w-full h-full p-6 flex align-center container mx-auto">
          <Sidebar />
          <main className="w-full pl-6 h-full">{children}</main>
        </GlassPane>
      </body>
    </html>
  );
}
