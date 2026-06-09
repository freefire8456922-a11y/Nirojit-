'use client';

import { ReactNode } from 'react';
import './styles/globals.css';

export const metadata = {
  title: 'Shivam Mobile Shop - Premium Mobile & Electronics Store',
  description: 'Best mobile phones and accessories store in Dullabcherra, Assam',
  openGraph: {
    title: 'Shivam Mobile Shop',
    description: 'Premium Mobile & Electronics Store',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0F172A" />
      </head>
      <body className="bg-white dark:bg-slate-900">
        {children}
      </body>
    </html>
  );
}