/**
 * 
 * @param {Number} num - число, результат
 * @param {getElementById} id - id элемента DOM
 * @param {Number} object.step - число, кусочек результата
 * @param {Number} object.time - время за которое должен произойти эффект
 */
function timeEffect (num,id, object = { step: 1, time: 1000 } ) {
  const elem = document.getElementById(id)
  if(num <= 1) return elem.innerHTML = num

  let out = 0
  const ms = Math.round(object.time / (num / object.step))

  const render = setInterval(() => {
    out += object.step
    if(out >= num) {
      clearInterval(render)
    }
    elem.textContent = out
 }, ms)
}

module.exports = timeEffect