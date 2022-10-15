import React from 'react';

const pColor = {
    'high': '#ff8f8f',
    'medium': 'yellow',
    'low': '#8fff9e'
}

const Todo = ({ title, content, priority, due, todo, remove, setRemove, todoState }) => {
  const removeTodo = (event) => {
    console.log("removed!");
    todoState.find(entry => entry.title === todo.title).priority = 'removed';
    setRemove(true);
  }
  
  return (
    priority !== 'removed' ?
      <div className="todo" style={{borderColor: pColor[priority]}}>
        <button className="todo-close-button" aria-label="Close alert" type="button" onClick={removeTodo}>
          <span aria-hidden="true">&times;</span>
        </button>
        <h4 className="todo-title">{title}</h4>
        <p className="todo-content">{content}</p>
        <p className="todo-due">Due: {due}</p>
      </div> : <></>
  );
};

export default Todo;
