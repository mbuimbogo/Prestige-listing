import Header from "@/components/Header";
import "./globals.css";
import Providers from "./Providers";

export const metadata = {
  title: "Realtor App",
  description: "Property Listing app by nextjs 13",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
