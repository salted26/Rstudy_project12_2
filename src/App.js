import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/Homepage/HomePage";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
import MoviePage from "./pages/Movies/MoviePage";
import AppLayout from "./layout/AppLayout";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

// 홈페이지
// 영화 전체 보여주는 페이지(서치)
// 영화 디테일 페이지
// 추천 영화 /moveis/:id/recommandation
// 리뷰 /movies/:id/reviews
function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<AppLayout />}>
              <Route index element={<HomePage />} />
              <Route path="movies">
                <Route index element={<MoviePage />} />
                <Route path=":id" element={<MovieDetail />}/> {/* user 화면 */} /
              </Route>
          </Route>

          <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
