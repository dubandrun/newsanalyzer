export default class NewsApi {
  // constructor(url) {
  //   this.url = url;
  // }

  getNews() {
    return fetch('http://newsapi.org/v2/everything?' +
    'q=Москва&' +
    'from=2020-04-06&' +
    'to=2020-04-13&' +
    'pageSize=100&' +
    'sortBy=popularity&' +
    'language=ru&' +
    'apiKey=b99ed99ced6a450b962a2138904e4943'
    )
      .then((res) => 
        res.ok ? res.json() :  Promise.reject(`Ошибка: ${res.status}`)
      )
      .then(res => res)
      .catch((error) => {
        throw new Error(error.message);
      });
  }
}
