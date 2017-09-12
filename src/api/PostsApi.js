//const api = process.env.REACT_APP_READABLE_API_URL || 'http://localhost:5001'

// Get token from localStorage
let token = localStorage.token

if (!token) 
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

class PostsApi {

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
