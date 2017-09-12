class PostsApi {




static getAllCommentsForPost(postId) {
    const request = new Request(`http://localhost:5001/posts/${postId}/comments`, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json'
      }), 
     // body: JSON.stringify({posts: posts})
    });


    return fetch(request).then(commentsresponse => {
      return commentsresponse.json();
    }).catch(error => {
      return error;
    });
  }

static getComment(id) {
    const request = new Request(`http://localhost:5001/comments/${id}`, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json'
      }), 
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

static createComment(comment) {
    const request = new Request('http://localhost:5001/comments', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }), 
body: JSON.stringify({comment: comment})
    });

return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }


  static updateComment(comment) {
    const request = new Request(`http://localhost:5001/comments/${comment.id}`, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json'
      }), 
      body: JSON.stringify({comment: comment})
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  

  static deleteComment(id) {
    const request = new Request(`http://localhost:5001/comments/${id}`, {
      method: 'DELETE'
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

 // /comments/:id
static votePost(id,option) {
    const request = new Request(`http://localhost:5001/comments/${id}`, {
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
