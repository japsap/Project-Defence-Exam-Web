import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const MoviesInfo = () => {
  const [ mId, setMId] = useState([]);

  const { moviesId } = useParams();

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?i=${moviesId}&apikey=c8cb9cb0`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }, [])

  return (
    <div></div>
  )
}

export default MoviesInfo