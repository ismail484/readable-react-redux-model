const api = "http://localhost:5001"

let token = localStorage.token
if (!token)
   token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token,
  'Content-Type': 'application/json'
}

// GET /posts/:id/comments
export const getAllComments = (id) =>
   fetch(`${api}/posts/${id}/comments`, { headers })
     .then(res => res.json())

    // .then(data => data.comments)


  



