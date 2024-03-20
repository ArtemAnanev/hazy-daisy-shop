import { useUnit } from "effector-react"
import { $user } from "@/context/user"
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
        '@@earthoOnespajs@@::jJ3J5JkzSWPXRtZb1zbE::default::undefined'
      ) as string
    )

    if (!oauthAvatar) {return}

    setSrc(oauthAvatar.body.decodedToken.user.user.photoURL)
  }, [user.image])

  return { src, alt: user.name }

}
