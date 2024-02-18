import React from "react";
import useFetch from "./useFetch";
import "./css/loader.css";
import "./css/results.css";
import { useLocation, Navigate } from "react-router-dom";

const Results = ({ TMDB_API_KEY }) => {
  const query = new URLSearchParams(useLocation().search);
  const type = query.get("type");
  const search = query.get("search");

  const url = `https://api.themoviedb.org/3/search/${type}?api_key=${TMDB_API_KEY}&language=en-US&page=1&include_adult=false&query=${search}`;
  const { data, res_status } = useFetch(url);

  if (data === null) {
    if (search === "") {
      return <Navigate replace to="/error" />;
    } else {
      return (
        <>
          <div className="loadscreen">
            {" "}
            <div className="loader"></div>
          </div>
        </>
      );
    }
  } else {
    if (res_status === 200) {
      return (
        <>
          <div className="container first">
            <div className="row ten-columns"></div>
            {data.results && (
              <>
                {data["results"].map((res, index01) => {
                  return (
                    <>
                      <div key={index01} className="column1">
                        <div className="flip-card">
                          <div className="flip-card-inner">
                            <div className="flip-card-front">
                              {res.poster_path && (
                                <img
                                  style={{ borderRadius: 15 }}
                                  src={
                                    "https://image.tmdb.org/t/p/w200" +
                                    res.poster_path
                                  }
                                  alt="..."
                                />
                              )}
                              {res.profile_path && (
                                <img
                                  style={{ borderRadius: 15 }}
                                  src={
                                    "https://image.tmdb.org/t/p/w200" +
                                    res.profile_path
                                  }
                                  alt="..."
                                />
                              )}
                            </div>

                            <div class="flip-card-back">
                              <br></br>
                              {res.title && (
                                <>
                                  <h3>{res.title}</h3>
                                  <br></br>
                                </>
                              )}
                              {res.name && (
                                <>
                                  <h3>{res.name}</h3>
                                  <br></br>
                                </>
                              )}
                              {res.release_date && (
                                <>
                                  <p>Release Date: {res.release_date}</p>
                                </>
                              )}
                              {res.first_air_date && (
                                <>
                                  <p>Air Date: {res.first_air_date}</p>
                                </>
                              )}

                              <p>Popularity: {res.popularity}</p>
                              <br></br>

                              <a
                                href={"/moviedb-sample-react-app/" + type + "/" + res.id}
                                className="btn1"
                              >
                                View Details
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}

                {!data["results"] && (
                  <div class="noresult">No Results Found!</div>
                )}
              </>
            )}
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

export default Results;
