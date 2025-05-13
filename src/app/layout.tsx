import "./globals.css";
import { Inter } from 'next/font/google';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

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
        <div className="portfolio">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
