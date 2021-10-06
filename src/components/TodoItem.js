import React, { useRef } from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';
import { motion } from 'framer-motion';

const TodoItem = ({ item, deleteItem, updateItem, completeTodo }) => {
  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  }

  const update = (ev, id, value) => {
    if (ev.which === 13) {
      updateItem(id, value);
      inputRef.current.disabled = true;
    }
  }

  return (
    <motion.li
      initial={{x: '100%'}}
      transition={{type: 'spring', duration: 0.7}}
      animate={{x: 0}}
      whileHover={{
        scale: 0.9,
        transition: { type: 'spring', duration: 0.3}
      }}
      exit={{x: '-100%', opacity: 0, backgroundColor: 'red'}}
      className="card"
    >
      <textarea
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.todo}
        onKeyPress={(ev) => update(ev, item.id, inputRef.current.value)}
      />
      <div className="btns">
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={changeFocus}>
          <AiFillEdit />
        </motion.button>
        {item.complete === false && (
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => completeTodo(item.id)}
            style={{ color: 'green' }}
          >
            <IoCheckmarkDoneSharp />
          </motion.button>
        )}
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => deleteItem(item.id)}
          style={{ color: 'crimson' }}
        >
          <AiFillDelete />
        </motion.button>
      </div>
      {item.complete && <span className="complete">done</span>}
    </motion.li>
  );
};

export default TodoItem;