export default class Statistics {
  constructor(
    storageData,
    keyWord,
    perWeek,
    mentions
    ) {
      this.storageData = storageData
      this.keyWord = keyWord;
      this.perWeek = perWeek;
      this.mentions = mentions;
    }

  searchMentions() {
    let data = JSON.parse(localStorage.getItem(this.storageData));
    // for (let article of data.articles) {
    //   console.log(article.title);
    // }
    let titlesArray = data.articles.
    map(item => item.title).forEach(element => console.log(element))
    
    console.log(titlesArray);
  }

  setKeywordStatistic() {
    let data = JSON.parse(localStorage.getItem(this.storageData));
    this.keyWord.textContent = localStorage.getItem("keyword");
    this.perWeek.textContent = data.totalResults;
    this.searchMentions();
  }

 
}