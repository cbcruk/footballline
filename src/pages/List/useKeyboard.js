import { useEffect } from 'react'

function useKeyboard({ handleRefresh }) {
  useEffect(() => {
    function handleKeydown(e) {
      if (e.key === 'r') {
        handleRefresh()
      }
    }

    document.addEventListener('keydown', handleKeydown)

    return () => document.removeEventListener('keydown', handleKeydown)
  }, [handleRefresh])
}

export default useKeyboard
