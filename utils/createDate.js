// Создать текущую дату в формате:
// YYYY-MM-DD
export default function createDate () {
  let date = new Date()
  date = `${date.getFullYear()}-${(+date.getMonth.length < 2 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1 )}-${date.getDate()}`
  return date
}