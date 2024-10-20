import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
    title: "MinimalMind",
    description: "The greates app to save and keep your mind!",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <html lang="en">
            <body className="relative">
                {children}
            </body>
        </html>
    );
}
