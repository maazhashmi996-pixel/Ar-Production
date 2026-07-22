import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export const metadata = {
  title: "AR Productions | Software & Digital Solutions",
  description:
    "AR Productions offers software development, UX/UI design, and product strategy for modern businesses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
