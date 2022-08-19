
/**
 * 
 * @param {String} text 
 * @param {getElementById} id 
 * @param {Number} delay 
 */
async function strDelay(text,id,delay = 25) {
  return new Promise((res) => {
    const html = document.getElementById(id)
    let out = ""
    let count = 0
  
    const render = setInterval(() => {
      out += text[count]
  
      if(text[count] !== "<") {
        html.innerHTML = out
      }
      count++
  
      if(count >= text.length) {
        clearInterval(render)
        res()
      }
    }, delay)
  })
}

module.exports = strDelay