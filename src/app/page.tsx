"use client";

import { useLanguage, LanguageSwitcher } from "@/components/language-provider";
import Link from "next/link";
import { CulinaryArt, DeveloperArt } from "@/components/experience-art";

export default function Home() {
  const { t } = useLanguage();
  return (
    <div className="site-shell">
      <header className="site-header">
        <Link href="/" className="wordmark" aria-label={t("หน้าหลัก")}><span className="brand-star" aria-hidden="true">✳</span> {t("my portfolio")}<span className="wordmark-dot">.</span></Link>
        <span className="header-note">{t("A LITTLE INTRODUCTION, A LOT OF PASSION")}</span>
        <div className="header-actions"><a className="header-link" href="#choose">{t("มารู้จักกัน")} <span aria-hidden="true">↗</span></a>
      <LanguageSwitcher/></div></header>
      <main>
        <section className="intro" aria-labelledby="intro-title">
          <div className="hello-label"><span className="hello-dot" /> {t("HELLO, NICE TO MEET YOU")}</div>
          <h1 id="intro-title">{t("One person.")}<br />{t("Two")} <em>{t("passions.")}</em><span className="title-spark" aria-hidden="true">✳</span></h1>
          <p className="intro-thai">{t("สร้างสรรค์ด้วยใจ ใส่ใจทุกรายละเอียด")}</p>
          <p className="intro-description">{t("จากความสุขในห้องครัว สู่การสร้างประสบการณ์บนหน้าจอ")}<br className="desktop-break" /> {t("สองเส้นทางที่ต่างกัน แต่มีความตั้งใจเดียวกัน")}</p>
          <div className="intro-caption"><span /> {t("A TASTE OF WHO I AM")} <span /></div>
          <span className="intro-decoration decoration-left" aria-hidden="true">＋</span><span className="intro-decoration decoration-right" aria-hidden="true">◌</span>
        </section>
        <section id="choose" className="choose-section" aria-labelledby="choose-title">
          <div className="section-heading"><h2 id="choose-title">{t("อยากรู้จักฉันในมุมไหน?")}</h2><p>{t("CHOOSE A SIDE. DISCOVER MY STORY.")} <span aria-hidden="true">↓</span></p></div>
          <div className="experience-grid">
            <Link href="/experience/culinary" className="experience-card culinary-card">
              <div className="card-art"><span className="art-label"><span /> {t("THE ART OF MAKING")}</span><CulinaryArt /><span className="art-bottom">{t("A little flavor. A lot of heart.")}</span></div>
              <div className="card-body"><div className="card-eyebrow"><span>{t("01 / THE CULINARY SIDE")}</span><span className="small-symbol" aria-hidden="true">✧</span></div><h3>{t("Culinary")} <em>{t("craft.")}</em></h3><p>{t("ประสบการณ์ด้านการทำอาหาร")}</p><div className="card-bottom"><span>{t("ความคิดสร้างสรรค์ที่เสิร์ฟผ่านรสชาติ")}</span><span className="card-arrow" aria-hidden="true">↗</span></div></div>
            </Link>
            <Link href="/experience/web-development" className="experience-card developer-card">
              <div className="card-art"><span className="art-label"><span /> {t("THE ART OF BUILDING")}</span><DeveloperArt /><span className="art-bottom">{t("Thoughtfully built. Beautifully simple.")}</span></div>
              <div className="card-body"><div className="card-eyebrow"><span>{t("02 / THE DEVELOPER SIDE")}</span><span className="small-symbol" aria-hidden="true">⌘</span></div><h3>{t("Digital")} <em>{t("craft.")}</em></h3><p>{t("ประสบการณ์ด้าน Web Developer")}</p><div className="card-bottom"><span>{t("เปลี่ยนไอเดียให้กลายเป็นประสบการณ์")}</span><span className="card-arrow" aria-hidden="true">↗</span></div></div>
            </Link>
          </div>
        </section>
        <div className="closing-note"><span aria-hidden="true">✳</span><p>{t("Different tools. Same attention to detail.")}<br /><span>{t("เพราะงานที่ดี เริ่มจากความใส่ใจเสมอ")}</span></p></div>
      </main>
      <footer className="site-footer"><span>© {new Date().getFullYear()} {t("MY PERSONAL PORTFOLIO")}</span><span>{t("MADE WITH CARE")} <span className="footer-star" aria-hidden="true">✳</span></span></footer>
    </div>
  );
}
