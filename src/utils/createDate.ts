// Создать текущую дату в формате:
// YYYY-MM-DD
function createDate () {
  let date: Date | string = new Date()
  date = `${date.getFullYear()}-${(+date.getMonth.length < 2 ? ((date.getMonth() + 1) < 10 ? "0" : "") + (date.getMonth() + 1) : date.getMonth() + 1 )}-${date.getDate()}`
  return date
}

export default createDate
