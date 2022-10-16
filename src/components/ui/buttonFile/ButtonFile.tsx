import style from "./style.module.scss"

function ButtonFile({ change }) {

  return (
    <label className={`buttonSubmit ${style.file}`} >
      Файл
    <input
      onChange={(e) => change(e.target.files[0]) } 
      type="file" style={{display: "none"}}
    />
  </label>
  )
}

export default ButtonFile
