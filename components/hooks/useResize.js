import { useEffect } from "react"
import resize from "../../utils/resize"


// закрыть выпадающее меню при ресайзе
// если ширина экрана выйдет за пределы максимальной, закрыть бург. меню
function useResize(setState,maxSize) {
  useEffect(() => {
    window?.addEventListener("resize", (event) => resize(event, setState, maxSize))
    return () => window?.removeEventListener("resize", resize)
  })
}

export default useResize