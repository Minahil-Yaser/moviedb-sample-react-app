import useFetch from "./useFetch";
import "./css/movies.css";
import "./css/loader.css";

const Movies = ({ TMDB_API_KEY }) => {
  const url2 = `https://api.themoviedb.org/3/trending/movie/week?api_key=${TMDB_API_KEY}&language=en-US`;
  const url3 = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US`;
  const url4 = `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US`;
  const url5 = `https://api.themoviedb.org/3/movie/upcoming?api_key=${TMDB_API_KEY}&language=en-US`;
  const url6 = `https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_API_KEY}&language=en-US`;

  const { data: trending, res_status: res_status2 } = useFetch(url2);
  const { data: popular, res_status: res_status3 } = useFetch(url3);
  const { data: top, res_status: res_status4 } = useFetch(url4);
  const { data: up, res_status: res_status5 } = useFetch(url5);
  const { data: now, res_status: res_status6 } = useFetch(url6);

  console.log("D2", trending);
  console.log("D3", popular);
  console.log("D4", top);
  console.log("D5", up);
  console.log("D6", now);

  if (
    trending === null ||
    popular === null ||
    top === null ||
    up === null ||
    now === null
  ) {
    return (
      <>
        <div className="loadscreen">
          {" "}
          <div className="loader"></div>
        </div>
      </>
    );
  } else {
    if (
      res_status2 === 200 &&
      res_status3 === 200 &&
      res_status4 === 200 &&
      res_status5 === 200 &&
      res_status6 === 200
    ) {
      return (
        <>
          <div className="container first">
            <div className="heading">
              <h2>Trending Movies of the Week</h2>
              <br></br>
            </div>
            <div className="scrolling-wrapper">
              {trending["results"].map((trend, index01) => {
                return (
                  <>
                    <div key={index01} className="flip-card">
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          {trend.poster_path && (
                            <img
                              style={{ borderRadius: 15 }}
                              src={
                                "https://image.tmdb.org/t/p/w200" +
                                trend.poster_path
                              }
                              alt="..."
                            ></img>
                          )}
                        </div>{" "}
                        <div className="flip-card-back">
                          <br></br>
                          <h4>{trend.title}</h4>
                          <br></br>
                          <p>Release Date: {trend.release_date}</p>
                          <p>Popularity: {trend.popularity}</p>
                          <br></br>
                          <a href={"/moviedb-sample-react-app/movie/" + trend.id + "/"} class="btn1">
                            View Details
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <br></br>
            <br></br>

            <div className="heading">
              <h2>Popular Movies</h2>
              <br></br>
            </div>
            <div className="scrolling-wrapper">
              {popular["results"].map((pop, index01) => {
                return (
                  <>
                    <div key={index01} className="flip-card">
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          {pop.poster_path && (
                            <img
                              style={{ borderRadius: 15 }}
                              src={
                                "https://image.tmdb.org/t/p/w200" +
                                pop.poster_path
                              }
                              alt="..."
                            ></img>
                          )}
                        </div>{" "}
                        <div className="flip-card-back">
                          <br></br>
                          <h4>{pop.title}</h4>
                          <br></br>
                          <p>Release Date: {pop.release_date}</p>
                          <p>Popularity: {pop.popularity}</p>
                          <br></br>
                          <a href={"/moviedb-sample-react-app/movie/" + pop.id + "/"} class="btn1">
                            View Details
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <br></br>
            <br></br>

            <div className="heading">
              <h2>Top-rated Movies</h2>
              <br></br>
            </div>
            <div className="scrolling-wrapper">
              {top["results"].map((topr, index01) => {
                return (
                  <>
                    <div key={index01} className="flip-card">
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          {topr.poster_path && (
                            <img
                              style={{ borderRadius: 15 }}
                              src={
                                "https://image.tmdb.org/t/p/w200" +
                                topr.poster_path
                              }
                              alt="..."
                            ></img>
                          )}
                        </div>{" "}
                        <div className="flip-card-back">
                          <br></br>
                          <h4>{topr.title}</h4>
                          <br></br>
                          <p>Release Date: {topr.release_date}</p>
                          <p>Popularity: {topr.popularity}</p>
                          <br></br>
                          <a href={"/moviedb-sample-react-app/movie/" + topr.id + "/"} class="btn1">
                            View Details
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <br></br>
            <br></br>

            <div className="heading">
              <h2>Upcoming Movies</h2>
              <br></br>
            </div>
            <div className="scrolling-wrapper">
              {up["results"].map((upcoming, index01) => {
                return (
                  <>
                    <div key={index01} className="flip-card">
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          {upcoming.poster_path && (
                            <img
                              style={{ borderRadius: 15 }}
                              src={
                                "https://image.tmdb.org/t/p/w200" +
                                upcoming.poster_path
                              }
                              alt="..."
                            ></img>
                          )}
                        </div>{" "}
                        <div className="flip-card-back">
                          <br></br>
                          <h4>{upcoming.title}</h4>
                          <br></br>
                          <p>Release Date: {upcoming.release_date}</p>
                          <p>Popularity: {upcoming.popularity}</p>
                          <br></br>
                          <a href={"/moviedb-sample-react-app/movie/" + upcoming.id + "/"} class="btn1">
                            View Details
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <br></br>
            <br></br>

            <div className="heading">
              <h2>Currently Playing Movies</h2>
              <br></br>
            </div>
            <div className="scrolling-wrapper">
              {now["results"].map((current, index01) => {
                return (
                  <>
                    <div key={index01} className="flip-card">
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          {current.poster_path && (
                            <img
                              style={{ borderRadius: 15 }}
                              src={
                                "https://image.tmdb.org/t/p/w200" +
                                current.poster_path
                              }
                              alt="..."
                            ></img>
                          )}
                        </div>{" "}
                        <div className="flip-card-back">
                          <br></br>
                          <h4>{current.title}</h4>
                          <br></br>
                          <p>Release Date: {current.release_date}</p>
                          <p>Popularity: {current.popularity}</p>
                          <br></br>
                          <a href={"/moviedb-sample-react-app/movie/" + current.id + "/"} class="btn1">
                            View Details
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <br></br>
            <br></br>
            <br></br>
          </div>
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

export default Movies;
