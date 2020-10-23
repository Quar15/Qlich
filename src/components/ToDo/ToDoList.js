import React,{useState} from 'react';
import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";

function ToDoList(props) {

    const [todos, setTodos] = useState([]);

    const addTodo = todo => {

        // check for 'empty'(whitespace) todo
        if (!todo.text || /^\s*$/.test(todo.text)) {
          return;
        }
        // update todo list
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
          return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };
    
    const removeTodo = id => {
        const removedArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removedArr);
    };
    
    // toggle Todo
    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
          if (todo.id === id) {
            todo.isComplete = !todo.isComplete;
          }
          return todo;
        });
        setTodos(updatedTodos);
    };

    const goHome = ()=>{
        props.returnHome();
    }

    return (
        <div>
            <div class="line"></div>
            <button className="home-button" onClick={e => goHome()}>
                <img src="./img/home.png" alt=""/>
            </button>
            <div className="todo-app-wrapper">
            <h1 className="todo-app-header">What's the Plan for Today?</h1>
            <ToDoForm onSubmit={addTodo}/>
            <ToDo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
            </div>
        </div>
    )
}

export default ToDoList
