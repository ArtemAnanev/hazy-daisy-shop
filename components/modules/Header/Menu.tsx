import React, { useState } from "react"
import { useLang } from "@/hooks/useLang"
import { useUnit } from "effector-react"
import { $menuIsOpen } from "@/context/modals"

const Menu = () => {
  const [showCatalogList, setShowCatalogList] = useState(false)
  const [showBuyersList, setBuyersList] = useState(false)
  const [showContactsList, setContactsList] = useState(false)
  const menuIsOpen = useUnit($menuIsOpen)
  const { lang, translations} = useLang()
    return (
        <nav className={`nav-menu %{menuIsOpen ? 'open' : 'close'}`}>
          <h1>Menu</h1>
        </nav>
    );
};

export default Menu;
