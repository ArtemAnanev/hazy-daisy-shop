"use client";
import Image from "next/image";
import Link from "next/link";
import kids from "@/public/img/categories/kids_kategory.png";
import man from "@/public/img/categories/man_category.png";
import women from "@/public/img/categories/women category.png";
import love from "@/public/img/BannerS.png";
import { useLang } from "@/hooks/useLang";
import useImagePreloader from "@/hooks/useImagePreloader";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import MainSlider from "../MainSlider";
import AllLink from "@/components/elements/AllLink/AllLink";
import styles from "@/styles/main-page/index.module.scss";

const Categories = () => {
  const { lang, translations } = useLang();
  const isMedia490 = useMediaQuery(490);
  const { handleLoadingImageComplete, imgSpinner } = useImagePreloader();
  const imgSpinnerClass = imgSpinner ? styles.img_loading : "";

  const images = [
    { src: women, id: 1, title: translations[lang].main_page.category_clothes },
    { src: kids, id: 2, title: translations[lang].main_page.category_clothes },
    {
      src: man,
      id: 3,
      title: translations[lang].main_page.category_kids_sweet_shots,
    },
  ];

  return (
    <section className={styles.categories}>
      <div className={`container ${styles.categories}`}>
        <h2 className={`site-title ${styles.categories__title}`}>
          {translations[lang].main_page.category_title}
        </h2>

        <div className={styles.categories__inner}>
          <AllLink />
          {!isMedia490 && (
            <>
              <div className={styles.categories__left}>
                <div className={styles.categories__left__top}>
                  <Link
                    href="/catalog/women"
                    className={`${styles.categories__left__top__right} ${styles.categories__img} ${imgSpinnerClass}`}
                  >
                    <Image
                      src={women}
                      alt="Category women"
                      className="transition-opacity opacity-0 duration"
                      onLoad={handleLoadingImageComplete}
                    />
                    <br />
                    <span>{translations[lang].main_page.category_women}</span>
                  </Link>
                </div>
                <div className={styles.categories__left__top}>
                  <Link
                    href="/catalog/kids"
                    className={`${styles.categories__left__top__right} ${styles.categories__img} ${imgSpinnerClass}`}
                  >
                    <Image
                      src={kids}
                      alt="Kids"
                      className="transition-opacity opacity-0 duration"
                      onLoad={handleLoadingImageComplete}
                    />
                    <span>
                      {translations[lang].main_page.category_kids_sweet_shots}
                    </span>
                  </Link>
                </div>
                <div className={styles.categories__left__top}>
                  <Link
                    href="/catalog/man"
                    className={`${styles.categories__left__top__right} ${styles.categories__img} ${imgSpinnerClass}`}
                  >
                    <Image
                      src={man}
                      alt="Category man"
                      className="transition-opacity opacity-0 duration"
                      onLoad={handleLoadingImageComplete}
                    />
                    <span>{translations[lang].main_page.category_man}</span>
                  </Link>
                </div>
              </div>

              {/*<Link*/}
              {/*  href="/catalog/clothes"*/}
              {/*  className={`${styles.categories__right} ${styles.categories__img} ${imgSpinnerClass}`}*/}
              {/*>*/}
              {/*  <Image*/}
              {/*    src={img1}*/}
              {/*    alt="Cloth"*/}
              {/*    className="transition-opacity opacity-0 duration"*/}
              {/*    onLoad={handleLoadingImageComplete}*/}
              {/*  />*/}
              {/*  <span>{translations[lang].main_page.category_clothes}</span>*/}
              {/*</Link>*/}
              <div className={styles.categories__left}>
                {/*<div className={styles.categories__left__top}>*/}
                {/*  <Link*/}
                {/*    href="/catalog/accessories"*/}
                {/*    className={`${styles.categories__left__top__right} ${styles.categories__img} ${imgSpinnerClass}`}*/}
                {/*  >*/}
                {/*    <Image*/}
                {/*      src={love}*/}
                {/*      alt="love"*/}
                {/*      className="transition-opacity opacity-0 duration"*/}
                {/*      onLoad={handleLoadingImageComplete}*/}
                {/*    />*/}
                {/*    <span>{translations[lang].main_page.brand_love}</span>*/}
                {/*  </Link>*/}
                {/*</div>*/}
              </div>
            </>
          )}
          {isMedia490 && <MainSlider images={images} />}
        </div>
      </div>
    </section>
  );
};

export default Categories;
