import "./globals.css";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import SocialSidebar from "../components/common/SocialSidebar";

export const metadata = {
  title: "Pulak Graphics",
  description: "Print, Media & Live Coverage Company",
  icons: {
    icon:"/logo1.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="
          bg-gradient-to-b
          from-white
          via-slate-50
          to-white
          text-slate-900
          antialiased
          overflow-x-hidden
        "
      >
        <Navbar />

        <main>
          {children}
        </main>

        <Footer />
        <SocialSidebar />
      </body>
    </html>
  );
}