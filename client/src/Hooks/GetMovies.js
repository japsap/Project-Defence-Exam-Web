import { useState, useEffect } from "react"

const GetMovies = (url, defaultValue, title) => {
    const [ data, setData ] = useState(defaultValue);
    const [ spinner, setSpinner ] = useState(false);

    useEffect(() => {
        setSpinner(true)
        fetch(`${url}&s=${title}`)
            .then(res => res.json())
            .then(response => {
                const movies = response.Search;
                setData(movies)
                setSpinner(false)
            })
    }, [ title ])

    return [ data, spinner]
}

export default GetMovies;