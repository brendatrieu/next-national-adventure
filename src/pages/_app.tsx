import '../styles/global.scss';
import type { AppProps } from 'next/app';
import MainLayout from '@/components/layout/MainLayout/MainLayout';
import { Oswald, Source_Sans_3 } from 'next/font/google';

export const oswald = Oswald({
  weight: '300',
  subsets: ['latin'],
});
export const sourceSans3 = Source_Sans_3({
  weight: ['300', '400'],
  subsets: ['latin'],
  variable: '--font-sourcesans3',
});

console.log(sourceSans3.style.fontFamily);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
