import React from "react"
import { useUnit } from "effector-react"
import { motion } from "framer-motion"
import { $user } from "@/context/user/state"
import { useProfileEdit } from "@/hooks/useProfileEdit"
import { editUsernameFx } from "@/context/profile"
import { useForm } from "react-hook-form"
import { nameValidationRules } from "@/lib/utils/auth"
import { IInputs } from "@/types/authPopup"
import {basePropsForMotion} from "@/constants/motion"
import NameErrorMessage from "@/components/elements/NameErrorMessage/NameErrorMessage"
import ProfileInfoActions from "@/components/modules/ProfilePage/ProfileInfoActions"
import ProfileInfoBlock from "@/components/modules/ProfilePage/ProfileInfoBlock"
import styles from "@/styles/profile/index.module.scss"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { loginCheckFx } from "@/context/user"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ProfileName = () => {
  const user = useUnit($user)
  const loginCheckSpinner = useUnit(loginCheckFx.pending)
  const {
    handleChange,
    handleEdit,
    handleCancelEdit,
    handleSaveNewName,
    edit,
    spinner
  } = useProfileEdit( user.name, editUsernameFx)
  const {
    register,
    formState: { errors, isValid },
    trigger,
    setValue,
  } = useForm<IInputs & { [index: string]: string }>()
  const nameRegister = register(
    "name",
    nameValidationRules("Недопустимое значение!", "Введите имя")
  )

  const handleNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    nameRegister.onChange({
      target: {
        name: nameRegister.name,
        value: e.target.value.trim()
      }
    })

    trigger(nameRegister.name)
    handleChange(e)
  }

  const allowEdit = () => {
    handleEdit()
    setValue("name", user.name)
    trigger()
  }

  return (
    <div className={styles.profile__info}>
      {loginCheckSpinner && (
        <FontAwesomeIcon icon={faSpinner} spin color='#fff'/>
      )}

      {edit && !loginCheckSpinner && (
        <motion.div
          className={styles.profile__info__inner}
          {...basePropsForMotion}
        >
          <NameErrorMessage
            errors={errors}
            className={styles.profile__info__warn}
            fieldName={nameRegister.name}
          />
          <input
            className={styles.profile__info__input}
            type="text"
            name={nameRegister.name}
            ref={nameRegister.ref}
            onChange={handleNameInputChange}
            autoFocus
          />
          <ProfileInfoActions
            spinner={spinner}
            disabled={spinner || !isValid}
            handleSaveInfo={handleSaveNewName}
            handleCancelEdit={handleCancelEdit}
          />
        </motion.div>
      )}
      {!edit && !loginCheckSpinner &&
        <ProfileInfoBlock
          allowEdit={allowEdit}
          text={user.name}
        />
      }
    </div>
  )
}

export default ProfileName
