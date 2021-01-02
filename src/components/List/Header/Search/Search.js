import { IonSearchbar } from '@ionic/react'
import { colorWandOutline, searchOutline } from 'ionicons/icons'
import { useRef } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Popover } from '../../../shared'

function Search() {
  const params = useParams()
  const history = useHistory()
  const searchRef = useRef()

  return (
    <Popover icon={searchOutline}>
      <form
        onSubmit={async (e) => {
          e.preventDefault()

          const input = await searchRef.current.getInputElement()

          history.push(`/search/${params.categoryDepth01}/${input.value}`)
        }}
      >
        <IonSearchbar ref={searchRef} searchIcon={colorWandOutline} />
      </form>
    </Popover>
  )
}

export default Search
