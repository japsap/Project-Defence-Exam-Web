import { useState, useEffect } from "react";

const useFetchId = (url, defaultValue, id)  => {
    const [ data, setData ] = useState(defaultValue)
    const [ b, setB ] = useState({})

    useEffect(() =>{
        fetch(`${url}/${id}`)   
            .then(res => res.json())
            .then(datichkata => {
                setB(datichkata)
            })
    }, [])

    return [data, b];
}

export default useFetchId