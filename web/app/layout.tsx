import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "@/components/navbar"
import MouseMoveEffect from "@/components/mouse-move-effect"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "ProxMenux - Menu-Driven Script for Proxmox Servers",
  generator: "Next.js",
  applicationName: "ProxMenux",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Proxmox VE",
    "Proxmox",
    "Proxmox Server",
    "proxmox helper scripts",
    "proxmox backups",
    "proxmox servers",
    "PVE",
    "ProxMenux",
    "MacRimi",
    "menu-driven",
    "menu script",
    "scripts",
    "virtualization",
    "automation",
    "server management",
    "VM management",
    "container management",
    "LXC",
  ],
  authors: [{ name: "MacRimi", url: "https://github.com/MacRimi" }],
  creator: "MacRimi",
  publisher: "MacRimi",
  description:
    "ProxMenux - Proxmox server management tool with interactive menu, proxmox backup solutions, and simplified administration for virtualization",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://proxmenux.com"),
  alternates: {
    canonical: "https://proxmenux.com",
  },
  openGraph: {
    title: "ProxMenux - Menu-Driven Script for Proxmox Servers",
    description:
      "ProxMenux - Proxmox server management tool with interactive menu, proxmox backup solutions, and simplified administration for virtualization",
    url: "https://proxmenux.com",
    siteName: "ProxMenux",
    images: [
      {
        url: "https://proxmenux.com/main.png",
        width: 1363,
        height: 735,
        alt: "ProxMenux - Proxmox VE Management Interface",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProxMenux - Menu-Driven Script for Proxmox Servers",
    description:
      "ProxMenux - Proxmox server management tool with interactive menu, proxmox backup solutions, and simplified administration for virtualization",
    images: ["https://proxmenux.com/main.png"],
    creator: "@MacRimi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "ProxMenux",
              description:
                "A powerful menu-driven script for Proxmox VE management, designed to simplify and streamline the execution of commands and tasks.",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Linux",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              author: {
                "@type": "Person",
                name: "MacRimi",
                url: "https://github.com/MacRimi",
              },
              url: "https://proxmenux.com",
              image: "https://proxmenux.com/main.png",
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <Navbar />
        <MouseMoveEffect />
        <div className="pt-16 md:pt-16">{children}</div>
      </body>
    </html>
  )
}
