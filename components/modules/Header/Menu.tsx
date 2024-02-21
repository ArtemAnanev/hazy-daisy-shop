import { $menuIsOpen, closeMenu } from "@/context/modals"
import { useLang } from "@/hooks/useLang"
import { removeOverflowHiddenFromBody } from "@/lib/utils/common"
import { useUnit } from "effector-react"
import { useState } from "react"
import { setLang } from "@/context/lang"
import { AllowedLangs } from "@/constants/lang"

const Menu = () => {
  const [showCatalogList, setShowCatalogList] = useState(false)
  const [showBuyersList, setBuyersList] = useState(false)
  const [showContactsList, setContactsList] = useState(false)
  const menuIsOpen = useUnit($menuIsOpen)
  const { lang, translations} = useLang()

  const handleCloseMenu = () => {
    removeOverflowHiddenFromBody()
    closeMenu()
  }

  const handleSwitchLang = (lang: string) => {
    setLang(lang as AllowedLangs)
    localStorage.setItem('lang', JSON.stringify(lang))
  }

  const handleSwitchLangToRu = () => handleSwitchLang('ru')
  const handleSwitchLangToEn = () => handleSwitchLang('en')

    return (
        <nav className={`nav-menu ${menuIsOpen ? 'open' : 'close'}`}>
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
              <li className='nav-menu__list__item'></li>
              <li className='nav-menu__list__item'></li>
              <li className='nav-menu__list__item'></li>
            </ul>
          </div>
          <h1>Menu</h1>
        </nav>
    )
}

export default Menu
