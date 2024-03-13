import { createContext, useCallback, useReducer } from "react";


export const PostLists = createContext({
    postList : [],
    addPost : () => {},
    deletePost : () => {},
})

const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;

    if (action.type === 'DELETE_POST') {
        newPostList = currPostList.filter((post) => post.id !== action.payload.postId)
    }else if (action.type === 'ADD_POST') {
        newPostList = [action.payload,...currPostList]
    } 
    return newPostList;
}

const PostListProvider =  ({children}) => {

    const [postList , dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST)

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

    const deletePost = useCallback((postId) => {
        dispatchPostList({
            type : 'DELETE_POST',
            payload : {
                postId
            }
        })
    },[dispatchPostList])

    return (
        <PostLists.Provider value={
            {
                postList,
                addPost,
                deletePost,
            }
        }>
            {children}
        </PostLists.Provider>
    )
}

const DEFAULT_POST_LIST = [
    {
        id : '1',
        title : "Going to USA",
        body : "Hey users i am very exited to go uk for job..", 
        reaction  : 2,
        userId :  'user-2',
        tags : ['job','package','lifeset'] 
    },

    {
        id : '2',
        title : "Going to Delhi",
        body : "Hey users i want to complete my study in delhi ,..", 
        reaction  : 10,
        userId :  'user-4',
        tags : ['study','good-life','future'] 
    },
]

export default PostListProvider