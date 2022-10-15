import React, {useState, useEffect} from 'react';
import './App.css';
import TodoForm from './TodoForm';
import Todo from './Todo';

const todos = [
  {title: '중간고사 공부', content: "hard, tedious, depressing", priority: "high", due: "2022-10-20"},
  {title: '치킨먹기', content: "delicious, cheering, delightful", priority: "medium", due: "2022-10-15"},
  {title: '게임하기', content: "fun, time-killing", priority: "low", due: "2022-12-29"}
];

function App() {
  const [submit, setSubmit] = useState();
  const [remove, setRemove] = useState(false);
  const [pfilter, setFilter] = useState('highmediumlow');
  const [todoState, setTodoState] = useState(todos);

  const checkFilter = (todo) => {
    let inc = pfilter.includes(todo.priority);
    return inc;
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  }

  useEffect(() => {
    if(submit) {
      setTodoState([...todoState, submit])
    }
  }, [todoState, submit]);

  useEffect(() => {
      if(remove) {
        setTodoState(todoState);
        setRemove(false);
      }
  }, [todoState, remove]);

  return (
    <div className="App">
      <header className="todo-head gradient-border">
        <h2>Todo Manager</h2>
      </header>
      <section className="contents">
        <div className="gradient-border">
          <TodoForm submit={submit} setSubmit={setSubmit}></TodoForm>
        </div>
        <div className="filter">
          <label className="filter-name">Filter</label>
          <select name="filter" id="filter" className="input-field" onChange={handleFilterChange} required>
            <option value="highmediumlow">All</option>
            <option value="high">🔴High</option>
            <option value="medium">🟡Medium</option>
            <option value="low">🟢Low</option>
          </select>
        </div>
        <br></br>
        {todoState
          .filter(checkFilter)
          .map((todo) => 
            <Todo key={todo.title} title={todo.title} content={todo.content} priority={todo.priority} due={todo.due} todo={todo} remove={remove} setRemove={setRemove} todoState={todoState}/>
        )}
      </section>
    </div>
  );
}

export default App;
