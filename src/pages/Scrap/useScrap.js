import useAuthSWR from '../../hooks/useAuthSWR'

function useScrap(auth) {
  const result = useAuthSWR(['/api/scrap', auth])

  return {
    ...result,
    isLoading: !result.data && !result.error
  }
}

export default useScrap
