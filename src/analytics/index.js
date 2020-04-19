import "./analytics.css";

import {
  STATS_KEYWORD,
  STATS_PER_WEEK,
  STATS_NUMBER_OF_MENTIONS,
  STORAGE_DATA
} from "../js/constants/constants"

import Statistics from "../js/components/statistics";

(function() {
  const STATISTICS = new Statistics(
    STORAGE_DATA,
    STATS_KEYWORD,
    STATS_PER_WEEK,
    STATS_NUMBER_OF_MENTIONS
  )
  STATISTICS.setKeywordStatistic();
})();