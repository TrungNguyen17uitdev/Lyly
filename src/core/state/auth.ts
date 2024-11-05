import { create } from 'zustand'
import { getItem, removeItem, setItem } from '../storage'
import { createSelectors } from './store'

const TOKEN = 'token'

export type TokenType = {
  accessToken: string
  refreshToken: string
}

export const getToken = () => getItem<TokenType>(TOKEN)
export const removeToken = () => removeItem(TOKEN)
export const setToken = (value: TokenType) => setItem<TokenType>(TOKEN, value)

interface AuthState {
  token: TokenType | null
  status: 'idle' | 'signOut' | 'signIn'
  signIn: (data: TokenType) => void
  signOut: () => void
  hydrate: () => void
}

const _useAuth = create<AuthState>((set, get) => ({
  status: 'idle',
  token: null,
  signIn: (token) => {
    setToken(token)
    set({ status: 'signIn', token })
  },
  signOut: () => {
    removeToken()
    set({ status: 'signOut', token: null })
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
  },
}))

export const useAuth = createSelectors(_useAuth)

export const signOut = () => _useAuth.getState().signOut()
export const signIn = (token: TokenType) => _useAuth.getState().signIn(token)
export const hydrateAuth = () => _useAuth.getState().hydrate()