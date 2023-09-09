import { ClerkProvider } from "@clerk/nextjs";
import { Metadata } from "next";
import { Inter } from "next/font/google";

import "../globals.css";

export const metadata: Metadata = {
    title: "Threads Clone",
    description: "Threads Clone built by Jakub Fronczyk",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider>
            <html lang="eng">
                <body className={`${inter.className} bg-black`}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
