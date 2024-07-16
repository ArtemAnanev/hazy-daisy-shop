"use client"
import Breadcrumbs from "@/components/modules/Breadcrumbs/Breadcrumbs"
import { useBreadcrumbs } from "@/hooks/useBreadcrumbs"
import { usePageTitle } from "@/hooks/usePageTitle"
import { useUnit } from "effector-react"
import { $user } from "@/context/user/state"
import ProfileAvatar from "@/components/modules/ProfilePage/ProfileAvatar"
import styles from "@/styles/profile/index.module.scss"

const ProfilePage = () => {
  // const { lang, translations } = useLang()
  const user = useUnit($user)
  const { getDefaultTextGenerator, getTextGenerator } =
    useBreadcrumbs('profile')
  usePageTitle('profile', user.name)


  return (
    <main>
      <Breadcrumbs
        getTextGenerator={getTextGenerator}
        getDefaultTextGenerator={getDefaultTextGenerator}
      />
      <section className={styles.profile}>
        <div className={`container ${styles.profile__container}`}>
          <div className={styles.profile__inner}>
            <ProfileAvatar />
          </div>
        </div>
      </section>
    </main>
  )
}

export default ProfilePage
