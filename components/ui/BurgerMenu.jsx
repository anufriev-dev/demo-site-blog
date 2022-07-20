import cn from "classnames"

export default function BurgerMenu({ styles, setIsActiveBurger,isActiveBurger }) {

  const classBurger = cn(
    styles.burger,
    isActiveBurger ? styles.burgerActive : null
  )
  
  const handler = () => {
    return setIsActiveBurger(!isActiveBurger)
  }

  return (
    <button onClick={ handler } className={ classBurger }>
      <span className={ styles.burger__line }></span>
    </button>
  )
}