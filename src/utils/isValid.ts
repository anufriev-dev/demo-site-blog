
// валидатор 3000
// может проверять на:
//        1) минимальную длинну
//        2) максимальную длинну
//        3) соответствия по регулярным выражениям
//        4) неотрицательное число
//
// расширяемый!

/**
 * @param { string } pole - проверяемая строка
 * @param { object } object - объект настроек
 */

  type isValidObject = { min?: null | number, max?: null | number, regexp?: null | RegExp, sign?: boolean }

  const isValid = (pole: string | number, object: isValidObject = { min: null, max: null, regexp: null, sign: null }) => {

  if(!pole) return false
  if(pole.toString().length < object.min) return false
  if(pole.toString().length > object.max) return false
  if(object.regexp && !object.regexp.test(pole.toString())) return false
  if(object.sign && Math.sign(+pole) === -1 ) return false

  return true // если все проверки прошли успешно, вернуть true
}



export default isValid
