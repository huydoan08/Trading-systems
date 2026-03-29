import { ThemeProvider } from "@/components/providers/theme-provider";
import { Cursor } from "@/components/Cursor";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.APP_URL
      ? `${process.env.APP_URL}`
      : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : `http://localhost:${process.env.PORT || 3000}`
  ),
  title: "Huy Doan",
  description:
    "",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    url: "/",
    title: "Huy Doan",
    description:
      "",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Huy Doan",
    description:
      ""
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Cursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
