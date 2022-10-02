

function dateTimeZone (date: Date) {
  const offset = new Date().getTimezoneOffset() / 60

  const time = new Date(date).getTime()

  const _date = new Date(time + ( Math.abs(offset) * ( 5 * 720_000 ) ))

  return _date
}

export default dateTimeZone
