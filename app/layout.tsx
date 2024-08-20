import "./globals.css";
import type { Metadata } from "next";
import { Inter, Noto_Sans_Display, Source_Code_Pro } from "next/font/google";
import { Providers } from "./providers";

const inter = Inter({
    weight: ["400", "600", "700"],
    subsets: ["latin"],
    display: "block",
    variable: "--font-inter",
});

const noto = Noto_Sans_Display({
    weight: ["500"],
    subsets: ["latin"],
    display: "block",
    variable: "--font-noto",
});

const source = Source_Code_Pro({
    weight: ["400", "500", "700"],
    subsets: ["latin"],
    display: "block",
    variable: "--font-source",
});

export const metadata: Metadata = {
    title: "Smart Digitize Landing",
    description: "Smart Digitize Landing",
};
//favico
<link rel="icon" href="/favicon.ico" />

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <meta name="product-name" content="Digitalized" />
                <meta
                    property="og:description"
                    content="Launch your design by subscription service in minutes"
                />
            </head>
            <body
                className={`${inter.variable} ${noto.variable} ${source.variable} bg-palette-9 font-sans text-caption-2 text-palette-7 antialiased`}
            >
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
