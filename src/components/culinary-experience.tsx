"use client";

import { useLanguage, LanguageSwitcher } from "@/components/language-provider";
import Image from "next/image";
import Link from "next/link";
import type { FoodPhoto } from "@/lib/food-photos";
import { FoodGallery } from "@/components/food-gallery";

export function CulinaryExperience({ photos }: { photos: FoodPhoto[] }) {
  const { t } = useLanguage();
  const cover = photos[0];
  return (
    <div className="site-shell culinary-shell">
      <header className="site-header"><Link href="/" className="wordmark"><span className="brand-star" aria-hidden="true">✳</span> {t("my portfolio")}<span className="wordmark-dot">.</span></Link><span className="header-note">{t("A DIFFERENT SIDE. THE SAME PASSION.")}</span><div className="header-actions"><Link href="/#choose" className="header-link">{t("กลับหน้า Intro")} <span aria-hidden="true">↗</span></Link><LanguageSwitcher/></div></header>
      <main>
        <section className="food-hero" aria-labelledby="food-title">
          <div className="food-hero-copy"><Link href="/#choose" className="back-link">{t("← สองเส้นทางของฉัน")}</Link><p className="food-kicker"><span/> {t("01 / THE CULINARY SIDE")}</p><h1 id="food-title">{t("A little flavor.")}<br/>{t("A lot of")} <em>{t("heart.")}</em></h1><h2>{t("เรื่องราวของฉัน ผ่านอาหารแต่ละจาน")}</h2><p className="food-hero-description">{t("อีกมุมของฉันอยู่ในห้องครัว ที่ที่ความคิดสร้างสรรค์")}<br className="desktop-break"/> {t("ถ่ายทอดออกมาผ่านรสชาติ และความใส่ใจในทุกจาน")}</p><a href="#food-collection" className="food-collection-link">{t("ชมผลงานการทำอาหาร")} <span aria-hidden="true">↓</span></a><div className="food-hero-footnote"><span aria-hidden="true">✳</span><p>{t("Made by hand. Served with care.")}<br/><span>{t("จากความตั้งใจ สู่สิ่งที่อยู่ตรงหน้า")}</span></p></div></div>
          {cover && <div className="food-cover-wrap"><div className="food-cover"><Image src={cover.src} alt={t(cover.alt)} fill sizes="(max-width: 700px) 90vw, 520px" priority/><span className="cover-label">{t("FROM MY KITCHEN, WITH LOVE")}</span></div><div className="food-cover-stamp" aria-hidden="true"><span>{t("MADE WITH")}</span><strong>{t("ใจ")}</strong><span>{t("A PERSONAL TOUCH")}</span></div><p className="food-cover-caption"><span>{t("THE CULINARY DIARY")}</span><span>{t("อาหาร • ความคิดสร้างสรรค์ • ความตั้งใจ")}</span></p></div>}
        </section>
        <section id="food-collection" className="food-collection" aria-labelledby="collection-title">
          <div className="food-collection-heading"><div><p className="food-kicker">{t("A COLLECTION OF LITTLE JOYS")}</p><h2 id="collection-title">{t("จากครัว")} <em>{t("สู่จาน.")}</em></h2><p className="food-collection-description">{t("ผลงานการทำอาหารในมุมของฉัน — คลิกที่ภาพเพื่อดูรายละเอียดใกล้ ๆ")}</p></div><span className="food-count">{String(photos.length).padStart(2, "0")} <span>{t("PHOTOGRAPHS")}</span></span></div>
          {photos.length ? <FoodGallery photos={photos}/> : <p className="food-empty">{t("แล้วจะนำภาพอาหารจากครัวมาแบ่งปันให้ชมกันเร็ว ๆ นี้")}</p>}
        </section>
        <section className="food-outro"><span aria-hidden="true">✳</span><p>{t("Good food tells a story.")}</p><h2>{t("นี่คือเรื่องราวในครัวของฉัน")}<br/>{t("อีกเรื่องราวหนึ่ง อยู่บนหน้าจอ")}</h2><Link href="/experience/web-development" className="other-side">{t("รู้จักมุม Web Developer")} <span aria-hidden="true">↗</span></Link></section>
      </main>
      <footer className="site-footer"><span>© {new Date().getFullYear()} {t("MY PERSONAL PORTFOLIO")}</span><span>{t("COOKED WITH CARE")} <span className="footer-star" aria-hidden="true">✳</span></span></footer>
    </div>
  );
}
