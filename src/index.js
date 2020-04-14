
import "./index.css";

// import NewsApi from "./js/modules/newsapi";

// import {RESULTS_NEWS_LIST} from "./js/constants/constants";
// import {SEARCH_FIELD} from "./js/constants/constants";

// import DataStorage from "./js/modules/datastorage";
// import NewsCardList from "./js/components/newscardlist"
// import NewsCard from "./js/components/newscard"


// (function () {
//   const NEWS_API = new NewsApi();
//   const DATA_STORAGE = new DataStorage(NEWS_API);
//   DATA_STORAGE.getApiData();
//   const NEWS_CARD = new NewsCard();
//   const NEWS_CARD_LIST = new NewsCardList(
//     RESULTS_NEWS_LIST,
//     DATA_STORAGE,
//     NEWS_CARD
//   );
//   NEWS_CARD_LIST.renderCards();

//   SEARCH_FIELD.addEventListener("submit", (event) => {
//     event.preventDefault();
//     NEWS_CARD_LIST.renderCards(event)});
// })();

const SEARCH_FIELD = document.forms.search;
SEARCH_FIELD.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("Карамба")})