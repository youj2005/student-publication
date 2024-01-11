import {Link} from 'react-router-dom'

const Topic = (props) => {
  return (
    <li className='nav-item h5 fw-medium bt-1 m-0'>
      <Link className='nav-link' href='#' to={"/"+props.text.toLowerCase().replace(" ","")}>{props.text}</Link>
    </li>
  )
}

export default Topic