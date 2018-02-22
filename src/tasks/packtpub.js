import { queryHtml } from '../tools/html'
import * as Tasker from '../../sdk/tasker'

export function run () {
  let url = 'https://www.packtpub.com/packt/offers/free-learning'

  queryHtml(url, {
    selectors: {
      book_title: 'div#deal-of-the-day h2',
      book_description: 'div#deal-of-the-day div:nth-child(4)',
    }
  }).then(result => {
    Tasker.setLocal('url', url)

    for (var key of Object.keys(result)) {
      Tasker.setLocal(key, result[key])
    }

    Tasker.exit()
  })
}
