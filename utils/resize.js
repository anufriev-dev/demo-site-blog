// Процедура
// функция для обработки события - "resize" 
// вызывается каждый раз при изменении разрешения экрана 

const resize = (event, setState, px ) => {
  +event.target.innerWidth > px // если width (ширина) экрана стал больше чем нужно:
    ? setState(false) // пытаемся закрыть бургер меню:
    : undefined       // нет ? ну и ладно, выкинем undefined
}

module.exports = resize