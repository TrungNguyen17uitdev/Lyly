import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'
import { getAnalytics, isSupported } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { getReactNativePersistence, initializeAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { environment } from '../core/env'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const app = initializeApp(JSON.parse(environment.FIREBASE_CONFIG))

// Initialize Firebase
export const firebaseAnalytics = isSupported().then((yes) => (yes ? getAnalytics(app) : null))
export const firebaseAuth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
})
export const firebaseDb = getFirestore(app)
export const firebaseStorage = getStorage(app)
