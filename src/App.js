import {Home,Navbar,Footer,MovieDetails,TVDetails,PeopleDetails,Results,Movies,TVs,People,SeasonDetails,EpisodeDetails,Error} from "./imports"

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { HashRouter } from "react-router-dom";

function App() {
  const TMDB_API_KEY = "a945aaf12d936731a6e7b91927582bd9";
  return (
    <>
          <Navbar />
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
              <Route path="" element={<Home TMDB_API_KEY={TMDB_API_KEY} />} />
              <Route
                path="/movie/:id"
                element={<MovieDetails TMDB_API_KEY={TMDB_API_KEY} />}
              />
              <Route
                path="/tv/:id"
                element={<TVDetails TMDB_API_KEY={TMDB_API_KEY} />}
              />
              <Route
                path="/person/:id"
                element={<PeopleDetails TMDB_API_KEY={TMDB_API_KEY} />}
              />
              <Route
                path="/results"
                element={<Results TMDB_API_KEY={TMDB_API_KEY} />}
              />
              <Route
    
                path = "/movies"
                element={<Movies TMDB_API_KEY={TMDB_API_KEY} />}
              />
              <Route
                path="/tv_shows"
                element={<TVs TMDB_API_KEY={TMDB_API_KEY} />}
              />
              <Route
                path="/people"
                element={<People TMDB_API_KEY={TMDB_API_KEY} />}
              />
              <Route
                path="/tv/:id/season/:season_number"
                element={<SeasonDetails TMDB_API_KEY={TMDB_API_KEY} />}
              />
               <Route
                path="/tv/:id/season/:season_number/episode/:episode_number"
                element={<EpisodeDetails TMDB_API_KEY={TMDB_API_KEY} />}
              />
              <Route
                path="/error"
                element={<Error TMDB_API_KEY={TMDB_API_KEY} />}
              />
            </Routes>
          </BrowserRouter>
          <Footer />
    </>
  );
}

export default App;
