
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





// POST /comments
export const addComment = (comment) =>
  fetch(`${api}/comments`, {
   method: 'POST',
   headers: headers,
   body: JSON.stringify(comment)
  }).then(res => res.json())


  // DELETE /comments/:id
export const deleteComment = (id) => {
  return fetch(`${api}/comments/${id}`, {
    method: 'DELETE',
    headers
  }).then(data => data.json())
}



// PUT  /comments/:id
export const editComment = (id,comment) => {
  return fetch(`${api}/comments/${id}`, { 
    method: 'PUT',
    headers ,
     body: JSON.stringify(comment)
  }) .then(response => response.json())

}

export const voteComment = (id, option) => {
  return fetch(`${api}/comments/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      option: option
    })
  }).then(data => data.json())
}

