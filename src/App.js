import MainPage from './pages/MainPage';
import JoinPage from './pages/member/JoinPage';
import LoginPage from './pages/member/LoginPage';
import Notice_listPage from './pages/board/Notice_listPage';
import Notice_viewPage from './pages/board/Notice_viewPage';
import Program_notiPage from './pages/Programs/Programnoti_page';
import './App.css';
import {Route,Routes} from 'react-router-dom'

function App() {
  return (
      <Routes>
        <Route path="/" exact element ={<MainPage/>}/>
        <Route path="/join" element= {<JoinPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/notice/list" element={<Notice_listPage/>}/>
        <Route path="/notice/view" element={<Notice_viewPage/>}/>
        <Route path="/info_program" element={<Program_notiPage/>}/>
      </Routes>
  );
}

export default App;
