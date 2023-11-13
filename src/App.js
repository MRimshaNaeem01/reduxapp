import './App.css';
import './index.css'
import { Routes, Route } from 'react-router-dom';
import ToDo from './pages/ToDo';
import Front from './pages/Front';
import PasswordValidator from './features/passwordValidator/PasswordValidator';
import TicTacToe from './features/tictactoe/TicTacToe';
import ReactTable from './features/table/ReactTable';
import FormValid from './features/form/FormValid';
import Quiz from './features/quizApp/Quiz';
import AnimatedCube from './features/animatedCube/AnimatedCube';


function App() {

  return (
    // <div className="App">
    // {/* <Couner /> */}
    // {/* <AddPost />
    // <PostList /> */}
    // <AddTodo onTextChange={newText} onIdChange={id} editItemId={itemBorder}/>
    // <Todo onUpdateText={updateText} updateId={updateId} />
    // </div>

    <Routes>
      <Route path="/" element={<Front />} />
      <Route path="/todo-app" element={<ToDo />} />
      <Route path="/password-validator" element={<PasswordValidator />} />
      <Route path="/tic-tac-toe" element={<TicTacToe />} />
      <Route path="/react-table" element={<ReactTable />} />
      <Route path="/form-valid" element={<FormValid />} />
      <Route path="/quiz-app" element={<Quiz />} />
      <Route path="/animated-cube" element={< AnimatedCube />} />

    </Routes>


  );
}

export default App;
