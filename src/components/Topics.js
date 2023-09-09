import Topic from './Topic'

const Topics = (props) => {
  return (
    <div className='ms-2 align-self-center'>
      <button className="navbar-toggler border-0" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse ms-2" id="navbarNav">
        <ul className='navbar-nav ms-2'>
          {props.topics.map((topic) => (
          <Topic key={topic.id} text={topic.text}></Topic>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Topics