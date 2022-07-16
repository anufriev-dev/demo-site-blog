/**
 * ```
 * "/string/[params]" -> "/string"
 * ```
 */
module.exports = function trim (string) // : string
{ 
  // ожидаем путь вида: "/str/[id]" 
  if(string.includes("[")) { // если находим "[" в "/str/[params]"
    const elemR = string.indexOf("[") // берём индекс этой скобки
    return string.slice(0,elemR - 1)  // обрезаем: "/[params]", получаем "/str"
  }
  return string // если параметров: "[params]" не было найдено, возвращаем путь как есть
}