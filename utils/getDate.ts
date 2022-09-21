
//2000-12-31T00:00:00.000Z -> 2000-12-31 + отображает правильный часовой пояс

function getDate (date) { // format 2000-12-31T00:00:00.000Z

  const offset = new Date().getTimezoneOffset() / 60
  date = new Date(date).getTime()

  date = new Date(date + ( Math.abs(offset) * ( 5 * 720_000 ) ))

  const month = new Date(date).getUTCMonth() + 1
  const year = new Date(date).getUTCFullYear()
  const day = new Date(date).getUTCDate()

  
  return `${year}-${month}-${day}` // 2000-12-31
}

export default getDate