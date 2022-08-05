const url = 'http://localhost:5050/jsonstore/comment';

const urlBlogs = 'http://localhost:5050/jsonstore/blogs';

const useCommentRest = () => {

    const postComment = (title) => {
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify({ title })
        }).then(res => res.json());
    }

    const postBlog = (title, text, img, price, qty) => {
        return fetch(urlBlogs, {
            method: 'POST',
            body: JSON.stringify({ title, text, img, price, qty})
        }) .then(res => res.json())
    }

    const deleteBlog = (_id) => {
        return fetch(`${urlBlogs}/${_id}`, {
            method:'DELETE',
        }).then(res => res.json())
         
    }

    return{
        postComment,
        postBlog,
        deleteBlog,
    }
}

export default useCommentRest;