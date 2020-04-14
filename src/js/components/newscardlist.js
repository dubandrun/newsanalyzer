export default class NewsCardList {
  constructor(
    cardsContainer,
    dataStorage,
    newsCard
    ) {
    this.cardsContainer = cardsContainer;
    this.dataStorage = dataStorage;
    this.newsCard = newsCard;
  }

  addCard(cardTemplate) {
    this.cardsContainer.insertAdjacentHTML("beforeEnd", cardTemplate);
  }

  renderCards() {
    // event.preventDefault();
    const newsObj = JSON.parse(localStorage.getItem("item"));
    const newsArray = newsObj.articles;
    console.log(newsArray);
    for (let data of newsArray) {
      const newsCardFromArray = this.newsCard.create(data.url, data.urlToImage, data.publishedAt, data.title, data.description, data.source.name);
      this.addCard(newsCardFromArray); 
    }
  }
}
