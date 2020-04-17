
export default class DataStorage {
constructor(
  newsContainer,
  newsCardlist,
  storageData,
  ) {
  this.newsContainer = newsContainer;
  this.newsCardlist = newsCardlist;
  this.storageData = storageData;
}

  getLastResults() {
    if (this.storageData in localStorage) {
      const newsArray = JSON.parse(localStorage.getItem(`${this.storageData}`));
      this.newsCardlist.renderNews(newsArray);
      this.newsContainer.classList.remove("hidden");
    } else {
      this.newsContainer.classList.add("hidden");
    }
  }
}




// getLastResults() {
//   if (this.storageData in localStorage) {
//     const NEWS__OBJ = JSON.parse(localStorage.getItem(`${this.storageData}`))
//     const NEWS_ARRAY = NEWS__OBJ.articles;
//     this.newsContainer.classList.remove("hidden");
//     for (let data of NEWS_ARRAY) {
//       const newsCardFromArray = this.newsCard.create(data.url, data.urlToImage, data.publishedAt, data.title, data.description, data.source.name);
//       this.newsCardlist.addCard(newsCardFromArray); 
//     }
//   } else {
//     this.newsContainer.classList.add("hidden");
//   }
// }