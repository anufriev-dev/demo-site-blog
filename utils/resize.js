// Процедура
// функция для обработки события - "resize" 
// вызывается каждый раз при изменении разрешения экрана 

function resize (event, setState, maxSize ) {
  if(+event.target.innerWidth > maxSize) { // если width (ширина) экрана стал больше чем нужно:
    setState(false) // пытаемся закрыть бургер меню
  }
}

module.exports = resize