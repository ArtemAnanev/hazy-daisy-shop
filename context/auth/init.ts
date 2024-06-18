import { sample } from "effector"
import {$auth} from "./state"
import {handleSignUp, singUpFx, handleSignIn, singInFx} from "."

sample({
  clock: handleSignUp,
  source: $auth,
  fn: (_, { name, email, password, isOAuth }) => ({
    name,
    password,
    email,
    isOAuth,
  }),
  target: singUpFx,
})

sample({
  clock: handleSignIn,
  source: $auth,
  fn: (_, { email, password, isOAuth, name }) => ({
    email,
    password,
    isOAuth,
    name,
  }),
  target: singInFx,
})
