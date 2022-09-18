import { useContactMe } from "../hooks"
/* components
   -------------------------------------------------- */
import { FormAuth, Input, TextArea } from "../../components"
/* fake data
   -------------------------------------------------- */
import { contactme } from "../../fake_database"


export default function FormContactMe() {
  const { email, area, setEmail, setArea, dropState } = useContactMe()

  const submit = async (e) => {
    e.preventDefault()
    // Logic ...
    dropState()
  }
  return (
    <>
    <FormAuth
      submit={submit}
      text={contactme.text } 
      btnLabel={"Отправить сообщение"}
      title={"Напишите мне"}
    >
      <p className="text"> Я не всегда могу ответить оперативно, но стараюсь отвечать в течении пары дней максимум.</p>
      <br />
      <p className="text text-blue"id="textWarning"></p>

      <Input id={"email"} state={email} setState={setEmail} text="E-mail"/> 
      
      <TextArea state={area} setState={setArea} placeholder={"Сообщение"}/>

    </FormAuth>
    </>
  )
}
