import React from 'react'
import classNames from 'classnames'
import { heart, heartDislike } from 'ionicons/icons'
import { getTimeFromNow } from '@cbcruk/utils'
import Icon from '../../../shared/Icon'
import { getAnchormeHtml } from './helper'
import styles from './style.module.css'

function List({ list, authorId, className }) {
  return (
    <div className={classNames([className, styles.wrapper])}>
      {list.map(
        ({
          idx,
          memberId,
          memberNickname,
          writeDate,
          likes,
          dislikes,
          comment,
          comments,
          status
        }) => {
          return (
            <div key={idx} className={styles.item}>
              <div className={styles.header}>
                <span
                  className={classNames(styles.chip, {
                    'is-author': authorId === memberId
                  })}
                >
                  {memberNickname}
                </span>
                <span className={styles.chip}>{getTimeFromNow(writeDate)}</span>
                <span className={classNames([styles.response])}>
                  <Icon name={heart} label={likes} />
                  <Icon name={heartDislike} label={dislikes} />
                </span>
              </div>
              <div className={styles.comment}>
                {status === 0 ? (
                  <strike>삭제된 댓글 입니다.</strike>
                ) : (
                  <p
                    className="ion-no-margin"
                    dangerouslySetInnerHTML={{
                      __html: getAnchormeHtml(comment)
                    }}
                  />
                )}
                {comments && (
                  <List
                    list={comments}
                    authorId={authorId}
                    className="is-children"
                  />
                )}
              </div>
            </div>
          )
        }
      )}
    </div>
  )
}

export default List
