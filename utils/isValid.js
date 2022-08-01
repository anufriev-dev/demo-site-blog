
// валидатор 3000
// может: 1) проверять на минимальную длинну
//        2) проверять на максимальную длинну
//        3) искать соответствия по регулярным выражениям

/**
 * @param { string } pole - проверяемая строка
 * @param { object } object - объект настроек
 * @param { number } object.min - проверка на миниальное содержание символов
 * @param { number } object.max - проверка на максимальное содержание символов
 * @param { regexp } object.regexp - проверка на соответствие регулярного выражения
 * @author Ануфриев Георгий 
 * @author github: GeorgyDev11111
 */
function isValid (pole,object = { min: null, max: null, regexp: null }) {
  
  if(object.min) {
    if(pole.length < object.min){
      return false
    }
  }
  if(object.max) {
    if(pole.length > object.max){
      return false
    }
  }
  if(object.regexp) {
    if(!object.regexp?.test(pole)){
      return false
    }
  }
  return true
}


module.exports = isValid