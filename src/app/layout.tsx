import { Geist } from "next/font/google";

import "@/styles/globals.css";

const geistSans = Geist({
    weight: ["400", "500"],
    subsets: ["latin"],
    display: "swap",
    preload: true,
    variable: "--geist-sans",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="en" className={geistSans.variable}>
            <body>
                <main className="flex min-h-dvh w-full flex-col items-center px-5 py-8 sm:px-8">
                    {children}
                </main>
            </body>
        </html>
    );
}
