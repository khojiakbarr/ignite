import localFont from "next/font/local";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import "../globals.css";
import { AOSInit } from "@/aos";
// import SpeedLimitWrapper from "@/components/SpeedLimitScroll";
import LocomotiveScrollProvider from "@/providers/Locomotivescroll";
import { Toaster } from "react-hot-toast";

const montserrat = localFont({
  src: "../../../public/fonts/Montserrat-VariableFont_wght.ttf",
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Ignite",
  description: "рекламное агентство полного цикла",
  // openGraph: {
  //   title: "Ignite",
  //   description: "рекламное агентство полного цикла",
  //   url: "https://www.ignitemedia.ru",
  //   type: "website",
  //   images: [
  //     {
  //       url: "https://www.ignitemedia.ru/bg_header.png",
  //       width: 1200,
  //       height: 400,
  //     },
  //   ],
  // },
  
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params; // params ni kutvolamz
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang="en">
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={`${montserrat.className} antialiased`}>
          <LocomotiveScrollProvider>
            {/* <ReactLenis> */}
            {/* <AOSInit> */}
            {children}
            {/* </AOSInit> */}
            {/* </ReactLenis> */}
            <Toaster />
          </LocomotiveScrollProvider>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
