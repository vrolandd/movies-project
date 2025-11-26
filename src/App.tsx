import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Movies } from "./pages/Movies.tsx";
import { TVSeries } from "./pages/TVSeries.tsx";
import { SearchPage } from "./pages/SearchPage.tsx";
import { MyLayout } from "./components/MyLayout.tsx";

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
