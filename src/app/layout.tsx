import Providers from '@/lib/Providers';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'University Management',
    description: 'This is university management system',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <Providers>
            <html lang="en">
                <body className={inter.className}>{children}</body>
            </html>
        </Providers>
    );
}
