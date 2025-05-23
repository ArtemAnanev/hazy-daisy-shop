"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import brand from "@/public/img/BannerS.png";

import { Swiper as SwiperType } from "swiper/types";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { useLang } from "@/hooks/useLang";
import img1 from "@/public/img/budu-makaroni-swiper.png";
import img2 from "@/public/img/mam-swiper.png";
import img3 from "@/public/img/po4emu-swiper.png";
import img4 from "@/public/img/kid-t-shirt/budu-makaroni-b-2nobg.png";
import img5 from "@/public/img/kid-t-shirt/budu-makaroni-s-3nb.png";
import HeroSlide from "./HeroSlide";

import ProductSubtitle from "@/components/elements/ProductSubtitle/ProductSubtitle";
import styles from "@/styles/main-page/index.module.scss";
import stylesForAd from "@/styles/ad/index.module.scss";
import productSubtitleStyles from "@/styles/productSubtitle/index.module.scss";
import Image from "next/image";
import love from "@/public/img/BannerS.png";

const Hero = () => {
  const { lang, translations } = useLang();

  const slides = [
    {
      id: 1,
      title: `${translations[lang].main_page.tShirt} «Hazy Daisy» ${translations[lang].main_page.noodle}`,
      image: img1,
    },
    {
      id: 2,
      title: `${translations[lang].main_page.tShirt} «Hazy Daisy» ${translations[lang].main_page.mam}`,
      image: img2,
    },
    {
      id: 3,
      title: `${translations[lang].main_page.tShirt} «Hazy Daisy» ${translations[lang].main_page.why}`,
      image: img3,
    },
  ];

  const handleSlideClick = (e: SwiperType) => e.slideTo(e.clickedIndex);

  return (
    <section className={styles.hero}>
      <h1 className="visually-hidden">
        {translations[lang].main_page.hero_hidden_title}
      </h1>
      <div className={`container ${styles.hero__container}`}>
        <span className={stylesForAd.ad}>{translations[lang].common.ad}</span>
        <div>
          <Image
            src={brand}
            alt="brand"
            // className="transition-opacity opacity-0 duration"
            // onLoad={handleLoadingImageComplete}
          />
        </div>

        <h2 className={styles.hero__title}>
          {/*<span*/}
          {/*  className={`${styles.hero__title__subtitle} ${*/}
          {/*    lang === "ru" ? "" : styles.hero__title__subtitle_lang*/}
          {/*  }`}*/}
          {/*>*/}
          {/*  [ {translations[lang].main_page.hero_subtitle} ]*/}
          {/*</span>*/}
          {/*<span className={styles.hero__title__text}>*/}
          {/*  {translations[lang].main_page.hero_title}*/}
          {/*</span>*/}
        </h2>
      </div>
    </section>
  );
};

export default Hero;
