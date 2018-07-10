import {FETCH_POSTS, NEW_POSTS, CREATE_POST} from './types'


// fetch
// export const new_posts = () => dispatch =>{
//     console.log("got")
//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(res => res.json())
//     .then(posts => 
//         dispatch({
//             type: NEW_POSTS,
//             payload: posts
//         })
//     )
// }

// Post request
export const create_posts = (postdata) => dispatch =>{
    console.log("gotpost", postdata)
    fetch('https://reqres.in/api/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postdata)
      })
      .then((Response)=>{
          console.log(Response)
      })
      .then(res=>res.json())
      .then(post => 
        dispatch({
            type: CREATE_POST,
            payload: post
        })
    )
}