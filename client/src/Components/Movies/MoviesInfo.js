import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

//bootsrtap
import { Container } from 'react-bootstrap';

//components
import Comments from '../Comments/Comments';
import Loader from '../Loader';
import GetMovies from '../../Hooks/GetMovies';

const MoviesInfo = () => {
  //important stuff
  const [ mId, setMId ] = useState([]);

  const { moviesId } = useParams();

  const {
    imdbRating,
    Title,
    Poster,
    Plot
  } = mId

  //the api cannot do sorting algos to sort the movies by lenght or anything it cant fetch by and and sort only by genre!
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?i=${moviesId}&apikey=c8cb9cb0`)
      .then(res => res.json())
      .then(data => {
        setMId(data)
      })
  }, [])


  const [ movies, spinner ] = GetMovies("http://www.omdbapi.com/?i=tt3896198&apikey=c8cb9cb0", [],)

  return (
    <div>
      {spinner ? <Loader/> : <header className='header__moviesInfo' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Poster})`}}/>}
      <Container className='mt-5'>
        <div className='d-flex'>
          <h1 className='mb-5 underline'>{ spinner ? <Loader/> :  Title}</h1>
          <h5 className='rating__text mx-3'>Rating: { imdbRating}/10</h5>
        </div>

        <p>{ spinner ? <Loader/> : Plot}</p>

        <Comments/>
      </Container>
    </div>
  )
}

export default MoviesInfo