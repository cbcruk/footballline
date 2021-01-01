import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function useRouter(callback) {
  const location = useLocation()

  useEffect(() => {
    callback()
  }, [location, callback])
}

export default useRouter
