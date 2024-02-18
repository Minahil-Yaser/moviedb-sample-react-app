import useFetch from "./useFetch";
import "./css/movies.css";
import "./css/loader.css";

const TVs = ({ TMDB_API_KEY }) => {
  const url2 = `https://api.themoviedb.org/3/trending/tv/week?api_key=${TMDB_API_KEY}&language=en-US`;
  const url3 = `https://api.themoviedb.org/3/tv/popular?api_key=${TMDB_API_KEY}&language=en-US`;
  const url4 = `https://api.themoviedb.org/3/tv/top_rated?api_key=${TMDB_API_KEY}&language=en-US`;
  const url5 = `https://api.themoviedb.org/3/tv/airing_today?api_key=${TMDB_API_KEY}&language=en-US`;
  const url6 = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${TMDB_API_KEY}&language=en-US`;

  const { data: trending, res_status: res_status2 } = useFetch(url2);
  const { data: popular, res_status: res_status3 } = useFetch(url3);
  const { data: top, res_status: res_status4 } = useFetch(url4);
  const { data: airtoday, res_status: res_status5 } = useFetch(url5);
  const { data: airing, res_status: res_status6 } = useFetch(url6);

  console.log("D2", trending);
  console.log("D3", popular);
  console.log("D4", top);
  console.log("D5", airtoday);
  console.log("D6", airing);

  if (
    trending === null ||
    popular === null ||
    top === null ||
    airtoday === null ||
    airing === null
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
              <h2>Trending TV Shows of the Week</h2>
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
                          <h4>{trend.name}</h4>
                          <br></br>
                          <p>Air Date: {trend.first_air_date}</p>
                          <p>Popularity: {trend.popularity}</p>
                          <br></br>
                          <a href={"/moviedb-sample-react-app/tv/" + trend.id + "/"} class="btn1">
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
              <h2>Popular TV Shows</h2>
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
                          <h4>{pop.name}</h4>
                          <br></br>
                          <p>Air Date: {pop.first_air_date}</p>
                          <p>Popularity: {pop.popularity}</p>
                          <br></br>
                          <a href={"/moviedb-sample-react-app/tv/" + pop.id + "/"} class="btn1">
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
              <h2>Top-rated TV Shows</h2>
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
                          <h4>{topr.name}</h4>
                          <br></br>
                          <p>Air Date: {topr.first_air_date}</p>
                          <p>Popularity: {topr.popularity}</p>
                          <br></br>
                          <a href={"/moviedb-sample-react-app/tv/" + topr.id + "/"} class="btn1">
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
              <h2>TV Shows Airing Today</h2>
              <br></br>
            </div>
            <div className="scrolling-wrapper">
              {airtoday["results"].map((upcoming, index01) => {
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
                          <h4>{upcoming.name}</h4>
                          <br></br>
                          <p>Air Date: {upcoming.first_air_date}</p>
                          <p>Popularity: {upcoming.popularity}</p>
                          <br></br>
                          <a href={"/moviedb-sample-react-app/tv/" + upcoming.id + "/"} class="btn1">
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
              <h2>TV Shows Airing Today</h2>
              <br></br>
            </div>
            <div className="scrolling-wrapper">
              {airing["results"].map((current, index01) => {
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
                          <h4>{current.name}</h4>
                          <br></br>
                          <p>Air Date: {current.first_air_date}</p>
                          <p>Popularity: {current.popularity}</p>
                          <br></br>
                          <a href={"/moviedb-sample-react-app/tv/" + current.id + "/"} class="btn1">
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

export default TVs;
