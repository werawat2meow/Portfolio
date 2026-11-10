import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getFoodPhotos, getGalleryPhotos } from "@/lib/food-photos";
import { CulinaryExperience } from "@/components/culinary-experience";
import { WebExperience } from "@/components/web-experience";
import { getLocale } from "@/lib/server-locale";
import { translate } from "@/lib/language";

const experiences = {
  culinary: {
    kicker: "01 / THE CULINARY SIDE", title: "Culinary", word: "craft.", subtitle: "ประสบการณ์ด้านการทำอาหาร",
    description: "อีกด้านของฉันอยู่ในห้องครัว พื้นที่ที่ได้ลงมือสร้างสรรค์ผ่านอาหาร และเปลี่ยนความตั้งใจให้กลายเป็นสิ่งที่สัมผัสได้ผ่านรสชาติ",
    other: "web-development", otherLabel: "รู้จักมุม Web Developer",
  },
  "web-development": {
    kicker: "02 / THE DEVELOPER SIDE", title: "Digital", word: "craft.", subtitle: "ประสบการณ์ด้าน Web Developer",
    description: "อีกด้านของฉันอยู่บนหน้าจอ พื้นที่ที่ได้สร้างสรรค์ผ่านการพัฒนาเว็บไซต์ และเปลี่ยนไอเดียให้กลายเป็นประสบการณ์ที่ผู้คนเข้ามาใช้งานได้",
    other: "culinary", otherLabel: "รู้จักมุมการทำอาหาร",
  },
};
type Props = { params: Promise<{ field: string }> };
export function generateStaticParams() { return Object.keys(experiences).map((field) => ({ field })); }
function getExperience(field: string) {
  if (field !== "culinary" && field !== "web-development") notFound();
  return experiences[field];
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { field } = await params;
  const experience = getExperience(field);
  const locale = await getLocale();
  return {
    title: `${translate(locale, experience.subtitle)} | ${locale === "en" ? "My Portfolio" : "แฟ้มผลงานของฉัน"}`,
    description: locale === "th" ? experience.description : field === "culinary"
      ? "Explore my culinary work, one plate at a time. A collection from my kitchen, made with care."
      : "Explore my web development work on desktop and mobile. Ideas brought to life on every screen.",
  };
}
export default async function ExperiencePage({ params }: Props) {
  const { field } = await params;
  getExperience(field);
  if (field === "culinary") return <CulinaryExperience photos={await getFoodPhotos()} />;
  return <WebExperience photos={await getGalleryPhotos("web-projects", "ภาพผลงานเว็บไซต์ที่")} />;
}
