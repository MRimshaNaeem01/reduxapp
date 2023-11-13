import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../todo/todoSlice';
import './todo.css'

const AddTodo = ({ onTextChange, onIdChange, editItemId }) => {
    console.log("onIdChange addTodo =>", editItemId)
    const dispatch = useDispatch();
    const [input, setInput] = useState('');
    const [showUpdate, setShowUpdate] = useState(false);
    const [background, setBackground] = useState();

    console.log("background addTodo =>", background)


    const onTitleChanged = (e) => {
        setInput(e.target.value);
        // onTextChange(e.target.value)
    }
    const addTodoHandler = (e) => {
        console.log("form")
        e.preventDefault();
        dispatch(addTodo(input))
       setBackground(null)
        setInput('')

    }
    const updateTodoHandler = (e) => {
        console.log("update runing")
        e.preventDefault();
        if (onTextChange) {
            dispatch(updateTodo({ id: onIdChange, newText: input }))
            setBackground(null)

        }
        setInput('')
        setShowUpdate(false)

    }

    useEffect(() => {
        setBackground(null)

    }, [updateTodoHandler]);

    useEffect(() => {
        console.log("show use");

        setInput(onTextChange);
        if (onTextChange?.length > 0) {
            setShowUpdate(true)
            console.log("show yes");

        }
    }, [onTextChange]);

    return (
        <section className='addtodsec'>
            <h1 className='heads1 flex justify-center items-center  text-gray-900'>Add Your Todo</h1>
            <form className='todofrom space-x-3 mt-12 justify-center items-center'>
                <input className="bg-gray-200 rounded border border-gray-700
                 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 
                 text-base  outline-none text-gray-600 py-1 px-3 leading-8 
                 transition-colors duration-200 ease-in-out"
                    type="text"
                    style={{ width: '100%' }}

                    id='postTitle'
                    name='todo'
                    value={input}
                    onChange={onTitleChanged}
                    placeholder='Enter your Todo..'
                />
                {
                    showUpdate ? <button type='button'
                        className="text-white bg-indigo-300 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-400 rounded text-lg"
                        style={{width: '200px', display: 'flex', justifyContent: 'center'}}
                        onClick={updateTodoHandler}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="green"  // Change the stroke color for updating state
                            className="w-6 h-6"
                        >
                            <path d="M12 2v10l3 3m6-3v4a1 1 0 01-1 1H3a1 1 0 01-1-1v-4a1 1 0 011-1h2m14-9a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h14z" />

                        </svg>
                    </button> :
                        <button type='button'
                            className="addTodobtn text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                            onClick={addTodoHandler}>Add Todo</button>

                }
            </form>
        </section>
    )
}
export default AddTodo