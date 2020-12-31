export const BOARD_ITEMS = [
  {
    category: 0,
    label: '전체'
  },
  {
    category: 1,
    label: '축구'
  },
  {
    category: 5,
    label: '라커룸'
  }
]

export const BOARD_ITEMS_CATEGORY = BOARD_ITEMS.reduce((prev, current) => {
  return {
    ...prev,
    [current.category]: current.label
  }
}, {})
