"use client";

import { useLanguage } from "@/components/language-provider";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { FoodPhoto } from "@/lib/food-photos";

export function FoodGallery({ photos, variant = "food" }: { photos: FoodPhoto[]; variant?: "food" | "web" }) {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const isOpen = selected !== null;
  const photo = selected === null ? null : photos[selected];

  useEffect(() => {
    if (!isOpen) return;
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    element?.showModal();
    return () => {
      element?.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  function move(direction: number) {
    setSelected((current) => current === null ? null : (current + direction + photos.length) % photos.length);
  }

  function renderPhoto(item: FoodPhoto, index: number) {
    return (
      <figure className="food-tile" key={item.src}>
        <button type="button" className="food-photo-button" onClick={() => setSelected(index)} aria-label={`${t("เปิดดูภาพใหญ่")} ${t(item.alt)}`} aria-haspopup="dialog">
          <Image src={item.src} alt={t(item.alt)} width={item.width} height={item.height} sizes={variant === "food" ? "(max-width: 600px) calc(100vw - 44px), (max-width: 900px) 45vw, 360px" : item.width > item.height ? "(max-width: 700px) 90vw, 550px" : "(max-width: 600px) 44vw, 230px"} />
          <span className="food-zoom" aria-hidden="true">↗</span><span className="food-photo-hint">{t("VIEW THE DETAILS")}</span>
        </button>
        <figcaption><span className="food-photo-number">{item.number}</span><span>{variant === "food" ? t("จากครัวสู่จาน") : item.width > item.height ? t("Desktop experience") : t("Mobile experience")}</span><span className="food-caption-star" aria-hidden="true">{variant === "food" ? "✳" : "⌘"}</span></figcaption>
      </figure>
    );
  }

  return (
    <>
      {variant === "food" ? <div className="food-masonry">{photos.map(renderPhoto)}</div> : <div className="web-gallery">
        {[{ title: t("The bigger picture."), subtitle: t("DESKTOP VIEWS"), mobile: false }, { title: t("Every detail, on the go."), subtitle: t("MOBILE VIEWS"), mobile: true }].map((group) => {
          const items = photos.map((item, index) => ({ item, index })).filter(({ item }) => (item.height > item.width) === group.mobile);
          return items.length ? <section className="web-gallery-group" key={group.subtitle}><div className="web-group-heading"><h3>{group.title}</h3><span>{group.subtitle} / {String(items.length).padStart(2, "0")}</span></div><div className={group.mobile ? "web-mobile-grid" : "web-desktop-grid"}>{items.map(({ item, index }) => renderPhoto(item, index))}</div></section> : null;
        })}
      </div>}
      <dialog ref={dialog} className="food-lightbox" aria-labelledby="food-lightbox-title" onClose={() => setSelected(null)} onClick={(event) => { if (event.target === event.currentTarget) setSelected(null); }} onKeyDown={(event) => {
        if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
        if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
      }}>
        {photo && <>
          <div className="lightbox-top"><div><span className="lightbox-kicker">{variant === "food" ? t("THE CULINARY COLLECTION") : t("THE DIGITAL COLLECTION")}</span><h2 id="food-lightbox-title">{t(photo.alt)}</h2></div><button type="button" className="lightbox-close" onClick={() => setSelected(null)} aria-label={t("ปิดภาพใหญ่")} autoFocus>✕</button></div>
          <div className="lightbox-image"><Image src={photo.src} alt={t(photo.alt)} fill sizes="(max-width: 900px) 92vw, 1100px" quality={90} /></div>
          <div className="lightbox-bottom"><button type="button" onClick={() => move(-1)} aria-label={t("ดูภาพก่อนหน้า")}>← <span>{t("ก่อนหน้า")}</span></button><p aria-live="polite">{photo.number}<span> / {String(photos.length).padStart(2, "0")}</span></p><button type="button" onClick={() => move(1)} aria-label={t("ดูภาพถัดไป")}><span>{t("ถัดไป")}</span> →</button></div>
        </>}
      </dialog>
    </>
  );
}
