import type { Metadata } from "next";
import ImageLightbox from "@/components/ImageLightbox";
import "./globals.css";

export const metadata: Metadata = {
  title: "Illustrator Portfolio",
  description: "Portfolio of an illustrator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-white text-black antialiased">
        <ImageLightbox>{children}</ImageLightbox>
      </body>
    </html>
  );
}
