import Button from './Button'

const Signup = () => {

    const onClick = (e) => {
        console.log('clicked')
    }

    return (
        <Button uri="/signup" onClick={onClick} className='btn btn-primary border border-dark px-4 mx-2 align-middle' text='Sign Up to Write' ></Button>
    )
}

export default Signup