//получение текущей даты в формате "год-месяц-число"
export function getCurrentDate() {
  let date = new Date();
  let currentDate =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  return currentDate;
}

//получение даты 6-дневной давности
export function getWeekAgoDate() {
  let weekAgo = new Date(new Date() - 6 * 24 * 3600 * 1000);
  let weekAgoFormatDate =
    weekAgo.getFullYear() +
    "-" +
    (weekAgo.getMonth() + 1) +
    "-" +
    weekAgo.getDate();
  return weekAgoFormatDate;
}

//получения текущего месяца 
export function getCurrentMonth() {
  let month = new Date();
  let options = {
    month: "long",
  };
  return month.toLocaleString("ru", options);
}

//получени даты текущего дня в формате "число, день_недели"
export function getFormatedCurrentday() {
  let formatedCurrentDay = new Date();
  let formatedDay = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"][formatedCurrentDay.getDay()];
  let formatedDate = formatedCurrentDay.getDate();
  let dayAndDate = formatedDate+", "+formatedDay
  return dayAndDate;
}

//универсальное форматирование в вид "число, день_недели"
export function getFormatedDate(day) {
  let findDay= ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"][new Date(
    new Date() - day * 24 * 3600 * 1000
    ).getDay()]
  let findDate = new Date(
    new Date() - day * 24 * 3600 * 1000
    ).getDate()
  let dayAndDate = findDate+", "+findDay
  return dayAndDate
}

//получение дня недели в сокращенном формате
export function getdayDateformat(day) {
  let findDay= ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"][new Date(day).getDay()]
  let findDate = new Date(day).getDate()
  let dayAndDate = findDate+", "+findDay
  return dayAndDate
}

//получение даты в формате "день_недели месяц, год"
export function getFormatedDateForCards(day) {
  let date = new Date(day);
  let year = date.getFullYear();
  let month = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ][date.getMonth()];
  let dayOfMonth = date.getDate();
  let formatedDate = dayOfMonth + " " + month+", " + year;
  return formatedDate;
  }
