import { Dispatch, SetStateAction, useEffect } from "react"
import { resize } from "../../utils"


// закрыть выпадающее меню при ресайзе
// если ширина экрана выйдет за пределы максимальной, закрыть бург. меню
function useResize(setState: Dispatch<SetStateAction<boolean>> ,maxSize: number ) {
  useEffect(() => {
    window?.addEventListener("resize", () => resize(setState, maxSize))
    return () => window?.removeEventListener("resize", resize)
  })
}

export default useResize