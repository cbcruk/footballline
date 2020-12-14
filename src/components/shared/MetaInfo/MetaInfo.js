import React from 'react'
import classNames from 'classnames'
import { BOARD_ITEMS_CATEGORY } from '../../../constants'
import { getTimeFromNow } from '../../../lib/dayjs'
import Icon from '../Icon'
import styles from './style.module.css'

function Chip({ children }) {
  return <span className={styles.chip}>{children}</span>
}

function Metainfo({
  memberNickname,
  writeDate,
  views,
  categoryDepth01,
  likes = 0,
  replies = 0,
  className
}) {
  return (
    <div className={classNames([styles.wrapper, className])}>
      <Chip>{memberNickname}</Chip>
      <Chip>{getTimeFromNow(writeDate)}</Chip>
      <Chip>조회수 {views}</Chip>
      <Chip>{BOARD_ITEMS_CATEGORY[categoryDepth01]}</Chip>

      <span className={styles.response}>
        <Icon name="heart" label={likes} />
        <Icon name="chatbubbleOutline" label={replies} />
      </span>
    </div>
  )
}

export default Metainfo
