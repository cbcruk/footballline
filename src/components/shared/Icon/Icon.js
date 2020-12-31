import React from 'react'
import { IonIcon } from '@ionic/react'
import classNames from 'classnames'
import styles from './style.module.css'

function Icon({ name, label, className }) {
  if (!label) {
    return null
  }

  return (
    <span className={classNames([className, styles.wrapper])}>
      <IonIcon icon={name} className={styles.icon} />
      {label}
    </span>
  )
}

export default Icon
