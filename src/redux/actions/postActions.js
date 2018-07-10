import {FETCH_POSTS, NEW_POSTS} from './types'

export const new_posts = () => dispatch =>{
    console.log("got")
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts => 
        dispatch({
            type: NEW_POSTS,
            payload: posts
        })
    )
}