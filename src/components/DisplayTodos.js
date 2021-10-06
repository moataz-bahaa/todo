import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { removeTodo, setComplete, updateTodo } from '../redux/actions';
import TodoItem from './TodoItem';
import { motion } from 'framer-motion';

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (id) => dispatch(removeTodo(id)),
    updateItem: (id, item) => dispatch(updateTodo(id, item)),
    completeTodo: (id) => dispatch(setComplete(id))
  }
}

const DisplayTodos = ({ todos, deleteItem, updateItem, completeTodo }) => {

  const [sort, setSort] = useState('active');

  return (
    <div className="display-todos">
      <div className="buttons">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort('active')}
        >
          Active
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort('complete')}
        >
          Complete
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort('all')}
        >
          All
        </motion.button>
      </div>
      <ul>
        <AnimatePresence>
          {
            todos.length > 0 && sort === 'active'
              ? todos.map((item) => {
                return item.complete === false && (
                  <TodoItem
                    key={item.id}
                    item={item}
                    deleteItem={deleteItem}
                    updateItem={updateItem}
                    completeTodo={completeTodo}
                  />
                )
              })
              :
              sort === 'complete'
                ?
                todos.map((item) => {
                  return item.complete === true && (
                    <TodoItem
                      key={item.id}
                      item={item}
                      deleteItem={deleteItem}
                      updateItem={updateItem}
                      completeTodo={completeTodo}
                    />
                  )
                })
                :
                todos.map((item) => (
                  <TodoItem
                    key={item.id}
                    item={item}
                    deleteItem={deleteItem}
                    updateItem={updateItem}
                    completeTodo={completeTodo}
                  />
                ))
          }
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);