import { useUnit } from "effector-react"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { setLang } from "@/context/lang"
import { closeMenu } from "@/context/modals"
import { $menuIsOpen } from "@/context/modals/state"
import { useLang } from "@/hooks/useLang"
import { removeOverflowHiddenFromBody } from "@/lib/utils/common"
import { AllowedLangs } from "@/constants/lang"
import Accordion from "@/components/modules/Accordion/Accordion"
import { usePathname } from "next/navigation"
import MenuLinkItem from "@/components/modules/Header/MenuLinkItem"
import { useMediaQuery } from "@/hooks/useMediaQuery"
import BuyersListItems from "@/components/modules/Header/BuyersListItems"
import ContactsListItems from "@/components/modules/Header/ContactsListItems"
import Logo from "@/components/elements/Logo/Logo"

const Menu = () => {
  const [activeListId, setActiveListId] = useState(0)
  const menuIsOpen = useUnit($menuIsOpen)
  const { lang, translations} = useLang()
  const pathName = usePathname()
  const isMedia800 = useMediaQuery(800)
  const isMedia640 = useMediaQuery(640)

  const handleSwitchLang = (lang: string) => {
    setLang(lang as AllowedLangs)
    localStorage.setItem('lang', JSON.stringify(lang))
  }
  const handleSwitchLangToRu = () => handleSwitchLang('ru')
  const handleSwitchLangToEn = () => handleSwitchLang('en')
  const handleShowCatalogList = () => setActiveListId(1)
  const handleShowBuyersList = () => setActiveListId(2)
  const handleShowContactsList = () => setActiveListId(3)

  const handleCloseMenu = () => {
    removeOverflowHiddenFromBody()
    closeMenu()
    setActiveListId(0)
  }

  const handleRedirectToCatalog = (path: string) => {
    if (pathName.includes('/catalog')) {
      window.history.pushState({path}, '', path)
      window.location.reload()
    }
    handleCloseMenu()
  }

  const clothesLinks = [
    {
      id: 1,
      text: translations[lang].comparison['t-shirts'],
      href: '/catalog/clothes?offset=0&type=t-shirts'
    },
    {
      id: 2,
      text: translations[lang].comparison['long-sleeves'],
      href: '/catalog/clothes?offset=0&type=long-sleeves',
    },
    {
      id: 3,
      text: translations[lang].comparison.hoodie,
      href: '/catalog/clothes?offset=0&type=hoodie',
    },
  ]

  const accessoriesLinks = [
    {
      id: 1,
      text: translations[lang].comparison.bags,
      href: '/catalog/accessories?offset=0&type=bags',
    },
    {
      id: 2,
      text: translations[lang].comparison.headdress,
      href: '/catalog/accessories?offset=0&type=headdress',
    },
  ]

    return (
      <nav className={`nav-menu ${menuIsOpen ? 'open' : 'close'}`}>
        <div className='container nav-menu__container'>
          <div className={`nav-menu__logo ${menuIsOpen ? 'open' : ''}`}>
            <Logo />
          </div>
          <img
            className={`nav-menu__bg ${menuIsOpen ? 'open' : ''}`}
            src={`/img/menu-bg${isMedia800 ? '-small' : ''}.png`}
            alt='menu background'
          />
          <button
            className={`btn-reset nav-menu__close ${menuIsOpen ? 'open' : ''}`}
            onClick={handleCloseMenu}
          />
          <div className={`nav-menu__lang ${menuIsOpen ? 'open' : ''}`}>
            <button
              className={`btn-reset nav-menu__lang__btn ${
                lang === 'ru' ? 'lang-active' : ''
              }`}
              onClick={handleSwitchLangToRu}
            >
              RU
            </button>
            <button
              className={`btn-reset nav-menu__lang__btn ${
                lang === 'en' ? 'lang-active' : ''
              }`}
              onClick={handleSwitchLangToEn}
            >
              EN
            </button>
          </div>
          <ul className={`list-reset nav-menu__list ${menuIsOpen ? 'open' : ''}`}>
            {!isMedia800 && (
              <li className='nav-menu__list__item'>
                <button
                  className='btn-reset nav-menu__list__item__btn'
                  onMouseEnter={handleShowCatalogList}
                >
                  {translations[lang].main_menu.catalog}
                </button>
                <AnimatePresence>
                  {activeListId === 1 && (
                    <motion.ul
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className='list-reset nav-menu__accordion'
                    >
                      <li className='nav-menu__accordion__item'>
                        <Accordion
                          title={translations[lang].main_menu.clothes}
                          titleClass='btn-reset nav-menu__accordion__item__title'
                        >
                          <ul className='list-reset nav-menu__accordion__item__list'>
                            {clothesLinks.map((item) => (
                              <MenuLinkItem
                                key={item.id}
                                item={item}
                                handleRedirectToCatalog={handleRedirectToCatalog}
                              />
                            ))}
                          </ul>
                        </Accordion>
                      </li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            )}
            <li className='nav-menu__list__item'>
              {!isMedia640 && (
                <button
                  className='btn-reset nav-menu__list__item__btn'
                  onMouseEnter={handleShowBuyersList}
                >
                  {translations[lang].main_menu.buyers}
                </button>
              )}
              {!isMedia640 && (
                <AnimatePresence>
                  {activeListId === 2 && (
                    <motion.ul
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className='list-reset nav-menu__accordion'
                    >
                      <BuyersListItems />
                    </motion.ul>
                  )}
                </AnimatePresence>
              )}
              {isMedia640 && (
                <Accordion
                  title={translations[lang].main_menu.buyers}
                  titleClass='btn-reset nav-menu__list__item__btn'
                >
                  <ul className='list-reset nav-menu__accordion__item__list'>
                    <BuyersListItems />
                  </ul>
                </Accordion>
              )}
            </li>
            <li className='nav-menu__list__item'>
              {!isMedia640 && (
                <button
                  className='btn-reset nav-menu__list__item__btn'
                  onMouseEnter={handleShowContactsList}
                >
                  {translations[lang].main_menu.contacts}
                </button>
              )}
              {!isMedia640 && (
                <AnimatePresence>
                  {activeListId === 3 && (
                    <motion.ul
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className='list-reset nav-menu__accordion'
                    >
                      <ContactsListItems />
                    </motion.ul>
                  )}
                </AnimatePresence>
              )}
              {isMedia640 && (
                <Accordion
                  title={translations[lang].main_menu.contacts}
                  titleClass='btn-reset nav-menu__list__item__btn'
                >
                  <ul className='list-reset nav-menu__accordion__item__list'>
                    <ContactsListItems />
                  </ul>
                </Accordion>
              )}
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default Menu
