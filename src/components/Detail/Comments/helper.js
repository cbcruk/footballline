export function getList(comments) {
  return comments.reduce((prev, current) => {
    if (current.depth === 1) {
      const lastIndex = prev.length - 1
      const lastItem = prev[lastIndex]

      return [
        ...prev.slice(0, lastIndex),
        {
          ...lastItem,
          comments: [...(lastItem.comments || []), current]
        }
      ]
    }

    return [...prev, current]
  }, [])
}
