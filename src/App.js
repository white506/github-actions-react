import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import Input from "./components/Input";

function App() {
  return (
    <div className="App">
      <ClassCounter />
      <Counter />
      <Input />
      <div className="post">
        <div className="post__content">
          <strong>1. Javascript</strong>
          <div>Javscript - Это язык програмирования</div>
          <div className="post__btns">
            <button>удалить</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
