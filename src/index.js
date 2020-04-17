import "./index.css";

import NewsApi from "./js/modules/newsapi";

import {RESULTS_NEWS_LIST} from "./js/constants/constants";
import {SEARCH_FIELD} from "./js/constants/constants";
import {INPUT} from "./js/constants/constants";
import {RESULTS} from "./js/constants/constants";
import {STORAGE_DATA} from "./js/constants/constants";
import {RESULTS__NEWS} from "./js/constants/constants";
import {RESULTS__ERROR} from "./js/constants/constants";
import {RESULTS__NORESULTS} from "./js/constants/constants";
import {RESULTS__LOADER} from "./js/constants/constants";
import {SHOW_MORE} from "./js/constants/constants";


import DataStorage from "./js/modules/datastorage";
import NewsCardList from "./js/components/newscardlist"
import NewsCard from "./js/components/newscard"



(function () {
  const NEWS_API = new NewsApi(INPUT);
  const NEWS_CARD = new NewsCard();
  const NEWS_CARD_LIST = new NewsCardList(
    RESULTS,
    RESULTS_NEWS_LIST,
    STORAGE_DATA,
    NEWS_CARD,
    NEWS_API,
    RESULTS__ERROR,
    RESULTS__NORESULTS,
    RESULTS__NEWS,
    RESULTS__LOADER,
    SHOW_MORE
  ); 

  const DATA_STORAGE = new DataStorage(
    RESULTS,
    NEWS_CARD_LIST,
    STORAGE_DATA
  );
  DATA_STORAGE.getLastResults();

  SEARCH_FIELD.addEventListener("submit", (event) => {
    event.preventDefault();
    NEWS_CARD_LIST.getNews();
  })

  SHOW_MORE.addEventListener("click", () => NEWS_CARD_LIST.showMoreNews(JSON.parse(localStorage.getItem("news"))));

})();

//ДОБАВИТЬ!
// - image.onerror  - чтобы при ошибке загрузки изображения подгружалось что-то другое



    