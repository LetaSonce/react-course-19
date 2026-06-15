import "bulma/css/bulma.css";
import { initialTodos } from "./todos";
import TodoList from "../components/TodoList";
import { useState } from "react";
import { type ITodo } from "../types/ITodo";
import TodoAdd from "../components/TodoAdd";

function App() {

  const [todos, setTodos] = useState(initialTodos);

  const setDone = (key: number) => {
    const newTodos = [...todos];
    const deed = newTodos.find(item => item.key === key);
    if (deed) {
      deed.done = true;
    }
    setTodos(newTodos);
    console.log(deed);
  }

  const del = (key: number) => {
    const newTodos = todos.filter(item => item.key !== key);
    setTodos(newTodos);
  }

  const add = (deed: ITodo) => {
    setTodos([...todos, deed]);
  }

  return (
    <>
      <div className="container">
        <nav className="navbar is-light">
          <div className="navbar-brand">
            <span className="navbar-item is-uppercase">Todos</span>
          </div>
        </nav>
        <main className="content px-6 py-6">
          <TodoList list={todos} setDone={setDone} del={del} />
          <TodoAdd add={add} />
        </main>
      </div>
    </>
  );
}

export default App;
