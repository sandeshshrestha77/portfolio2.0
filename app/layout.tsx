import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sandesh Shrestha - Graphic Designer & Motion Creative",
  description:
    "Portfolio of Sandesh Shrestha, a professional graphic designer specializing in branding, motion graphics, and video editing based in Kathmandu, Nepal.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://www.sandeshshrestha.xyz" />
        <meta property="og:title" content="Sandesh Shrestha - Graphic Designer & Motion Creative" />
        <meta property="og:description" content="Portfolio of Sandesh Shrestha, a professional graphic designer specializing in branding, motion graphics, and video editing based in Kathmandu, Nepal." />
        <meta property="og:image" content="/images/branding.jpg" />
        <meta property="og:url" content="https://www.sandeshshrestha.xyz" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sandesh Shrestha - Graphic Designer & Motion Creative" />
        <meta name="twitter:description" content="Portfolio of Sandesh Shrestha, a professional graphic designer specializing in branding, motion graphics, and video editing based in Kathmandu, Nepal." />
        <meta name="twitter:image" content="/images/branding.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Sandesh Shrestha",
              "jobTitle": "Graphic Designer & Motion Creative",
                "url": "https://www.sandeshshrestha.xyz",
              "sameAs": [
                "https://instagram.com/sandesh__shrestha",
                "https://linkedin.com/in/sandeshshrestha7",
                "https://behance.net/sandeshshrestha11"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
