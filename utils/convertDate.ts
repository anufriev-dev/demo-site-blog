
// Форматтер даты
// 2000-12-31 -> 31 Декабря 2000

function convertDate (date) {  // YEAR-{ MONTH : number  }-DAY  // 2000-12-31
  const MONTHS = [
    "Января", "Февраля", "Марта", "Апреля",
    "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября",
    "Ноября", "Декабря"
  ]
  const result = date.split("-")

  return `${ result[2] } ${ (MONTHS[+result[1] - 1]) } ${ result[0] }` // DAY { MONTH : string } YEAR // 31 Декабря 2000
}

export default convertDate