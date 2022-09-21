
/**
 * 
 * @param {String} text 
 * @param {getElementById} id 
 * @param {Number} delay 
 */


const strDelay = async (text: string, id: any, delay = 25) => { 
  
  return new Promise((resolve) => {
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
        resolve(null)
      }
    }, delay)
  })
}

export default strDelay