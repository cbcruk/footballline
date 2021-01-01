import React, { useCallback, useEffect, useReducer } from 'react'
import { IonButton, IonIcon, IonPopover } from '@ionic/react'
import { ellipsisVertical } from 'ionicons/icons'
import usePopover from './usePopover'

function Popover({ icon = ellipsisVertical, children }) {
  const { state, showPopover, hidePopover } = usePopover()

  return (
    <>
      <IonButton onClick={showPopover}>
        <IonIcon slot="start" icon={icon} />
      </IonButton>
      <IonPopover
        event={state.event}
        isOpen={state.showPopover}
        onDidDismiss={hidePopover}
      >
        {children}
      </IonPopover>
    </>
  )
}

export default Popover
