import {Link} from 'react-router-dom'

const Button = (props) => {
  return (
      <Link
      onClick={props.onClick}
      to={props.uri}
      style={{backgroundColor: props.color}}
      className={props.className}>{props.text}
      </Link>
  )
}

export default Button