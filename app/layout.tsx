import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOSInit from "@/components/AOSInit";

export const metadata: Metadata = {
  metadataBase: new URL('https://my-portfolio-beige-tau-68.vercel.app/'),
  title: "M Rayyan | Graphics & UI/UX Designer Portfolio",
  icons: {
    icon: "/my-logo.png",
  },
  description:
    "Portfolio of Muhammad Rayyan — Professional Graphics & UI/UX Designer with expertise in user-centered design, prototyping, animations, and digital creatives. Skilled in Figma, Adobe Photoshop, Illustrator, XD, Photopea, and Canva.",
  keywords: [
    "Muhammad Rayyan",
    "Rayyan UI UX Designer",
    "Graphics Designer",
    "UI Designer",
    "UX Designer",
    "UI/UX Designer Pakistan",
    "Figma Designer",
    "Visual Designer",
    "Product Designer",
    "Web UI Designer",
    "Mobile App UI Designer",
    "Prototyping",
    "User Experience Design",
    "User Interface Design",
    "Social Media Designer",
    "Creative Designer",
    "Design Portfolio"
  ],
  authors: [{ name: "Muhammad Rayyan" }],
  openGraph: {
    title: "Muhammad Rayyan | Graphics & UI/UX Designer",
    description:
      "Showcasing projects and skills of Muhammad Rayyan — UI/UX and Graphics Designer with expertise in Figma, prototyping, and digital design.",
    url: "https://my-portfolio-beige-tau-68.vercel.app/",
    siteName: "Muhammad Rayyan Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 600,
        alt: "Muhammad Rayyan Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AOSInit />
        <Navbar />
        <main> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
