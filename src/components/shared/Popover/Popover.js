import React, { useCallback, useReducer } from 'react'
import { IonButton, IonIcon, IonPopover } from '@ionic/react'
import { ellipsisVerticalOutline } from 'ionicons/icons'

const SHOW_POPOVER = 'SHOW_POPOVER'
const HIDE_POPOVER = 'HIDE_POPOVER'

function Popover({ children }) {
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
  const hidePopover = useCallback(
    () =>
      dispatch({
        type: HIDE_POPOVER
      }),
    [dispatch]
  )

  return (
    <div onClick={(e) => hidePopover()}>
      <IonButton
        onClick={(event) => {
          event.stopPropagation()

          dispatch({
            type: SHOW_POPOVER,
            payload: event
          })
        }}
      >
        <IonIcon slot="start" icon={ellipsisVerticalOutline} />
      </IonButton>
      <IonPopover
        event={state.event}
        isOpen={state.showPopover}
        onDidDismiss={hidePopover}
      >
        {children}
      </IonPopover>
    </div>
  )
}

export default Popover
