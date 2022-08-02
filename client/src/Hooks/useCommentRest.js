const url = 'http://localhost:5050/jsonstore/comment';

const useCommentRest = () => {

    const postComment = (title) => {
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify({ title })
        }).then(res => res.json());
    }

    return{
        postComment
    }
}

export default useCommentRest;