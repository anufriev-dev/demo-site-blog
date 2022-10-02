import { DropDownItem } from "src/components"
import { useSession } from "next-auth/react"

const DropDownMenu = ({ styles }) => {
  const { data: session } = useSession()

  return (
    <div className={styles.dropDown__wrapp}>
    <div className={styles.dropDown}>
      { !session &&
        <>
          <DropDownItem
            style={styles} name="Вход"
            href={process.env["NEXT_PUBLIC_LOGIN"]}
          />
          <DropDownItem
            style={styles} name="Регистрация"
            href={process.env["NEXT_PUBLIC_REGISTRATION"]}
          />
        </>
      }
    </div>
  </div>
  )
}

export default DropDownMenu
