import { type FirebaseAuthTypes } from '@react-native-firebase/auth'
import { create } from 'zustand'

import { getItem, removeItem, setItem } from '../storage'
import { createSelectors } from './store'

const TOKEN = 'token'

export const getToken = () => getItem<FirebaseAuthTypes.User>(TOKEN)
export const removeToken = () => removeItem(TOKEN)
export const setUser = (value: FirebaseAuthTypes.User) =>
  setItem<FirebaseAuthTypes.User>(TOKEN, value)

interface AuthState {
  user: FirebaseAuthTypes.User | null
  status: 'idle' | 'signOut' | 'signIn'
  signIn: (data: FirebaseAuthTypes.User) => void
  signOut: () => void
  hydrate: () => void
}

const _useAuth = create<AuthState>((set, get) => ({
  status: 'idle',
  user: null,
  signIn: (user) => {
    setUser(user)
    set({ status: 'signIn', user })
  },
  signOut: () => {
    removeToken()
    set({ status: 'signOut', user: null })
  },
  hydrate: () => {
    try {
      const userToken = getToken()
      if (userToken !== null) {
        get().signIn(userToken)
      } else {
        get().signOut()
      }
    } catch (e) {
      // catch error here
      // Maybe sign_out user!
    }
  }
}))

export const useAuth = createSelectors(_useAuth)

export const signOut = () => _useAuth.getState().signOut()
export const signIn = (user: FirebaseAuthTypes.User) => _useAuth.getState().signIn(user)
export const hydrateAuth = () => _useAuth.getState().hydrate()
