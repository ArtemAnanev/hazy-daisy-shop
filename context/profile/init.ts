import { sample } from "effector"
import {
  uploadAvatar,
  uploadUserAvatarFx,
  editUsername,
  editUsernameFx,
} from '.'


sample({
  clock: uploadAvatar,
  source: {},
  fn: (_, data) => data,
  target: uploadUserAvatarFx,
})

sample({
  clock: editUsername,
  source: {},
  fn: (_, data) => data,
  target: editUsernameFx,
})
