// Процедура
// функция для обработки события - "resize" 
// вызывается каждый раз при изменении разрешения экрана 

import { Dispatch, SetStateAction } from "react"

function resize (setState: Dispatch<SetStateAction<boolean>>, maxSize: number ) {
  if(window?.innerWidth > maxSize) { // если width (ширина) экрана стал больше чем нужно:
    setState(false) // пытаемся закрыть бургер меню
  }
}

export default resize