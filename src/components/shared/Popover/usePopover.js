import { useIonRouter } from '@ionic/react'
import { useCallback, useReducer } from 'react'
import useRouter from './useRouter'

const SHOW_POPOVER = 'SHOW_POPOVER'
const HIDE_POPOVER = 'HIDE_POPOVER'

function usePopover() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case SHOW_POPOVER:
          return {
            ...state,
            showPopover: true,
            event: action.payload
          }
        case HIDE_POPOVER:
          return {
            ...state,
            showPopover: false,
            event: null
          }
        default:
          return state
      }
    },
    {
      showPopover: false,
      event: null
    }
  )
  const showPopover = useCallback(
    (event) => {
      event.stopPropagation()

      dispatch({
        type: SHOW_POPOVER,
        payload: event
      })
    },
    [dispatch]
  )
  const hidePopover = useCallback(
    () =>
      dispatch({
        type: HIDE_POPOVER
      }),
    [dispatch]
  )

  useRouter(hidePopover)

  return {
    state,
    showPopover,
    hidePopover
  }
}

export default usePopover
