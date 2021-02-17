import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyALm3_bJrja4jZ1l4nsVHViZ9ttk2bLtic',
  authDomain: 'footballline-71637.firebaseapp.com',
  projectId: 'footballline-71637',
  storageBucket: 'footballline-71637.appspot.com',
  messagingSenderId: '648162873867',
  appId: '1:648162873867:web:dfc555284cf8b92b57ed0e'
})

export function getIdToken() {
  return firebaseApp.auth().currentUser.getIdToken()
}

export default firebaseApp
