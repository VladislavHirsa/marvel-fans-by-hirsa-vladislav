import axios from 'axios';
import {
  addPostReducer,
  setAllPosts,
  setPost
} from '../../redux/posts_reducer'


export const sendMessage = ( newText ) => async ( dispatch ) => {

console.log(newText)
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {

    const res = await axios.put( '/api/post', newText, config );
    dispatch( addPostReducer( res.data ) );
    console.log( res.data, 'addPostReducer' )
  } catch ( err ) {
    console.error( err )
  }

}


export const goToPosts = ( user_id ) => async ( dispatch ) => {


  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {

    const res = await axios.post( '/api/post', user_id, config );
    dispatch( addPostReducer( res.data ) );
    return res.data;
    // console.log( res.data, 'addPostReducer' )
  } catch ( err ) {
    console.error( err )
  }

}

export const getAllPosts = () => async ( dispatch ) => {

  try {
    const res = await axios.get( `/api/post` );
    dispatch( setAllPosts( res.data ) )
    console.log( res.data, "getPostsAPIiiii" )
  } catch ( err ) {

  }
}


export const getPost = ( post_id ) => async ( dispatch ) => {

  try {
    const res = await axios.get( `/api/post/post/${post_id}` );
    dispatch( setPost( res.data ) )
    let a = setInterval( () => {getPost(post_id)} , 2000);
    // console.log( res.data, "getPostAPI POST POST POST" )
  } catch ( err ) {

  }
}

export const deletePost = ( post_id ) => async ( dispatch ) => {
console.log(post_id, 'post_id.....')
try {
  
    await axios.delete(`/api/post/post/${post_id}`)
    console.log( 'Delete..............')

} catch (err) {
  console.log(err,'Error')
}

}