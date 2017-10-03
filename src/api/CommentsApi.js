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


  

// export function getAllCommentsForPost(postId) {
//     const request = new Request(`http://localhost:5001/posts/${postId}/comments`, {
//       method: 'PUT',
//       headers: new Headers({
//         'Content-Type': 'application/json'
//       }), 
//      // body: JSON.stringify({posts: posts})
//     });


//     return fetch(request).then(commentsresponse => {
//       return commentsresponse.json();
//     }).catch(error => {
//       return error;
//     });
//   }

// static getComment(id) {
//     const request = new Request(`http://localhost:5001/comments/${id}`, {
//       method: 'PUT',
//       headers: new Headers({
//         'Content-Type': 'application/json'
//       }), 
//     });


//     return fetch(request).then(response => {
//       return response.json();
//     }).catch(error => {
//       return error;
//     });
//   }

// static createComment(comment) {
//     const request = new Request('http://localhost:5001/comments', {
//       method: 'POST',
//       headers: new Headers({
//         'Content-Type': 'application/json'
//       }), 
// body: JSON.stringify({comment: comment})
//     });

// return fetch(request).then(response => {
//       return response.json();
//     }).catch(error => {
//       return error;
//     });
//   }


//   static updateComment(comment) {
//     const request = new Request(`http://localhost:5001/comments/${comment.id}`, {
//       method: 'PUT',
//       headers: new Headers({
//         'Content-Type': 'application/json'
//       }), 
//       body: JSON.stringify({comment: comment})
//     });


//     return fetch(request).then(response => {
//       return response.json();
//     }).catch(error => {
//       return error;
//     });
//   }

  

//   static deleteComment(id) {
//     const request = new Request(`http://localhost:5001/comments/${id}`, {
//       method: 'DELETE'
//     });

//     return fetch(request).then(response => {
//       return response.json();
//     }).catch(error => {
//       return error;
//     });
//   }

//  // /comments/:id
// static votePost(id,option) {
//     const request = new Request(`http://localhost:5001/comments/${id}`, {
//       method: 'PUT',
//       headers: new Headers({
//         'Content-Type': 'application/json'
//       }), 
//       body: JSON.stringify({option: option})
//     });
// return fetch(request).then(postresponse => {
//       return postresponse.json();
//     }).catch(error => {
//       return error;
//     });
//   }





