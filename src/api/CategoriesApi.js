let token = localStorage.token

if (!token) 
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}



export class CategoriesApi {
  static getAllCategories() {
    return fetch('http://localhost:5001/categories',{headers})
    .then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  }


