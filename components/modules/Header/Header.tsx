'use client'
import Link from "next/link";
import {useLang} from "@/hooks/useLang";
import Logo from "@/components/elements/Logo/Logo";
import Menu from "@/components/modules/Header/Menu"
import { openMenu, openSearchModal } from "@/context/modals"
import { addOverflowHiddenFromBody, handleOpenAuthPopup, triggerLoginCheck } from "@/lib/utils/common"
import CartPopup from "@/components/modules/Header/CartPopup/CartPopup"
import HeaderProfile from "@/components/modules/Header/HeaderProfile"
import { useUnit } from "effector-react"
import { $isAuth } from "@/context/auth"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { loginCheckFx } from "@/api/auth"
import { useEffect } from "react"
import { $user } from "@/context/user"

const Header = () => {
  const { lang, translations } = useLang()
  const loginCheckSpinner = useUnit(loginCheckFx)
  const isAuth = useUnit($isAuth)
  const user = useUnit($user)

  console.log(user)

  const handleOpenMenu = () => {
      addOverflowHiddenFromBody()
      openMenu()
    }

  const handleOpenSearchModal = () => {
    openSearchModal()
    addOverflowHiddenFromBody()
  }

  useEffect(() => {
    triggerLoginCheck()
  }, [])

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
                      {isAuth ? (
                        <HeaderProfile />
                      ): !loginCheckSpinner ? (
                        <FontAwesomeIcon icon={faSpinner} spin />
                      ): (
                        <button
                        className='btn-reset header__links__item__btn header__links__item__btn--profile'
                        onClick={handleOpenAuthPopup}
                      />
                      )}
                        {/*<Link*/}
                        {/*    className='header__links__item__btn header__links__item__btn--profile'*/}
                        {/*    href='/profile'*/}
                        {/*/>*/}

                    </li>
                </ul>
            </div>
            <title></title>
        </header>

    );
};

export default Header;
