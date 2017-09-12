
export class CategoriesApi {
  static getAllCategories() {
    return fetch('http://localhost:5000/categories').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  }