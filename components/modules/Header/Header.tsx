'use client'
import Link from "next/link";
import {useLang} from "@/hooks/useLang";
import Logo from "@/components/elements/Logo/Logo";
import Menu from "@/components/modules/Header/Menu"
import { openMenu, openSearchModal } from "@/context/modals"
import { addOverflowHiddenFromBody } from "@/lib/utils/common"
import CartPopup from "@/components/modules/Header/CartPopup/CartPopup"

const Header = () => {
    const { lang, translations } = useLang()

  const handleOpenMenu = () => {
      addOverflowHiddenFromBody()
      openMenu()
    }

  const handleOpenSearchModal = () => {
    openSearchModal()
    addOverflowHiddenFromBody()
  }

    return (
        <header className="header">
            <div className="container header__container">
                <button className="btn-reset header__burger" onClick={handleOpenMenu}>
                    {translations[lang].header.menu_btn}
                </button>
              <Menu />
                <div className="header__logo">
                    <Logo />
                </div>
                <ul className='header__links list-reset'>
                    <li className='header__links__item'>
                        <button className='btn-reset header__links__item__btn header__links__item__btn--search'
                                onClick={handleOpenSearchModal}
                        />
                    </li>
                    <li className='header__links__item'>
                        <Link
                            href='/favorites'
                            className='header__links__item__btn header__links__item__btn--favorites'
                        />
                    </li>
                    <li className='header__links__item'>
                        <Link
                            className='header__links__item__btn header__links__item__btn--compare'
                            href='/comparison'
                        />
                    </li>
                    <li className='header__links__item'>
                        <CartPopup />
                    </li>
                    <li className='header__links__item header__links__item--profile'>
                        <Link
                            className='header__links__item__btn header__links__item__btn--profile'
                            href='/profile'
                        />
                    </li>
                </ul>
            </div>
            <title></title>
        </header>

    );
};

export default Header;
