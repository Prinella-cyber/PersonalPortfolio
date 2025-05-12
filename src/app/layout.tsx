import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  viewportFit: 'cover',
};

export const metadata = {
  title: 'DevPortfolio - Web Developer Portfolio',
  description: 'A modern portfolio site showcasing my projects, skills, and journey as a web developer.',
  keywords: 'web developer, portfolio, frontend, backend, full-stack, react, nextjs',
};

// Reference: https://www.youtube.com/watch?v=HU6vGtKGSsM

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={inter.className}
      >
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
