"use strict"
/**
 * Преобразует текст в несколько предложений,
 * по умолчанию: 3
 * 
 * @param {string} text - текст
 * @param {number} sentence - кол-во предложений, которые нужно вытащить
 * @author Ануфриев Георгий
 * @author github: GeorgyDev11111
 */
 const toSliceText = (text, sentence = 3) => {
  const regexp = /[!\.\?](?=\s|$|[a-zа-ё])/gi  // (! || . || ? ).(" " || "конец строки" || [алфавит]) 
  
  const points = [...text.matchAll(regexp)] // все найденные символы в строке : [[...],[...]]

  if(!points.length) return text // если не было найдено ни одного искомого символа

  const result = [] // результируемый массив строк : String
  let previous = 0      // предыдущее состояние index (искомого символа)
  for( const { index } of points) {
    result.push(text.slice(previous, index + 1)) // Добавляем по каждой строке (вырезанной из предложения) в массив
    previous = index + 1  // сохраняем текущее состояния в предыдущее
  }

  return result.map((fragment,index) => ( index <= (sentence - 1) ) ? fragment : null ).join("") 
}

module.exports = toSliceText