import useFetch from "./useFetch";
import { useParams } from "react-router-dom";
import "./css/loader.css";
import "./css/personDetails.css";

const PeopleDetails = ({ TMDB_API_KEY }) => {
  const { id } = useParams();

  const url = `https://api.themoviedb.org/3/person/${id}?api_key=${TMDB_API_KEY}&language=en-US"`;
  const url2 = `https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${TMDB_API_KEY}`;

  const { data: person, res_status: res_status1 } = useFetch(url);
  const { data: work, res_status: res_status2 } = useFetch(url2);

  console.log("D1", person);
  console.log("D2", work);

  if (person === null || work === null) {
    return (
      <>
        <div className="loadscreen">
          {" "}
          <div className="loader"></div>
        </div>
      </>
    );
  } else {
    if (res_status1 === 200 && res_status2 === 200) {
      return (
        <>
          <div className="container fluid">
          <div className="containerP" style={{ minHeight: "300px", marginLeft:"30px", marginTop:"50px" }}>
            {person.profile_path && (
              <img
                className="cast-pic"
                src={"https://image.tmdb.org/t/p/w200" + person.profile_path}
                alt="..."
              ></img>
            )}
             {!person.profile_path && (<h3>No image!</h3>)}
            </div>
            <div className="col mov-info">
              <h2>{person.name}</h2>
              <p>Popularity: {person.popularity}</p>
              <br></br>
              <h3>Personal Info</h3>
              {person.gender === 2 && (
                <p>
                  <b>Gender: </b>Male
                </p>
              )}
              {person.gender === 1 && (
                <p>
                  <b>Gender: </b>Female
                </p>
              )}
              <p>
                <b>Known for: </b>
                {person.known_for_department}
              </p>
              <p>
                <b>Birthdate: </b>
                {person.birthday}
              </p>
              <p>
                <b>Place of Birth: </b>
                {person.place_of_birth}
              </p>
              <p>
                <b>Also known as: </b>

                {person["also_known_as"].map((res, index1) => {
                  return (
                    <>
                      <h6 key={index1} style={{ display: "inline-block" }}>
                        {" "}
                        {res} |{" "}
                      </h6>
                    </>
                  );
                })}
              </p>
            </div>

            <div className="col overview1">
              <h3>Biography</h3>
              {person.biography && <p>{person.biography}</p>}
              {!person.biography && <p>No conetnt.</p>}
            </div>

            <div className="cast">
              <h2>Known for</h2>
            </div>

            <div className="scrolling-wrapper">
              {work.cast && (
                <>
                  {work["cast"].map((cast, index01) => {
                    return (
                      <>
                        <div key={index01} className="flip-card">
                          <div className="flip-card-inner">
                            <div className="flip-card-front">
                              {cast.poster_path && (
                                <img
                                  style={{ borderRadius: 15 }}
                                  src={
                                    "https://image.tmdb.org/t/p/w200" +
                                    cast.poster_path
                                  }
                                  alt="..."
                                ></img>
                              )}
                            </div>
                            <div className="flip-card-back">
                              <br></br>
                              {cast.media_type === "movie" && (
                                <>
                                  <h4>{cast.title}</h4>
                                  <br></br>
                                  <p>Media Type: Movie</p>
                                  <p>Release Date: {cast.release_date}</p>
                                </>
                              )}
                              {cast.media_type === "tv" && (
                                <>
                                  <h4>{cast.name}</h4>
                                  <br></br>
                                  <p>Media Type: TV</p>
                                  <p>Air Date: {cast.first_air_date}</p>{" "}
                                </>
                              )}

                              <p>Popularity: {cast.popularity}</p>
                              <br></br>
                              <a
                                href={
                                  "/moviedb-sample-react-app/" + cast.media_type + "/" + cast.id + "/"
                                }
                                className="btn1"
                              >
                                View Details
                              </a>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </>
              )}
            </div>
          </div>
          <br></br>
          <br></br>
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

export default PeopleDetails;
