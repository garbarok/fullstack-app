import GlassPane from "@/components/GlassPane";
import "@/styles/global.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function AuthRootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="h-screen w-screen rainbow-mesh p-6">
        <GlassPane className="w-full h-full flex items-center justify-center">
          {children}
        </GlassPane>
      </body>
    </html>
  );
}