import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyAA0_tTVk0i54PCBdIEldReIt5ume3-aDg",
  authDomain: "store-db-56732.firebaseapp.com",
  databaseURL: "https://store-db-56732.firebaseio.com",
  projectId: "store-db-56732",
  storageBucket: "store-db-56732.appspot.com",
  messagingSenderId: "1014545326625",
  appId: "1:1014545326625:web:45bf4562b5106bd0d57960",
  measurementId: "G-NHX4RY0L8E"
};

export const createUserProfileDoc = async(userAuth, additionalData)=>{
  if(!userAuth) return;

  const userRef = firestore.doc(`user/${userAuth.uid}`)

  const snapShop = await userRef.get()

  if (!snapShop.exists){
    const {displayName, email } = userAuth
    const createdAt = new Date()

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error){
      console.log('error creating user', error.message)
    }
  }
  return userRef
}

firebase.initializeApp(config)


export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = ()=>auth.signInWithPopup(provider)

export default firebase