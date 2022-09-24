import { MouseEvent } from "react"
import { useContactMe } from "../../../hooks"
/* components
   -------------------------------------------------- */
import { FormAuth, InputLabel, TextArea } from "src/components"
/* fake data
   -------------------------------------------------- */
import { contactme } from "config/filling_data"


export default function FormContactMe() {
  const { email, area, setEmail, setArea, dropState } = useContactMe()

  async function submit (e: MouseEvent<HTMLElement>) {
    e.preventDefault()
    // Logic ...
    dropState()
  }

  const formProps = {
    id: "contact_me", submitText: "Отправить сообщение",
    submit, title: "Напишите мне", text: contactme.text 
  }

  return (
    <>
    <FormAuth { ...formProps} >
      <div>
        <p className="text"> Я не всегда могу ответить оперативно, но стараюсь отвечать в течении пары дней максимум.</p>
        <br />
        <p className="text text-blue"id="textWarning"></p>

        <InputLabel id={"email"} state={email} setState={setEmail} text="E-mail"/> 
        <TextArea state={area} setState={setArea} placeholder={"Сообщение"}/>
      </div>
    </FormAuth>
    </>
  )
}
