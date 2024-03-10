'use client'
import { useUnit } from "effector-react"
import React from "react"
import { $showQuickViewModal, closeQuickViewModal } from "@/context/modals"
import Layout from "@/components/layouts/Layout"
import { removeOverflowHiddenFromBody } from "@/lib/utils/common"

const PagesLayout = ({children}:{children: React.ReactNode}) => {
  const showQuickViewModal = useUnit($showQuickViewModal)

  const handleCloseQuickViewModal = () => {
    removeOverflowHiddenFromBody()
    closeQuickViewModal()
  }

  return (
    <html lang='en'>
    <body>
    <Layout>{children}</Layout>
    <div
      className={`quick-view-modal-overlay ${
        showQuickViewModal ? 'overlay-active' : ''
      }`}
      onClick={handleCloseQuickViewModal}
    />
    </body>
    </html>
  )
}

export default PagesLayout
