import type { Metadata, Viewport } from "next";
import { Fraunces, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";
import ScrollProgress from "@/components/ScrollProgress";

// Display serif with real character (high-contrast, soft "old style" cut).
const display = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
});

// Clean, slightly humanist grotesque for body copy.
const body = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

// Monospace for labels, section numbers, and meta.
const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chukwudi-justin-portfolio.vercel.app"),
  title: "Chukwudi, AI Engineer & Automation Architect",
  description:
    "Chukwudi is a Full Stack Engineer & AI Automation Specialist who builds intelligent systems and automated workflows that help teams work smarter. Based in Canada.",
  keywords: [
    "AI Engineer",
    "Automation Architect",
    "n8n",
    "Make",
    "Airtable",
    "Power BI",
    "Workflow Automation",
    "Full Stack Developer",
  ],
  authors: [{ name: "Chukwudi" }],
  openGraph: {
    title: "Chukwudi, AI Engineer & Automation Architect",
    description:
      "I build intelligent systems and automated workflows that help teams work smarter.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chukwudi, AI Engineer & Automation Architect",
    description:
      "I build intelligent systems and automated workflows that help teams work smarter.",
  },
};

export const viewport: Viewport = {
  themeColor: "#15120E",
  width: "device-width",
  initialScale: 1,
};

// Applies the saved theme before paint to avoid a flash. Dark is the default;
// the `.light` class activates the warm paper palette.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.add('light');}}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-body antialiased">
        <ScrollProgress />
        <Background />
        {children}
      </body>
    </html>
  );
}
