'use client'
import React from "react"
import { AnimatePresence, motion } from "framer-motion"

import { useMediaQuery } from "@/hooks/useMediaQuery"
import Header from "@/components/modules/Header/Header";
import MobileNavbar from "@/components/modules/MobileNavbar/MobileNavbar"
import SearchModal from "@/components/modules/Header/SearchModal"
import { handleCloseSearchModal } from "@/lib/utils/common"
import { $searchModal } from "@/context/modals"
import { useUnit } from "effector-react"
import Footer from "@/components/modules/Footer/Footer"


const Layout = ({children}: { children: React.ReactNode}) => {
  const isMedia800 = useMediaQuery(800)
  const searchModal = useUnit($searchModal)

    return (
  <>
    <Header />
    {children}
    {isMedia800 && <MobileNavbar />}
    <AnimatePresence>
      {searchModal && (
        <motion.div
          initial={{ opacity: 0, zIndex: 102 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <SearchModal />
        </motion.div>
        )}
    </AnimatePresence>
    <div className={`header__search-overlay ${
      searchModal ? 'overlay-active' : ''
    }`}
         onClick={handleCloseSearchModal}
    />
    <Footer/>
  </>
  )
}

export default Layout
