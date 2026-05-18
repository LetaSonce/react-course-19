import "bulma/css/bulma.css";
import todos from "./todos";
import TodoList from "../components/TodoList";

function App() {
  return (
    <>
      <div className="container">
        <nav className="navbar is-light">
          <div className="navbar-brand">
            <span className="navbar-item is-uppercase">Todos</span>
          </div>
        </nav>
        <main className="content px-6 py-6">
          <TodoList list={todos} />
        </main>
      </div>
    </>
  );
}

export default App;
