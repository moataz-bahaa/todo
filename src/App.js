import './css/main.css'
import Todos from './components/Todos';
import DisplayTodos from './components/DisplayTodos';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="app">
      <motion.h1
        initial={{y: -200}}
        animate={{y: 0}}
        transition={{duration: 0.6, type: 'spring'}}
        className="todo-app"
      >
        Todo App
      </motion.h1>
      <motion.div
        initial={{y: 200}}
        transition={{duration: 1, type: 'spring'}}
        animate={{y: 0}}
      >
        <Todos />
        <DisplayTodos />
      </motion.div>
    </div>
  );
}

export default App;
