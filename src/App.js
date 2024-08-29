import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/Homepage/HomePage";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
import MoviePage from "./pages/Movies/MoviePage";

// 홈페이지
// 영화 전체 보여주는 페이지(서치)
// 영화 디테일 페이지
// 추천 영화 /moveis/:id/recommandation
// 리뷰 /movies/:id/reviews
function App() {
  return (
    <div className="App">
      {/*<navbar></navbar>*/}
      <Routes>
          <Route index element={<HomePage />} />
          <Route path="movies">
            <Route index element={<MoviePage />} />
            <Route path=":id" element={<MovieDetail />}/> {/* user 화면 */} /
          </Route>
      </Routes>
    </div>
  );
}

export default App;
