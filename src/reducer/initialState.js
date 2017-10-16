//This is to ensure that we can see the entirety of the store

export default {
    

  categoriesReducer: {
     categories: []
    },

    postsReducer: {
        posts: [],
        post:{
        comments:[],
         comment:{}

        },      
    },

   

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
