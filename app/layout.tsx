import { Providers } from '@/shared/components/shared/providers';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css';

const nunito = Nunito({
    subsets: ['cyrillic'],
    variable: '--font-nunito',
    weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
    title: {
        default: 'Cовременный интернет-магазин на Next.js',
        template: '%s | Next Coffee',
    },
    description:
        'Современный интернет-магазин на Next.js 14 с SEO‑оптимизацией. Быстрый, удобный и оптимизированный для поисковых систем.',
    keywords: [
        'Next.js',
        'SEO',
        'React',
        'web development',
        'frontend',
        'верстка',
        'веб‑разработка',
    ],
    metadataBase: new URL('https://next-pizza-gilt.vercel.app'),
    openGraph: {
        title: 'Next Coffee',
        description:
            'Современный интернет-магазин на Next.js 14 — скорость, надежность и SEO.',
        url: 'https://next-pizza-gilt.vercel.app',
        siteName: 'Next Coffee',
        images: [
            {
                url: '/logo.png',
                width: 1200,
                height: 630,
                alt: 'Next Coffee',
            },
        ],
        locale: 'ru_RU',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Твой проект',
        description: 'Современный интернет-магазин, созданный на Next.js 14',
        images: ['/logo.png'],
        creator: '@nextjs',
    },
    alternates: {
        canonical: 'https://next-pizza-gilt.vercel.app',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-snippet': -1,
            'max-image-preview': 'large',
            'max-video-preview': -1,
        },
    },
    icons: {
        icon: '/logo.png',
    },
    category: 'technology',
};

export default function RootLayout({
    children,
}: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="ru">
            <body className={nunito.variable}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
