import axios from "axios";
import React, { useEffect, useState } from "react";

function Home() {
  const [movies, setMovies] = useState([]);
  const [people, setPeople] = useState([]);
  const [loadung, setLoadung] = useState(false);
  async function getAPI(mediaType, callback) {
    setLoadung(true);
    let data = await axios
      .get(
        `https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=09b639ab0b2b1b51b00568871d53f9fe`
      )
      .then((res) => {
        console.log("done", res.data.results);
        callback(res.data.results);
        setLoadung(false);
      })
      .catch((err) => {
        console.log("error", err);
        setLoadung(false);
      });
  }
  useEffect(() => {
    getAPI("movie", setMovies);
    getAPI("person", setPeople);
  }, []);
  console.log("people", people);
  return (
    <>
      {loadung ? (
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="container">
          <div className="row">
            {/* {console.log("compnent", movies)} */}
            {movies.slice(0, 8).map((movie) => {
              return (
                <div className="col-lg-3" key={movie.id}>
                  <div className="card">
                    <img
                      src={
                        "https://image.tmdb.org/t/p/w500" + movie.poster_path
                      }
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{movie.title}</h5>
                      <p className="card-text">{movie.overview}</p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <hr className="my-5" />
          <div className="row">
            {people.map((person) => {
              return (
                <div className="col-lg-3" key={person.id}>
                  <div className="card">
                    <img
                      src={
                        "https://image.tmdb.org/t/p/w500" + person.profile_path
                      }
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{person.name}</h5>
                      <p className="card-text">{person.known_for_department}</p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
