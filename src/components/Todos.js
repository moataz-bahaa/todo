import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions';
import { GoPlus } from 'react-icons/go';
import { motion } from 'framer-motion';


const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (obj) => dispatch(addTodo(obj))
  }
}


const Todos = ({ addItem }) => {

  const [todo, setTodo] = useState('');

  const handleChange = (ev) => {
    setTodo(ev.target.value);
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (todo === '') {
      return alert('Input Is Empty');
    }
    addItem({
      id: Math.floor(Math.random() * 10000),
      todo,
      complete: false
    });
    setTodo('');
  }

  return (
    <div className="add-todos">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="todo-input"
            placeholder="Enter Your Task"
            value={todo}
            onChange={handleChange}
          />
          <motion.button
            type="submit"
            className="add-btn"
            whileHover={{scale: 1.15}}
            whileTap={{scale: 0.8}}
          ><GoPlus /></motion.button>
        </form>
      </div>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(Todos);
