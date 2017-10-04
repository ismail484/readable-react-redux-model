
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

// DELETE /posts/:id
export const editPost = (id,post) => {
  return fetch(`${api}/posts/${id}`, { 
    method: 'PUT',
    headers 
  })
  body: JSON.stringify(post)
}



// POST /posts/:id
export const votePost = (id, option) => {
  return fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers:{
    ...headers,
       'Content-Type': 'application/json'},
    body: JSON.stringify({
      option: option
    })
  })
}


// Post /posts/:id
export const getPost = (id) => {
  return fetch(`${api}/posts/${id}`, { headers })
    .then(response => response.json())
}

export const addPost = (post) =>
  fetch(`${api}/posts`, {
   method: 'POST',
   headers: headers,
   body: JSON.stringify(post)
  }).then(res => res.json())


/* createPost(post) {
    const request = new Request('http://localhost:5001/posts', {
      method: 'POST',
      headers: {
      ...headers,
      'Content-Type': 'application/json'},
      body: JSON.stringify({post: post})
      }) */
/* class PostsApi {

  static getAllPosts() {
    return fetch('http://localhost:5001/posts',{headers})
    .then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  
static getPost(id) {
    const request = new Request(`http://localhost:5001/posts/${id}`, 
    {headers});
    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }



  static updatePost(post) {
    const request = new Request(`http://localhost:5001/posts/${post.id}`, {
      method: 'PUT',
      headers: {
      ...headers,
      'Content-Type': 'application/json'},
      body: JSON.stringify({post: post})
      })
    


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static createPost(post) {
    const request = new Request('http://localhost:5001/posts', {
      method: 'POST',
      headers: {
      ...headers,
      'Content-Type': 'application/json'},
      body: JSON.stringify({post: post})
      })


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static deletePost(id) {
    const request = new Request(`http://localhost:5001/posts/${id}`, {
      method: 'DELETE',headers
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

   static getPost(id) {
    const request = new Request(`http://localhost:5001/posts/${id}`, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json'
      }), 
     // body: JSON.stringify({post: post})
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }


  

  static getAllPostsForCategory(category) {
    const request = new Request(`http://localhost:5001/${category}/posts`, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json'
      }), 
    });


    return fetch(request).then(postsresponse => {
      return postsresponse.json();
    }).catch(error => {
      return error;
    });
  }
  
  
 // POST /posts/:id
static votePost(id,option) {
    const request = new Request(`http://localhost:5001/posts/${id}`, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json'
      }), 
      body: JSON.stringify({option: option})
    });
return fetch(request).then(postresponse => {
      return postresponse.json();
    }).catch(error => {
      return error;
    });
  }


}



export default PostsApi;
 */