export default class DataStorage {
  constructor(newsApi) {
    this.newsApi = newsApi;
  }
  getApiData() {
    // sessionStorage.clear();
    this.newsApi.getNews()
    .then((res) => {
      localStorage.setItem("item", JSON.stringify(res));
      const newsObj = JSON.parse(localStorage.getItem("item"))
      return newsObj;
    })
    .catch((error) => {
      throw new Error(error.message);
    })
  }
}

