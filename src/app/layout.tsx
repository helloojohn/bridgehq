import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "../lib/registry";
import Theme from "../styles/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bridge - FInancial management made easy",
  description: "Bridge Finance is a modern day banking platform for Nigerians",
  icons: {
    icon: "/icons/bridge-favicon.png",
  },
  openGraph: {
    type: "website",
    url: "https://example.com",
    title: "Bridge - FInancial management made easye",
    description: "Bridge Finance is a modern day banking platform for Nigerians",
    siteName: "Bridge - FInancial management made easy",
    images: [{
      url: "https://example.com/og.png",
    }],
  }
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Theme>
            {children}
          </Theme>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}




