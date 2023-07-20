import './Btn.css'

function Btn(button) {
  return (
    <button className={button.className}>{ button.content }</button>
  )
}

export default Btn