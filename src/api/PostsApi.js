
const api = "http://localhost:5001"

let token = localStorage.token
if (!token)
   token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token,
  'Content-Type': 'application/json'
}


// GET /posts
export const getAllPosts = ()=> 
   fetch(`${api}/posts`, { headers })
    .then(response => response.json())


// DELETE /posts/:id
export const deletePost = (id) => {
  return fetch(`${api}/posts/${id}`, { 
    method: 'DELETE',
    headers 
  })
}

// Edit /posts/:id
export const editPost = (id,post) => {
  return fetch(`${api}/posts/${id}`, { 
    method: 'PUT',
    headers ,
     body: JSON.stringify(post)
  }) .then(response => response.json())

}



export const votePost = (id, option) => {
  return fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers:{
    ...headers,
       'Content-Type': 'application/json'},
    body: JSON.stringify({
      option: option
    })
  }).then(res => res.json())
}


// Post /posts/:id
export const getPost = (id) => {
  return fetch(`${api}/posts/${id}`, { headers })
    .then(response => response.json())
}

export const addPost = (post) =>{
 return fetch(`${api}/posts`, {
   method: 'POST',
   headers: headers,
   body: JSON.stringify(post)
  }).then(res => res.json())

}
