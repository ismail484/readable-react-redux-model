//This is to ensure that we can see the entirety of the store

export default {
    // postsReducer: {
    //     isFetching: true,
    //     error: '',
    // }

  categoriesReducer: {
     categories: [
    //      {
    //     name: 'react',
    //     path: 'react'
    //   },
    //   {
    //     name: 'redux',
    //     path: 'redux'
    //   },
    //   {
    //     name: 'udacity',
    //     path: 'udacity'
    //   }
     ]
    },

    postsReducer: {
        posts: [],
        post:{
        comments:[],
         comment:{}

        },
       
        
        
    },

    // sortedPostsReducer: {
    //      sortedPost: '-voteScore',
    //      sortedComment: '-voteScore' 
    // },

    commentsReducer: {
         comments:[],
         comment:{}
    },



    modalReducer: {
        postBody: '',
        isOpen: false
    },

    sortedReducer: {
         sort:'popular'
    },


}