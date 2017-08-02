import { exportLocal } from '../tools/taskerTools';
import { readHtml } from '../tools/htmlTools.js';

var url = "https://www.packtpub.com/packt/offers/free-learning";

readHtml(url, {
    selectors: {
        book_title: "div#deal-of-the-day h2",
        book_description: "div#deal-of-the-day div:nth-child(4)",
    }
}).then(result => {
    exportLocal({url: url});
    exportLocal(result);
    exit();
});