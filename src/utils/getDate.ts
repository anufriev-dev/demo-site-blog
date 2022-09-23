
//2000-12-31T00:00:00.000Z -> 2000-12-31 + отображает правильный часовой пояс

function getDate (date: string) { // format 2000-12-31T00:00:00.000Z

  const offset = new Date().getTimezoneOffset() / 60
  
  const time = new Date(date).getTime()

  const _date = new Date(time + ( Math.abs(offset) * ( 5 * 720_000 ) ))

  const month = new Date(_date).getUTCMonth() + 1
  const year = new Date(_date).getUTCFullYear()
  const day = new Date(_date).getUTCDate()

  
  return `${year}-${month}-${day}` // 2000-12-31
}

export default getDate