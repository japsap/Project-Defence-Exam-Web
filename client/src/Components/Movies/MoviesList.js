import React from "react";
import { Link } from "react-router-dom";

//bootstrap
import Card from "react-bootstrap/Card";

//comps data

const MoviesList = (movies) => {
  const { Title, imdbID, Poster} = movies;



  return (
    //somehow the card boostrap tag doesnt read my css so i put the styles inside the tag witch is ugly and unethical
    <Link to={`${imdbID}`} className="imageMovies">
      <Card
        className="bg-dark mb-5"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 3.7)), url(${
            Poster == "N/A"
              ? "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1825eb0fc75%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1825eb0fc75%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22108.5390625%22%20y%3D%2297.5%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
              : Poster
          })`,
          border: "none",
          height: "30vh",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          userSelect: "none",
          cursor: "pointer",
        }}
      >
        <Card.ImgOverlay
          className="card__overlay"
        >
          <Card.Title>{Title}</Card.Title>
          <p>It is a long established fact that a reader will be distracted by the readable content...</p>
        </Card.ImgOverlay>
      </Card>
    </Link>
  );
};

export default MoviesList;
