class PostsApi {

  static getAllPosts() {
    return fetch('http://localhost:5001/posts').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  
static getPost(id) {
    const request = new Request(`http://localhost:5001/posts/${id}`, {
      method: 'POST',
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



  static updatePost(post) {
    const request = new Request(`http://localhost:5001/posts/${post.id}`, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json'
      }), 
      body: JSON.stringify({post: post})
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static createPost(post) {
    const request = new Request('http://localhost:5001/posts', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }), 
      body: JSON.stringify({post: post})
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static deletePost(id) {
    const request = new Request(`http://localhost:5001/posts/${id}`, {
      method: 'DELETE'
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
