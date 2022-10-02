
// валидатор 3000
// может проверять на:
//        1) минимальную длинну
//        2) максимальную длинну
//        3) соответствия по регулярным выражениям
//
// расширяемый!

/**
 * @param { string } pole - проверяемая строка
 * @param { object } object - объект настроек
 */

  type isValidObject = { min?: null | number, max?: null | number, regexp?: null | RegExp }

  const isValid = (pole: string, object: isValidObject = { min: null, max: null, regexp: null }) => {

  if(!pole) return false
  if(pole.length < object.min) return false
  if(pole.length > object.max) return false
  if(object.regexp && !object.regexp.test(pole)) return false

  return true // если все проверки прошли успешно, вернуть true
}



export default isValid
