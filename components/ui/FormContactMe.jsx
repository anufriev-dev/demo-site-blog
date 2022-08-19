import { useState } from "react"
import FormAuth from "../../components/other/formAuth"
import Input from "../../components/other/Input"
import TextArea from "../other/textArea/TextArea"
import { contactme } from "../../fake_database"
import { useEffect } from "react"
import strDelay from "../../utils/strDelay"

export default function FormContactMe() {

  const [email, setEmail] = useState("")
  const [area, setArea] = useState("")

  const text = "Убедись, что e-mail верный, иначе ответ не дойдет"
  useEffect(() => {
    strDelay(text,"textWarning")

  },[text])


  const dropState = () => {
    setEmail("")
    setArea("")
  }

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
  );
}
