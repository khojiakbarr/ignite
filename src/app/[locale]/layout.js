import localFont from "next/font/local";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import "../globals.css";
import { AOSInit } from "@/aos";
// import SpeedLimitWrapper from "@/components/SpeedLimitScroll";
import LocomotiveScrollProvider from "@/providers/Locomotivescroll";

const montserrat = localFont({
  src: "../../../public/fonts/Montserrat-VariableFont_wght.ttf",
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Ignite",
  description: "рекламное агентство полного цикла",
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
          </LocomotiveScrollProvider>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
