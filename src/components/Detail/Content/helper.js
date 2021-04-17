export function getWidth() {
  const isCellular = window.navigator?.connection?.type === 'cellular'
  const width = isCellular ? document.body.clientWidth - 32 : 0

  return width
}

export function getHtml(html, isDataSaver) {
  if (!html) {
    return ''
  }

  const width = getWidth()
  const parser = new DOMParser()
  const doc = parser.parseFromString(html, 'text/html')

  doc.querySelectorAll('img').forEach((img) => {
    const src = `https://t1.kakaocdn.net/thumb/R${width}x0/?fname=${img.src}`

    if (isDataSaver) {
      img.outerHTML = `<picture>
        <img data-src="${src}" />
      </picture>`
    } else {
      img.src = src
    }
  })

  return doc.body.innerHTML
}
