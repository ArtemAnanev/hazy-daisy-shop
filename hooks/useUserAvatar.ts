import { useUnit } from "effector-react"
import { $user } from "@/context/user/state"
import { useEffect, useState } from "react"

export const useUserAvatar = () => {
  const user = useUnit($user)
  const [src, setSrc] = useState('')

  useEffect(() => {
    if (user.image) {
      setSrc(user.image)
      return
    }

    const oauthAvatar = JSON.parse(
      localStorage.getItem(
        '@@oneclientjs@@::jJ3J5JkzSWPXRtZb1zbE::@@user@@'
      ) as string
    )

    if (!oauthAvatar) {return}

    setSrc(oauthAvatar.decodedToken.user.photoURL)
  }, [user.image])

  return { src, alt: user.name }

}
