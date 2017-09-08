//This is to ensure that we can see the entirety of the store

export default {
    postsReducer: {
        isFetching: true,
        error: '',
    },

    feedReducer: {
 newPostsAvailable: false,
  newPostsToAdd: [],
  isFetching: false,
  error: '',
  postIds: [],
    },

    modalReducer: {
        postBody: '',
        isOpen: false
    },

    

};
