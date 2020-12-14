export function getHtml(html) {
  if (!html) {
    return ''
  }

  return html.replace(
    /http:\/\/images.soccerline.kr/g,
    'https://img2.daumcdn.net/thumb/R375x0/?fname=https://images.soccerline.kr'
  )
}
