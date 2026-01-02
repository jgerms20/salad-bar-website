import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fresh Greens | Farm Fresh Salads Made Daily",
  description: "Craft your perfect salad from our selection of premium ingredients, locally sourced and prepared fresh every morning. Experience the freshest, most delicious salads in town.",
  keywords: "salad, fresh, healthy food, local ingredients, organic, build your own salad, catering",
  openGraph: {
    title: "Fresh Greens | Farm Fresh Salads Made Daily",
    description: "Craft your perfect salad from our selection of premium ingredients, locally sourced and prepared fresh every morning.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fresh Greens | Farm Fresh Salads Made Daily",
    description: "Craft your perfect salad from our selection of premium ingredients, locally sourced and prepared fresh every morning.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
        style={{
          fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
