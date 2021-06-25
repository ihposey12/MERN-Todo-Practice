import './App.css'
import { Provider } from './context'
import Header from './components/Header'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

const App = () => {
  return (
    <Provider>
      <div className='app-container'>
        <Header />
        <AddTodo />
        <Todos />
      </div>
    </Provider>
  )
}

export default App
