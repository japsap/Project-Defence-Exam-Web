import { useState, useEffect } from "react";

const useCommentRest = (url, defaultValue,) => {

    const [ datas, setDatas] = useState(defaultValue);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setDatas(Object.values(data));
            })
    }, []);

    return [ datas ]

}

export default useCommentRest;