import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import './Styles/globals.scss';
import Footer from '@/app/Components/footer/Footer';

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans',
});

export const metadata: Metadata = {
  title: 'STUTERN-Farm',
  description: 'Group 98',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={workSans.variable}>
      <body className={workSans.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
