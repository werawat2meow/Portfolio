import { cookies } from "next/headers";
import { languageCookie, type Locale } from "@/lib/language";

export async function getLocale(): Promise<Locale> {
  return (await cookies()).get(languageCookie)?.value === "en" ? "en" : "th";
}
