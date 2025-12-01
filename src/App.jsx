import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Movies } from "./pages/Movies.jsx";
import { TVSeries } from "./pages/TVSeries.jsx";
import { SearchPage } from "./pages/SearchPage.jsx";
import { MyLayout } from "./components/MyLayout.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MyLayout />}>
        <Route path="/" element={<Movies />} />
        <Route path="/tvseries" element={<TVSeries />} />
        <Route path="/search" element={<SearchPage />} />
      </Route>
    </Routes>
  );
}
