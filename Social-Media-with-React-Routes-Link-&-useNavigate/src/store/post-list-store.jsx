import { createContext, useEffect, useReducer, useState } from "react";


export const PostLists = createContext({
    postList : [],
    fetching : false,
    addPost : () => {},
    deletePost : () => {},
})

const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;

    if (action.type === 'DELETE_POST') {
        newPostList = currPostList.filter((post) => post.id !== action.payload.postId)
    }
    else if (action.type === 'ADD_INITIAL_POST'){
        newPostList = action.payload.carts;
    }
    else if (action.type === 'ADD_POST') {
        newPostList = [action.payload,...currPostList]
    } 
    return newPostList;
}

const PostListProvider =  ({children}) => {

    const [postList , dispatchPostList] = useReducer(postListReducer, []);

    const [fetching, setFetching] = useState(false)

    useEffect(() => {
        setFetching(true)
        const controller = new AbortController();
        const signal = controller.signal;

        fetch('https://dummyjson.com/products', { signal })
            .then(res => res.json())
            .then((data) =>{
             addInitialPost(data.products)
             setFetching(false)
            })

            return () => {
                controller.abort()
            }
    },[])

    const addPost = (product) => {
       dispatchPostList({
        type : 'ADD_POST',
        payload :  product,
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
                fetching,
                addPost,
                deletePost,
            }
        }>
            {children}
        </PostLists.Provider>
    )
}



export default PostListProvider