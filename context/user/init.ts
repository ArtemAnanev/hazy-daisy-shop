"use client"
import { sample } from "effector"
import { $user } from "./state"
import { loginCheck, loginCheckFx } from "."

sample({
  clock: loginCheck,
  source: $user,
  fn: (_, { jwt }) => ({
    jwt,
  }),
  target: loginCheckFx,
})
