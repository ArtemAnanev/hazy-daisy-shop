import { useUnit } from "effector-react"
import { Effect } from "effector"
import { useEffect, useState } from "react"
import { isUserAuth } from "@/lib/utils/common"
import { editUsername } from "@/context/profile"

export const useProfileEdit = <T, K>(
  initialValue: string,
  effect: Effect<T, Error>
) => {
  const [value, setValue] = useState('')
  const [edit, setEdit] = useState(false)
  const spinner = useUnit(effect.pending)

  const handleEdit = () => setEdit(true)
  const handleCancelEdit = () => {
    setValue(initialValue)
    setEdit(false)
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value)

  useEffect(()=> {
    setValue(initialValue)
  }, [])

  const handleSaveNewName = () => {
    if (!isUserAuth()) {
      return
    }

    if (value === initialValue) {
      setEdit(false)
      return
    }

    const auth = JSON.parse(localStorage.getItem("auth") as string)

    editUsername({
      jwt: auth.accessToken,
      name: value,
      setEdit
    })
  }

  return {
    edit,
    spinner,
    setEdit,
    handleEdit,
    handleChange,
    handleCancelEdit,
    handleSaveNewName,
  }
}
