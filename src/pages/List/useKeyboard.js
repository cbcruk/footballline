import { useEffect } from 'react'

function useKeyboard({ handleRefresh }) {
  useEffect(() => {
    function handleKeydown(e) {
      switch (e.key) {
        case 'r':
          handleRefresh()
        default:
          break
      }
    }

    document.addEventListener('keydown', handleKeydown)

    return () => document.removeEventListener('keydown', handleKeydown)
  }, [])
}

export default useKeyboard
