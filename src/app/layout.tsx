import type { Metadata } from "next";
import NextTopLoader from 'nextjs-toploader';
import "./globals.css";
import Layout from "@/components/hoc/main-layout";

export const metadata: Metadata = {
  title: "Zestia Admin Console",
  description: "Admin dashboard for Zestia — user analytics, coupons & affiliate management",
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <NextTopLoader />
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
