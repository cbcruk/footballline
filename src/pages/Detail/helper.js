export function getWidth() {
  const isCellular = window.navigator.connection.type === 'cellular'
  const width = isCellular ? document.body.clientWidth - 32 : 0

  return width
}

export function getHtml(html) {
  if (!html) {
    return ''
  }

  const width = getWidth()

  return html.replace(
    /http:\/\/images.soccerline.kr/g,
    `https://t1.kakaocdn.net/thumb/R${width}x0/?fname=https://images.soccerline.kr`
  )
}
