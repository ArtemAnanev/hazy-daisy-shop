"use client"
import {
  closeCatalogMenu,
  closeMenu,
  closeQuickViewModal,
  closeSearchModal,
  closeSizeTable,
  modals,
  openCatalogMenu,
  openMenu,
  openSearchModal,
  showQuickViewModal,
  showSizeTable
} from "."
import { closeShareModal, openShareModal } from "@/context/modals/index"

export const $menuIsOpen = modals
  .createStore(false)
  .on(openMenu, () => true)
  .on(closeMenu, () => false)

export const $catalogMenuIsOpen = modals
  .createStore(false)
  .on(openCatalogMenu, () => true)
  .on(closeCatalogMenu, () => false)

export const $searchModal = modals
  .createStore(false)
  .on(openSearchModal, () => true)
  .on(closeSearchModal, () => false)

export const $showQuickViewModal = modals
  .createStore(false)
  .on(showQuickViewModal, () => true)
  .on(closeQuickViewModal, () => false)

export const $showSizeTable = modals
  .createStore(false)
  .on(closeSizeTable, () => false)
  .on(showSizeTable, () => true)

export const $shareModal = modals
  .createStore(false)
  .on(openShareModal, () => true)
  .on(closeShareModal, () => false)
