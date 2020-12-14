function getDataFromHtml(html) {
  return html.match(/data-article="(\w+)"/)[1]
}

export default getDataFromHtml
