import indexStyles from "./scss/index.module.scss"

export default function TextArea({ placeholder, state, setState }) {
  return (
    <>
      <textarea
        placeholder={placeholder} 
        className={indexStyles.textArea}
        value={state}
        onChange={(e) => setState(e.target.value)} 
      />    
    </>
  )
}

