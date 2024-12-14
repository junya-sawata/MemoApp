import { initializeApp } from 'firebase/app'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'

const firebaseConfig = {
    apiKey: "AIzaSyAVZ3uYA_v64u_QcGl-Z-Meg0ZtqOTPXCA",
    authDomain: "memoapp-c0b9c.firebaseapp.com",
    projectId: "memoapp-c0b9c",
    storageBucket: "memoapp-c0b9c.firebasestorage.app",
    messagingSenderId: "221703201890",
    appId: "1:221703201890:web:6ebde3538b358d496fdd3b"
  }

  const app = initializeApp(firebaseConfig)
  const  auth = initializeAuth(app,{
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  })

const db = getFirestore(app)

export { app, auth, db}
