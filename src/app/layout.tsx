import type { Metadata } from "next";
import "../styles/globals.css";
import "../styles/animation.css";

export const metadata: Metadata = {
    title: "MinimalMind",
    description: "The greates app to save and keep your mind!",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" type="image" href="/assets/icon.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>
            </head>
            <body className="relative">
                {children}
            </body>
        </html>
    );
}
