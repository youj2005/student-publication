import Topics from './Topics'
import Accounts from './Accounts'

const Navbar = (props) => {
  return (
    <nav className="navbar sticky-top navbar-expand-md navbar-light mx-0 d-flex justify-content-between border-bottom align-items-start">
          <Topics topics={props.topics}></Topics>
          <Accounts></Accounts>
      </nav>
  )
}

export default Navbar