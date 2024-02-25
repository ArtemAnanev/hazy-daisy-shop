import { useUnit } from "effector-react"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

import { setLang } from "@/context/lang"
import { $menuIsOpen, closeMenu } from "@/context/modals"
import { useLang } from "@/hooks/useLang"
import { removeOverflowHiddenFromBody } from "@/lib/utils/common"
import { AllowedLangs } from "@/constants/lang"
import Accordion from "@/components/modules/Accordion/Accordion"
import { usePathname } from "next/navigation"
import MenuLinkItem from "@/components/modules/Header/MenuLinkItem"

const Menu = () => {
  const [showCatalogList, setShowCatalogList] = useState(false)
  const [showBuyersList, setBuyersList] = useState(false)
  const [showContactsList, setContactsList] = useState(false)
  const menuIsOpen = useUnit($menuIsOpen)
  const { lang, translations} = useLang()
  const pathName = usePathname()

  const handleSwitchLang = (lang: string) => {
    setLang(lang as AllowedLangs)
    localStorage.setItem('lang', JSON.stringify(lang))
  }

  const handleSwitchLangToRu = () => handleSwitchLang('ru')
  const handleSwitchLangToEn = () => handleSwitchLang('en')

  const handleShowCatalogList = () => {
    setShowCatalogList(true)
    // setShowBuyersList(false)
    // setShowContactsList(false)
  }

  const handleCloseMenu = () => {
    removeOverflowHiddenFromBody()
    closeMenu()
  }

  const handleRedirectToCatalog = (path: string) => {
    if (pathName.includes('/catalog')) {
      window.history.pushState({path}, '', path)
      window.location.reload()
    }
    handleCloseMenu()
  }

  const clothLinks = [
    {
      id: 1,
      text: translations[lang].comparison['t-shirts'],
      href: '/catalog/cloth?offset=0&type=t-shirts'
    }
  ]

    return (
        <nav className={`nav-menu ${menuIsOpen ? 'open' : 'close'}`}>
          <div className='container nav-menu__container'>
            <img
              className={`nav-menu__bg ${menuIsOpen ? 'open' : ''}`}
              src='/img/menu-bg2%201.png'
              alt='menu background'
            />
            <button
              className={`btn-reset nav-menu__close ${menuIsOpen ? 'open' : ''}`}
              onClick={handleCloseMenu}
            />
            <div  className={`nav-menu__lang ${menuIsOpen ? 'open' : ''}`}>
              <button
                className={`btn-reset nav-menu__lang__btn ${lang === 'ru' ? 'lang-active' : ''}`}
                onClick={handleSwitchLangToRu}
              >
                RU
              </button>
              <button
                className={`btn-reset nav-menu__lang__btn ${lang === 'en' ? 'lang-active' : ''}`}
                onClick={handleSwitchLangToEn}
              >
                EN
              </button>
              <ul className={`list-reset nav-menu__list ${menuIsOpen ? 'open' : ''}`}>
                <li className='nav-menu__list__item'>
                  <button className='btn-reset nav-menu__list__item__btn'
                    onMouseEnter={handleShowCatalogList}
                  >
                    {translations[lang].main_menu.catalog}
                  </button>
                  <AnimatePresence>
                    {showCatalogList && (
                      <motion.ul
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        exit={{opacity:0}}
                        className='list-reset nav-menu__accordion'
                      >
                        <li className='nav-menu__accordion__item'>
                          <Accordion title={translations[lang].main_menu.cloth}
                                     titleClass='btn-reset nav-menu__accordion__item__title'>
                            <ul className='btn-reset nav-menu__accordion__item__list'>
                              {clothLinks.map((item)=> (
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
                <li className='nav-menu__list__item'></li>
                <li className='nav-menu__list__item'></li>
              </ul>
            </div>
          </div>
        </nav>
    )
}

export default Menu
