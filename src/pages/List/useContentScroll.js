import { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'

function useContentScroll() {
  const contentRef = useRef(null)
  const params = useParams()

  function handleScroll() {
    if (contentRef?.current) {
      contentRef.current.scrollToTop()
    }
  }

  useEffect(() => {
    handleScroll()
  }, [params])

  return {
    contentRef,
    handleScroll
  }
}

export default useContentScroll
