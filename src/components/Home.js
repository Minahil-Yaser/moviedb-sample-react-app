import React from "react";
import "./css/home.css";
import "./css/loader.css";
import useFetch from "./useFetch";

const Home = ({ TMDB_API_KEY }) => {
  const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${TMDB_API_KEY}`;

  const { data, res_status } = useFetch(url);
  if (data === null) {
    return (
      <>
        <div className="loadscreen">
          {" "}
          <div className="loader"></div>
        </div>
      </>
    );
  } else {
    if (res_status === 200) {
      return (
        <>
          {data && (
            <>
              <div className="container-fluid2">
                <p>Welcome!</p>
                <h3>
                  Look out for millions of the best, popular and trending
                  movies, TV shows and people.
                </h3>
                <h2>Explore Now</h2>
              </div>
              <div className="container-fluid3">
                <h2>What's trending today 🔥</h2>
              </div>
              <div className="container-fluid">
                <div className="row1">
                  {data["results"].map((res) => {
                    return (
                      <div key={res.id} className="column1">
                        <div className="flip-card">
                          <div className="flip-card-inner">
                            <div className="flip-card-front">
                              <img
                                style={{ borderRadius: 15 }}
                                src={
                                  "https://image.tmdb.org/t/p/w200/" +
                                  res.poster_path
                                }
                                alt="No preview"
                              />
                            </div>

                            <div className="flip-card-back">
                              {res.media_type === "movie" && (
                                <>
                                  <br></br>
                                  <h3>{res.title}</h3>
                                  <br></br>
                                  <p>Media Type: Movie</p>
                                  <p>Release Date: {res.release_date}</p>
                                  <p>Popularity: {res.popularity}</p>
                                  <br></br>
                                  <button className="btn1">
                                    <a
                                      style={{ color: "#d6d6d6" }}
                                      href={"/moviedb-sample-react-app/movie/" + res.id}
                                    >
                                      View Details
                                    </a>
                                  </button>
                                </>
                              )}
                              {res.media_type === "tv" && (
                                <>
                                  <br></br>
                                  <h3>{res.name}</h3>
                                  <br></br>
                                  <p>Media Type: TV</p>
                                  <p>Release Date: {res.first_air_date}</p>
                                  <p>Popularity: {res.popularity}</p>
                                  <br></br>
                                  <button className="btn1">
                                    <a
                                      style={{ color: "#d6d6d6" }}
                                      href={"/moviedb-sample-react-app/tv/" + res.id}
                                    >
                                      View Details
                                    </a>
                                  </button>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </>
      );
    } else {
      return (
        <>
          <h2>Something Went Wrong</h2>
        </>
      );
    }
  }
};

export default Home;
