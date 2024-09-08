"use client"

import MainLayout from "@/src/components/layout/MainLayout";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <MainLayout>
            {children}
        </MainLayout>

    );
}
