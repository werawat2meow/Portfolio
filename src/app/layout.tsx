import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/language-provider";
import { getLocale } from "@/lib/server-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: locale === "en" ? "One person. Two passions. | My Portfolio" : "หนึ่งตัวตน สองเส้นทาง | แฟ้มผลงานของฉัน",
    description: locale === "en" ? "Two paths, one passion. Explore my culinary and web development work." : "สองเส้นทาง ความตั้งใจเดียวกัน — รู้จักประสบการณ์ด้านการทำอาหารและ Web Developer ผ่านพื้นที่ส่วนตัวของฉัน",
  };
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale();
  return <html lang={locale}><body><LanguageProvider initialLocale={locale}>{children}</LanguageProvider></body></html>;
}
