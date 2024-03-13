import { createContext, useReducer } from "react";


export const PostLists = createContext({
    postList : [],
    addPost : () => {},
    addInitialPost : () => {},
    deletePost : () => {},
})

const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;

    if (action.type === 'DELETE_POST') {
        newPostList = currPostList.filter((post) => post.id !== action.payload.postId)
    }else if (action.type === 'ADD_INITIAL_POST'){
        newPostList = action.payload.carts;
    }
    else if (action.type === 'ADD_POST') {
        newPostList = [action.payload,...currPostList]
    } 
    return newPostList;
}

const PostListProvider =  ({children}) => {

    const [postList , dispatchPostList] = useReducer(postListReducer, [])

    const addPost = (userId,postTitle,postBody,reactions,tags) => {
       dispatchPostList({
        type : 'ADD_POST',
        payload :  {
            id : Date.now(),
            title : postTitle,
            body : postBody, 
            reaction  : reactions,
            userId :  userId,
            tags : tags 
        },
       })
    }


    const addInitialPost = (carts) => {
       dispatchPostList({
        type : 'ADD_INITIAL_POST',
        payload :  {
           carts
        },
       })
    }

    const deletePost = (postId) => {
        dispatchPostList({
            type : 'DELETE_POST',
            payload : {
                postId
            }
        })
    }

    return (
        <PostLists.Provider value={
            {
                postList,
                addPost,
                addInitialPost,
                deletePost,
            }
        }>
            {children}
        </PostLists.Provider>
    )
}



export default PostListProvider