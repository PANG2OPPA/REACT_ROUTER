import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Setting from "./pages/Setting";
import Mypage from "./pages/Mypage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Layout from "./pages/Layout";

// MyPage와 Setting 페이지 추가 해보기
// Home에서 About, MyPage, Setting페이지 링크 보여주고 이동 하도록
// 이동된 각 페이지는 홈으로 이동하는 링크 만들고 Home 이동 되도록 만들기

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Mypage" element={<Mypage />} />
          <Route path="/Setting" element={<Setting />} />
          <Route path="/profiles/:username" element={<Profile />} />
          <Route path="/articles" element={<Articles />}>
            <Route path="/articles/:id" element={<Article />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
