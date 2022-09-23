import indexStyles from "./style.module.scss"
import { Input, Label } from "src/components"
import { useInput } from "src/hooks"
import { InputLableProps } from "src/types"

export default function InputLabel(props: InputLableProps) {
  const { inputProps, lableProps } = useInput(props)

  return (
    <div className={indexStyles.inputWrapp}>
      <Label {...lableProps} />
      <Input {...inputProps} />
    </div>
  )
}
