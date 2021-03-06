const Todo = (props) => {
    const { title } = props.todo

    return (
        <h3 className='text-dark-center text-center p-1 bg-light border-bottom'>
            <i className='far fa-times-circle fa-sm float-left m-1 text-danger'></i>{title}
            <input type='checkbox' className='m-2 float-right' />
        </h3>
    )
}

export default Todo