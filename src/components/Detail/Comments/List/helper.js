import anchorme from 'anchorme'

export function getAnchormeHtml(input) {
  return anchorme({
    input,
    options: {
      specialTransform: [
        {
          test: /^(http|https):\/\//,
          transform: (s) =>
            `<a href="${s}" target="_blank">${decodeURIComponent(s)}</a>`
        }
      ]
    }
  })
}
