export const BOARD_ITEMS = [
  {
    category: 0,
    label: '전체'
  },
  {
    category: 1,
    label: '축구'
  },
  {
    category: 5,
    label: '라커룸'
  }
]

export const BOARD_ITEMS_CATEGORY = BOARD_ITEMS.reduce((prev, current) => {
  return {
    ...prev,
    [current.category]: current.label
  }
}, {})

export const FIREBASE_APP_OPTIONS = {
  apiKey: 'AIzaSyALm3_bJrja4jZ1l4nsVHViZ9ttk2bLtic',
  authDomain: 'footballline-71637.firebaseapp.com',
  projectId: 'footballline-71637',
  storageBucket: 'footballline-71637.appspot.com',
  messagingSenderId: '648162873867',
  appId: '1:648162873867:web:dfc555284cf8b92b57ed0e'
}
