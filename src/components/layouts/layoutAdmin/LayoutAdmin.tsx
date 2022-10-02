interface ILayputAdmin {
  children: JSX.Element
}

function LayoutAdmin (props: ILayputAdmin ) {
  const { children } = props

  return (
    <div>
      <header>

      </header>

      <ul className="">
        <li><a href="">Blog</a></li>
        <li><a href="">Пользователи</a></li>
        <li><a href=""></a></li>
      </ul>

      <main>
        { children }
      </main>
    </div>
  )
}

export default LayoutAdmin
