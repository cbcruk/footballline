import React, { useReducer } from 'react'
import {
  IonButton,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPopover
} from '@ionic/react'
import { chevronForwardOutline, ellipsisVerticalOutline } from 'ionicons/icons'

const SHOW_POPOVER = 'SHOW_POPOVER'
const HIDE_POPOVER = 'HIDE_POPOVER'

function Popover() {
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

  return (
    <>
      <IonButton
        onClick={(event) =>
          dispatch({
            type: SHOW_POPOVER,
            payload: event
          })
        }
      >
        <IonIcon slot="start" icon={ellipsisVerticalOutline} />
      </IonButton>
      <IonPopover
        event={state.event}
        isOpen={state.showPopover}
        onDidDismiss={() =>
          dispatch({
            type: HIDE_POPOVER
          })
        }
      >
        <IonList>
          <IonItem button>
            <IonLabel>Soccerline에서 보기</IonLabel>
            <IonIcon icon={chevronForwardOutline} slot="end" />
          </IonItem>
        </IonList>
      </IonPopover>
    </>
  )
}

export default Popover
