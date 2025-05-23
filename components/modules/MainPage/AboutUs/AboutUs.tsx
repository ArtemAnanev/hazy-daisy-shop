import { useMediaQuery } from "@/hooks/useMediaQuery";
import useImagePreloader from "@/hooks/useImagePreloader";

import styles from "@/styles/about-us/index.module.scss";
import img1 from "@/public/img/about_us.png";
import { useLang } from "@/hooks/useLang";
import Image from "next/image";

const AboutUs = () => {
  const isMedia490 = useMediaQuery(490);
  const { lang, translations } = useLang();
  const { handleLoadingImageComplete, imgSpinner } = useImagePreloader();
  const textWithNonBreakingSpace = (text: string) =>
    text.replace(/\s/g, "\u00A0");

  const images = [
    { src: img1, id: 1, title: translations[lang].main_page.brand_love },
  ];

  return (
    <section className={styles.aboutUs}>
      <h2 className={`site-title ${styles.brands__title}`}>
        {translations[lang].main_page.brand_title}
      </h2>
      <div>
        <Image
          src={img1}
          alt={translations[lang].main_page.brand_love}
          className="transition-opacity opacity-0 duration"
          onLoad={handleLoadingImageComplete}
        />
        <span>
          {textWithNonBreakingSpace(translations[lang].main_page.brand_love)}
        </span>
      </div>
      <div>
        <span>
          {textWithNonBreakingSpace(translations[lang].main_page.brand_love)}
        </span>
      </div>
    </section>
  );
};

export default AboutUs;
