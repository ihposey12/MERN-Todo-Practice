import Todo from './Todo'
import { Consumer } from '../context'

const Todos = () => {
    return (
        <Consumer>{value => {
            const { todos } = value
            return todos.map(t => <Todo todo={t} key={t.id} />)
        }}</Consumer>
    )
}

export default Todos