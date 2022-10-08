import { ButtonSubmit, Modal } from "src/components"
import { useSettings } from "src/hooks"
import style from "./style.module.scss"
import { IettingsModal } from "src/types"


function SettingsModal(props:IettingsModal ) {
  const {setActiveModal,activeModal } = props

  const { delete_account } = useSettings()

  const setAModal = () => {
    setActiveModal(!activeModal)
  }

  return (
    <Modal active={activeModal} onActive={setActiveModal}>
    <>
      <h1 className="text">Вы действительно хотите удалить аккаунт?</h1>
      <div className={style.wrappButtons}>
        <ButtonSubmit className={style.cancel} event={setAModal} text="Отмена" />
        <ButtonSubmit className={style.delete} event={delete_account} text="Удалить" />
      </div>
    </>
  </Modal>
  )
}

export default SettingsModal
