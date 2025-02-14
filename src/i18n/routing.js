import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ru", "uz"], // Sayt qo'llab-quvvatlaydigan tillar
  defaultLocale: "ru", // Standart til
  localePrefix: "always", // locale doim URL'da bo'lishi kerak
  pathnames: {
    "/": "/",
    "/pathnames": "/pathnames",
  },
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
