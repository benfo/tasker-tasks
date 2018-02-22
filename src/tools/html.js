/**
 *
 * @param {string} url
 * @param {Object} options
 */
export function queryHtml (url, options) {
  return fetch(url)
    .then(response => response.text())
    .then(bodyText => {
      var parser = new DOMParser()
      var doc = parser.parseFromString(bodyText, 'text/html')

      var result = {}
      for (let key of Object.keys(options.selectors)) {
        let selector = options.selectors[key]
        let element = doc.querySelector(selector)
        let value = element.innerText.trim()

        result[key] = value
      }

      return result
    })
}
