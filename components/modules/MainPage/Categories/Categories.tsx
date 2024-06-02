'use client'
import Image from 'next/image'
import Link from "next/link"
import img1 from '@/public/img/categories-img-1.png'
import img2 from '@/public/img/categories-img-2.png'
import { useLang } from "@/hooks/useLang"
import useImagePreloader from '@/hooks/useImagePreloader'
import { useMediaQuery } from "@/hooks/useMediaQuery"
import MainSlider from '../MainSlider'
import AllLink from "@/components/elements/AllLink/AllLink"
import styles from '@/styles/main-page/index.module.scss'

const Categories = () => {
  const {lang, translations} = useLang()
  const isMedia490 = useMediaQuery(490)
  const { handleLoadingImageComplete, imgSpinner } = useImagePreloader()
  const imgSpinnerClass = imgSpinner ? styles.img_loading : ''

  const images = [
    { src: img1, id: 1, title: translations[lang].main_page.category_cloth },
    {
      src: img2, id: 2,
      title: translations[lang].main_page.category_accessories,
    },
  ]


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
              <Link
                href='/catalog/clothes'
                className={`${styles.categories__right} ${styles.categories__img} ${imgSpinnerClass}`}
              >
                <Image
                  src={img1}
                  alt='Cloth'
                  className='transition-opacity opacity-0 duration'
                  onLoad={handleLoadingImageComplete}
                />
                <span>{translations[lang].main_page.category_cloth}</span>
              </Link>
              <div className={styles.categories__left}>
                <div className={styles.categories__left__top}>
                  <Link
                    href='/catalog/accessories'
                    className={`${styles.categories__left__top__right} ${styles.categories__img} ${imgSpinnerClass}`}
                  >
                    <Image
                      src={img2}
                      alt='Accessories'
                      className='transition-opacity opacity-0 duration'
                      onLoad={handleLoadingImageComplete}
                    />
                    <span>
                      {translations[lang].main_page.category_accessories}
                    </span>
                  </Link>
                </div>
              </div>
            </>
          )}
          {isMedia490 && <MainSlider images={images} />}
        </div>
      </div>
    </section>
  )
}

export default Categories
