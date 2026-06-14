import "bulma/css/bulma.css";
import { initialTodos } from "./todos";
import TodoList from "../components/TodoList";
import { useState } from "react";

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
        </main>
      </div>
    </>
  );
}

export default App;
