import { forwardRef } from "react"
import { IWrappedComponentProps } from "@/types/hocs"
import { withClickOutside } from "@/components/modules/hocs/withClickOutside"
import { useUserLogout } from "@/hooks/useLogout"
import { useUserAvatar } from "@/hooks/useUserAvatar"
import Image from "next/image"
import { useLang } from "@/hooks/useLang"
import { AnimatePresence, motion } from "framer-motion"

const HeaderProfile = forwardRef<HTMLDivElement, IWrappedComponentProps>(
  ({ open, setOpen }, ref) => {
    const handleTogglePopup = () => setOpen(!open)
    const handleLogout = useUserLogout()
    const { src, alt } = useUserAvatar()
    const { lang, translations } = useLang()

    return (
      <div className='header-profile__popup' ref={ref}>
        <button
          className='btn-reset header-profile__btn'
          onClick={handleTogglePopup}
        >
          <Image
            src={src ? src : '/img/profile.svg'}
            alt={alt ? alt : 'profile'}
            width={24}
            height={24}
          />
        </button>
        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{opacity: 0, scale: 0}}
              animate={{opacity: 1, scale: 1}}
              exit={{opacity: 0, scale: 0}}
              className='list-reset-header-profile__inner'
            >
              <li className='cart-popup__arrow' />
              <li className='header-profile__item'>
                <button className='btn-reset header-profile__item__btn'>
                  {translations[lang].header.profile}
                </button>
              </li>
              <li className='header-profile__item'>
                <button
                  className='btn-reset header-profile__item__btn'
                  onClick={handleLogout}
                  >
                  {translations[lang].header.logout}
                </button>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    )
  }
)

HeaderProfile.displayName = 'HeaderProfile'

export default withClickOutside(HeaderProfile)