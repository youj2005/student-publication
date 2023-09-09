import Proptypes from 'prop-types'

const Button = (props) => {
  return (
    <button 
    onClick={props.onClick}
    style={{backgroundColor: props.color}} 
    className={props.className}>{props.text}
    </button>
  )
}

export default Button