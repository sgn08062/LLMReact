import {Route, Routes} from "react-router-dom";
import TopNav from "./layout/TopNav";
import './App.css';
import Login from "./component/Login/Login";
import AuthHandler from "./auth/AuthHandler";


function App() {

  return(
    <Routes>
      <Route element={<TopNav/>}>
        {/* 권한이 필요없는 페이지 목록 */}
        <Route path={'/login'} element={<Login/>}/>
      </Route>

      <Route element={<AuthHandler/>}>
        {/* 권한이 필요한 페이지 목록 */}
      </Route>
    </Routes>
  );
}
export default App;
