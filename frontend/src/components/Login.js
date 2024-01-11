import Button from './Button'

const Login = () => {

    const onClick = (e) => {
        console.log('clicked')
    }

    return (
        <Button onClick={onClick} className='btn btn-primary border border-dark px-4 mx-2 me-3 align-middle' text='Login'></Button>
    )
}


export default Login