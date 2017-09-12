import React from 'react';
import ModalContainer from '../modal/ModalContainer'
import PostsList from './PostsList'

const Posts = () => {
    return (
     <div>
        <div >           
               <ModalContainer />
        </div>
       
        <div >           
               <PostsList />
        </div>
    </div>
        
    );
};



export default Posts;
