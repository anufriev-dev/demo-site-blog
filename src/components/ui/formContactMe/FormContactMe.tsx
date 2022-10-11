import { MouseEvent } from "react"
import { useContactMe } from "../../../hooks"
import { FormAuth, InputLabel, TextArea, ButtonSubmit } from "src/components"
import { contactme } from "config/filling_data"
import { isValid } from "src/utils"
import { RegExpEmail } from "config"
import TextWarningForm from "../textWarningForm"
import { Message } from "src/http"


export default function FormContactMe() {
  const { email, area, setEmail, setArea, dropState, error, setError, success, setSuccess } = useContactMe()

  async function submit (e: MouseEvent<HTMLElement>) {
    e.preventDefault()
    setError({ ...error ,area: false , email: false })
    if(!isValid(email, { regexp: RegExpEmail })){
      setError({ ...error, email: true })
      return
    }
    if(!isValid(area, { min: 10, max: 1000 })){
      setError({ ...error, area: true })
      return
    }
    
    const result = await Message.add({ email , message: area })
    if(result === "OK") {
      dropState()
      setSuccess(true)
    }else {
      setError({ ...error , send: true })
    }

  }

  const formProps = {
    id: "contact_me",
    title:  success ? "Сообщение доставленно" : "Напишите мне", 
    text: contactme.text
  }


  return (
    <>
    <FormAuth { ...formProps} >
      <div>
        <p className="text"> Я не всегда могу ответить оперативно, но стараюсь отвечать в течении пары дней максимум.</p>
        <br />
        <p className="text text-blue"id="textWarning"></p>
        { error.email && <TextWarningForm>Email невалидный</TextWarningForm> }
        { error.send && <TextWarningForm>Сообщение не отправилось, попробуйте еще раз</TextWarningForm> }
        <InputLabel disabled={success} id={"email"} state={email} setState={setEmail} text="E-mail"/>
        { error.area && <TextWarningForm>Текст невалидный</TextWarningForm> }
        <TextArea disabled={success} state={area} setState={setArea} placeholder={"Сообщение"}/>
        <ButtonSubmit event={submit} text="Отправить сообщение"  />
      </div>
    </FormAuth>
    </>
  )
}
