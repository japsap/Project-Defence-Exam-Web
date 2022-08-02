import { useState, useEffect } from "react"

const GetMovies = (url, defaultValue, title) => {
    const [ data, setData ] = useState(defaultValue);

    useEffect(() => {
        fetch(`${url}&s=${title}`)
            .then(res => res.json())
            .then(response => {
                const movies = response.Search;
                setData(movies)
            })
    },[])

    return [ data, setData]
}

export default GetMovies;