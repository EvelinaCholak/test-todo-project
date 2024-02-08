import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Pages/Main";
import Todo from "./Pages/Todo";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/todo" exact element={<Todo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
