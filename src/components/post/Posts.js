import React from 'react';
import Modal from '../modal/Modal'
import PostsList from './PostsList'

const Posts = () => {
    return (
     <div>
        <div >           
               <Modal />
        </div>
       
        <div >           
               <PostsList />
        </div>
    </div>
        
    );
};



export default Posts;
