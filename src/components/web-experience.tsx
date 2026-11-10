"use client";

import { useLanguage, LanguageSwitcher } from "@/components/language-provider";
import Image from "next/image";
import Link from "next/link";
import type { FoodPhoto } from "@/lib/food-photos";
import { FoodGallery } from "@/components/food-gallery";

export function WebExperience({ photos }: { photos: FoodPhoto[] }) {
  const { t } = useLanguage();
  const desktop = photos.find((photo) => photo.width >= photo.height);
  const mobile = photos.find((photo) => photo.height > photo.width);
  return (
    <div className="site-shell web-shell">
      <header className="site-header"><Link href="/" className="wordmark"><span className="brand-star" aria-hidden="true">✳</span> {t("my portfolio")}<span className="wordmark-dot">.</span></Link><span className="header-note">{t("THOUGHTFULLY BUILT. BEAUTIFULLY SIMPLE.")}</span><div className="header-actions"><Link href="/#choose" className="header-link">{t("กลับหน้า Intro")} <span aria-hidden="true">↗</span></Link><LanguageSwitcher/></div></header>
      <main>
        <section className="web-hero" aria-labelledby="web-title">
          <div className="web-hero-copy"><Link href="/#choose" className="back-link">{t("← สองเส้นทางของฉัน")}</Link><p className="food-kicker"><span/> {t("02 / THE DEVELOPER SIDE")}</p><h1 id="web-title">{t("From an idea.")}<br/>{t("To")} <em>{t("experience.")}</em></h1><h2>{t("สร้างประสบการณ์ ผ่านทุกหน้าจอ")}</h2><p className="food-hero-description">{t("อีกมุมของฉันคือการพัฒนาเว็บไซต์")}<br/>{t("เปลี่ยนความคิดให้เป็นหน้าตาและการใช้งานที่สัมผัสได้จริง")}</p><a href="#web-collection" className="food-collection-link">{t("ชมผลงานเว็บไซต์")} <span aria-hidden="true">↓</span></a><p className="web-hero-footnote"><span aria-hidden="true">⌘</span> {t("Different screens. The same attention to detail.")}</p></div>
          <div className="web-hero-stage" aria-label={t("ตัวอย่างผลงานเว็บไซต์บนคอมพิวเตอร์และมือถือ")}><span className="web-stage-label">{t("A LITTLE LOOK AT WHAT I BUILD")}</span><div className="web-stage-orbit" aria-hidden="true"/>{desktop && <div className="web-hero-browser"><div className="web-browser-bar"><span>● ● ●</span><span>{t("DESKTOP EXPERIENCE")}</span><span>↗</span></div><Image src={desktop.src} alt={t(desktop.alt)} width={desktop.width} height={desktop.height} priority sizes="(max-width: 700px) 85vw, 520px"/></div>}{mobile && <div className="web-hero-phone"><Image src={mobile.src} alt={t(mobile.alt)} width={mobile.width} height={mobile.height} sizes="160px" priority/></div>}<span className="web-stage-badge"><span>✓</span> {t("Built for real screens.")}</span><span className="web-stage-spark" aria-hidden="true">✳</span></div>
        </section>
        <section id="web-collection" className="food-collection" aria-labelledby="web-collection-title"><div className="food-collection-heading"><div><p className="food-kicker">{t("THE DIGITAL COLLECTION")}</p><h2 id="web-collection-title">{t("ไอเดียที่กลายเป็น")} <em>{t("ผลงาน.")}</em></h2><p className="food-collection-description">{t("ภาพจากเว็บไซต์ที่เคยทำ ทั้งบนคอมพิวเตอร์และมือถือ — คลิกเพื่อดูภาพใหญ่")}</p></div><span className="food-count">{String(photos.length).padStart(2, "0")} <span>{t("SCREENSHOTS")}</span></span></div>{photos.length ? <FoodGallery photos={photos} variant="web"/> : <p className="food-empty">{t("แล้วจะนำภาพผลงานเว็บไซต์มาแบ่งปันให้ชมกันเร็ว ๆ นี้")}</p>}</section>
        <section className="food-outro web-outro"><span aria-hidden="true">⌘</span><p>{t("Thoughtful, down to the last detail.")}</p><h2>{t("จากความใส่ใจบนหน้าจอ")}<br/>{t("สู่ความตั้งใจในห้องครัว")}</h2><Link href="/experience/culinary" className="other-side">{t("รู้จักมุมการทำอาหาร")} <span aria-hidden="true">↗</span></Link></section>
      </main>
      <footer className="site-footer"><span>© {new Date().getFullYear()} {t("MY PERSONAL PORTFOLIO")}</span><span>{t("BUILT WITH CARE")} <span className="footer-star" aria-hidden="true">⌘</span></span></footer>
    </div>
  );
}
