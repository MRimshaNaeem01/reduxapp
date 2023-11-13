import React, { useState } from 'react'
import AddTodo from '../features/todos/AddTodo'
import Todo from '../features/todos/Todo'

const ToDo = () => {
    const [newText, setNewText] = useState('');
  const [id, setId] = useState(null);
  const [itemBorder, setItemBorder] = useState(null);

  const updateText = (text, idd) => {
    setNewText(text);
    setId(idd)
  };
  const updateId = (id) => {
    setItemBorder(id)
  };

  return (
    <div className='mainTodo'>
     <AddTodo onTextChange={newText} onIdChange={id} editItemId={itemBorder}/>
    <Todo onUpdateText={updateText} updateId={updateId} />
    </div>
  )
}

export default ToDo