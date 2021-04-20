import React from 'react';
import Todo from './Todo'

export default function TodoList() {
    const [item, setItem] = React.useState('');
    const [todos, setTodos] = React.useState([]);

    const handleChange = (event) => {
        setItem(event.target.value)
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && item !== '') {
            const MY_NEW_FANTASTIC_TODO = {
                label: item,
                done: false
            };
            setTodos([...todos, MY_NEW_FANTASTIC_TODO]);
            setItem('');
        }
    }

    const handleDoneChange = (label) => {
        const tempTodos = todos.map((todo) => {
            if (label === todo.label) {
                todo.done = !todo.done;
            }
            return todo;
        });
        setTodos(tempTodos);
    }

    return (
        <div>
            <h2>TodoList</h2>
            <input
                type="text" // STRING
                value={item} // STRING
                placeholder="Your todo" // STRING
                onChange={handleChange} // FUNCTION
                onKeyDown={handleKeyDown} // FUNCTION
            />
            <div>
                <div>
                    A FAIRE :
                {todos.map(el => {
                    if (!el.done) {
                        return <Todo
                            label={el.label}
                            done={el.done}
                            functionOnCheck={handleDoneChange}
                        />
                    } else {
                        return null;
                    }
                })}
                </div>
                <div>
                    TERMINE :
                {todos.map(el => {
                    if (el.done) {
                        return <Todo
                            label={el.label}
                            done={el.done}
                            functionOnCheck={handleDoneChange}
                        />
                    } else {
                        return null;
                    }
                })}
                </div>
            </div>
        </div>
    );
}
