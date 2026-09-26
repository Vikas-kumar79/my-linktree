import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "BitTree - Your favorite link sharing site",
  description: "Share your favorite links",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}