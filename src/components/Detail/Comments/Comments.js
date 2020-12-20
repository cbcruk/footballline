import React from 'react'
import List from './List'
import useComments from './useComments'
import styles from './style.module.css'

function Comments({ id, replies, memberId }) {
  const { list, total } = useComments({
    id,
    replies
  })

  return (
    <details open className={styles.wrapper}>
      <summary className={styles.summary}>{total || replies}개의 댓글</summary>
      <List list={list} authorId={memberId} />
    </details>
  )
}

export default Comments
