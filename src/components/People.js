import useFetch from "./useFetch";
import "./css/people.css";
import "./css/loader.css";

const People = ({ TMDB_API_KEY }) => {
  const url = `https://api.themoviedb.org/3/person/popular?api_key=${TMDB_API_KEY}&language=en-US`;
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
          <h2 style={{ marginLeft: "640px", marginTop: "50px" }}>
            Popular People
          </h2>
          <br></br>
          <br></br>
          <div className="container first">
            <div className="row ten-columns1"></div>
            {data.results && (
              <>
                {data["results"].map((res, index01) => {
                  return (
                    <>
                      <div key={index01} className="column1">
                        <div className="flip-card">
                          <div className="flip-card-inner">
                            <div className="flip-card-front">
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
                              {res.name && (
                                <>
                                  <h3>{res.name}</h3>
                                  <br></br>
                                </>
                              )}

                              <p>Popularity: {res.popularity}</p>
                              <br></br>

                              <a href={"/moviedb-sample-react-app/person/" + res.id} className="btn1">
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

export default People;
