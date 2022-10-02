/**
 *
 * @param {Number} num - число, результат
 * @param {getElementById} id - id элемента DOM
 *
 */

type tEObject = { step: number, time: number }

const timeEffect = (num: number,id: any, object: tEObject  = { step: 1, time: 1000 }) => {
  const elem = document.getElementById(id) as HTMLElement | null
  if(num <= 1) return elem.innerHTML = num.toString()

  let out = 0
  const ms = Math.round(object.time / (num / object.step))

  const render = setInterval(() => {
    out += object.step
    if(out >= num) {
      clearInterval(render)
    }
    elem.textContent = out.toString()
  }, ms)
}

export default timeEffect
